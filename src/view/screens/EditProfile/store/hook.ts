import * as FileSystem from "expo-file-system"
import { imageUploadPayloadState, modalUploadAvatarState, uploadAvatarState } from "./atom"
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil"
import { userApi } from "~/src/api/userApi"
import { Alert } from "react-native"
import authAction from "../../Auth/store/authAction"
import { getImageInDevice } from "~/src/utilities"
const imageDirectory = FileSystem.documentDirectory + "IE307/"
const ensureDirectoryExits = async () => {
  const directoryInfo = await FileSystem.getInfoAsync(imageDirectory)
  if (!directoryInfo.exists) {
    await FileSystem.makeDirectoryAsync(imageDirectory, { intermediates: true })
  }
}

const useGetImageUpload = () => {
  const setImageUploadPayloadState = useSetRecoilState(imageUploadPayloadState)
  const setModalUploadAvatar = useSetRecoilState(modalUploadAvatarState)
  const saveImage = async (uri: string) => {
    await ensureDirectoryExits()
    const fileName = new Date().getTime() + ".jpg"
    const destination = imageDirectory + fileName
    await FileSystem.copyAsync({ from: uri, to: destination })
    setImageUploadPayloadState((preState) => ({
      state: "hasValue",
      contents: {
        ...preState.contents,
        uri: destination,
      },
    }))
  }

  const onSetImageUploadPayloadState = async (useLibrary: boolean) => {
    let result = await getImageInDevice(useLibrary)
    if (!result.canceled) {
      saveImage(result.assets[0].uri)
      setModalUploadAvatar(() => true)
    }
  }
  return { onSetImageUploadPayloadState }
}

const useImageUpload = () => {
  const setUpload = useSetRecoilState(uploadAvatarState)
  const {
    state,
    contents: { uri },
  } = useRecoilValue(imageUploadPayloadState)
  const { onGetMe } = authAction.getMe()
  const alert = (message: string) =>
    Alert.alert(message, undefined, [
      {
        text: "Oke",
      },
    ])

  const resetImageUploadPayload = useResetRecoilState(imageUploadPayloadState)
  const onImageUpload = async () => {
    try {
      setUpload({
        state: "loading",
        message: null,
      })
      if (!uri) {
        throw { data: { message: "Some thing wrong please choice avatar again" } }
      }
      const base64String = await FileSystem.readAsStringAsync(uri, {
        encoding: "base64",
        length: 9999999,
      })
      const image = "data:image/jpeg;base64," + base64String
      const {
        data: { data, message },
      } = await userApi.postUploadAvatar({ avatar: image })
      alert(message)
      setUpload({
        state: "hasValue",
        message: null,
      })
      resetImageUploadPayload()
      await onGetMe()
    } catch (error: any) {
      console.log(error.data)
      alert(error.data.message)
      setUpload({
        state: "hasError",
        message: error.data.message,
      })
    }
  }
  return { onImageUpload }
}

const editProfileAction = {
  useGetImageUpload,
  useImageUpload,
}
export default editProfileAction

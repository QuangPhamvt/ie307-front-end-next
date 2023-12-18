import React from "react"
import * as ImagePicker from "expo-image-picker"
import * as FileSystem from "expo-file-system"
import { imageUploadPayloadState, modalUploadAvatarState, showModalEditAvatarState, uploadAvatarState } from "./atom"
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil"
import { userApi } from "~/src/api/userApi"
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
  const setModalEditAvatar = useSetRecoilState(showModalEditAvatarState)
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
    let result
    const option: ImagePicker.ImagePickerOptions = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [5, 3],
      quality: 0.75,
    }
    if (useLibrary) {
      result = await ImagePicker.launchImageLibraryAsync(option)
    } else {
      await ImagePicker.requestCameraPermissionsAsync()
      result = await ImagePicker.launchCameraAsync(option)
    }
    if (!result.canceled) {
      saveImage(result.assets[0].uri)
    }
    setModalUploadAvatar(() => true)
  }
  return { onSetImageUploadPayloadState }
}

const useImageUpload = () => {
  const setUpload = useSetRecoilState(uploadAvatarState)
  const {
    state,
    contents: { uri },
  } = useRecoilValue(imageUploadPayloadState)

  const resetImageUploadPayload = useResetRecoilState(imageUploadPayloadState)
  const handleImageUpload = async () => {
    try {
      setUpload({
        state: "loading",
        message: null,
      })
      if (!uri) {
        throw { data: { message: "Some thing wrong" } }
      }

      const base64String = await FileSystem.readAsStringAsync(uri, {
        encoding: "base64",
        length: 9999999,
      })
      const image = "data:image/jpeg;base64," + base64String
      // const {
      //   data: { message },
      // } = await userApi.uploadPost({ title, image })

      setUpload({
        state: "hasValue",
        message: null,
      })
      resetImageUploadPayload()
    } catch (error: any) {
      console.log(error.data)
      setUpload({
        state: "hasError",
        message: error.data.message,
      })
    }
  }
  return { handleImageUpload }
}

const editProfileAction = {
  useGetImageUpload,
  useImageUpload,
}
export default editProfileAction

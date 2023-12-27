import * as MediaLibrary from "expo-media-library"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { listImageLibraryStoryState, originImageStoryState, uploadStoryState } from "./atom"
import { ensureDirectoryExits, getImageInDevice, imageToBase64, saveImage } from "~/src/utilities"
import * as FileSystem from "expo-file-system"
import { userApi } from "~/src/api"
import { Alert } from "react-native"

const imageDirectory = FileSystem.documentDirectory + "IE307/"

const useGetListToStory = () => {
  const setOriginImage = useSetRecoilState(originImageStoryState)
  const setImageLib = useSetRecoilState(listImageLibraryStoryState)
  const albumName = "Photos"
  const onGetListImageStory = async () => {
    setImageLib({ state: "loading", data: null })
    const isMediaLibraryEnable = await MediaLibrary.getPermissionsAsync()
    if (!isMediaLibraryEnable.granted) {
      await MediaLibrary.requestPermissionsAsync()
    }
    const getPhotos = await MediaLibrary.getAlbumAsync(albumName)
    const getAllPhotos = await MediaLibrary.getAssetsAsync({
      first: 20,
      album: getPhotos,
      sortBy: ["creationTime"],
      mediaType: "photo",
    })
    setImageLib({
      state: "hasValue",
      data: getAllPhotos.assets.map((item) => ({
        id: item.id,
        uri: item.uri,
      })),
    })
    setOriginImage({
      data: {
        id: getAllPhotos.assets[0].id,
        uri: getAllPhotos.assets[0].uri,
      },
    })
  }
  return { onGetListImageStory }
}
const useImageCameraToUploadStory = () => {
  const setOriginImage = useSetRecoilState(originImageStoryState)
  const saveImage = async (id: string, uri: string) => {
    await ensureDirectoryExits()
    const fileName = new Date().getTime() + ".jpg"
    const destination = imageDirectory + fileName
    await FileSystem.copyAsync({ from: uri, to: destination })
    setOriginImage({
      data: { id, uri },
    })
  }
  const onImageCameraToUploadStory = async () => {
    let result = await getImageInDevice(false)
    if (!result.canceled) {
      saveImage(result.assets[0].assetId || "", result.assets[0].uri)
    }
  }
  return { onImageCameraToUploadStory }
}
const useUploadStory = () => {
  const originStory = useRecoilValue(originImageStoryState)
  const setUploadStory = useSetRecoilState(uploadStoryState)
  const alert = (message: string) =>
    Alert.alert(message, undefined, [
      {
        text: "Oke",
        onPress: () => setUploadStory({ state: "idle", message: null }),
      },
    ])
  const onUploadStory = async () => {
    try {
      if (!originStory.data?.uri) throw { data: { message: "Some thing wrong please choice avatar again" } }
      const uri = await saveImage(originStory.data.uri)
      const image = await imageToBase64(uri)
      setUploadStory({ state: "loading", message: null })
      const { data } = await userApi.postUploadStory({ image })
      setUploadStory({ state: "hasValue", message: data.message })
      alert(data.message)
    } catch (error: any) {
      console.log(error)
      alert(error.data.message)
      setUploadStory({ state: "hasError", message: error.data.message })
    }
  }
  return { onUploadStory }
}
const uploadImageStoryAction = {
  useGetListToStory,
  useImageCameraToUploadStory,
  useUploadStory,
}
export default uploadImageStoryAction

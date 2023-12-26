import * as MediaLibrary from "expo-media-library"
import { useSetRecoilState } from "recoil"
import { listImageLibraryStoryState, originImageStoryState } from "./atom"
import { ensureDirectoryExits, getImageInDevice } from "~/src/utilities"
import * as FileSystem from "expo-file-system"

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
const uploadImageStoryAction = {
  useGetListToStory,
  useImageCameraToUploadStory,
}
export default uploadImageStoryAction

import * as MediaLibrary from "expo-media-library"
import { useRecoilState, useSetRecoilState } from "recoil"
import { listImageLibraryState, originImageState, uploadPostState } from "./atom"
import { imageToBase64, saveImage } from "~/src/utilities"

const useGetImageToUpload = () => {
  const [listImages, setListImages] = useRecoilState(uploadPostState)
  const onGetImageToUpload = async ({ id, uri, isChoice }: { id: string; uri: string; isChoice: boolean }) => {
    const images = listImages.images
    const data = await imageToBase64(uri)
    const newImage = {
      id,
      image: data,
    }

    if (images.length === 0) {
      setListImages((preState) => ({
        ...preState,
        state: "hasValue",
        title: preState.title,
        images: [newImage],
      }))
      return
    }
    if (isChoice) {
      setListImages((preState) => ({
        ...preState,
        state: "hasValue",
        title: preState.title,
        images: [...images, newImage],
      }))
      return
    }

    const newImages = listImages.images.filter((item) => {
      return item.id !== id
    })
    setListImages((preState) => ({
      ...preState,
      state: "hasValue",
      title: preState.title,
      images: [...newImages],
    }))
  }

  return { onGetImageToUpload }
}
const useGetListImage = () => {
  const setOriginImage = useSetRecoilState(originImageState)
  const setImageLib = useSetRecoilState(listImageLibraryState)
  const albumName = "Photos"
  const onGetListImage = async () => {
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
      data: await Promise.all(
        getAllPhotos.assets.map(async (item) => ({
          id: item.id,
          uri: await saveImage(item.uri),
        })),
      ),
    })
    setOriginImage({
      data: {
        id: getAllPhotos.assets[0].id,
        uri: getAllPhotos.assets[0].uri,
      },
    })
  }
  return { onGetListImage }
}
const uploadImageAction = {
  useGetListImage,
  useGetImageToUpload,
}
export default uploadImageAction

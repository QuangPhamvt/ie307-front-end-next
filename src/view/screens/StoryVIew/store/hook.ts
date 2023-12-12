import * as MediaLibrary from "expo-media-library"
import { useSetRecoilState } from "recoil"
import { listImageLibraryStoryState, originImageStoryState } from "./atom"
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
const uploadImageStoryAction = {
  useGetListToStory,
}
export default uploadImageStoryAction

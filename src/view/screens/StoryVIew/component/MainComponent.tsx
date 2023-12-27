import { Entypo, Feather } from "@expo/vector-icons"
import React from "react"
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native"
import uploadImageStoryAction from "../store/hook"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { listImageLibraryStoryState, originImageStoryState } from "../store/atom"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { StoryViewStackParamList } from "~/src/view/type"

const ItemImageComponent: React.FC<{ id: string; uri: string }> = ({ id, uri }) => {
  const navigator = useNavigation<StackNavigationProp<StoryViewStackParamList, "SelectStoryStack">>()
  const setOriginImage = useSetRecoilState(originImageStoryState)
  return (
    <TouchableOpacity
      onPress={() => {
        setOriginImage({ data: { id, uri } })
        navigator.navigate("UploadStoryStack")
      }}
      className="w-1/3 border-[0.5px] border-black bg-white"
    >
      <View style={{ aspectRatio: "3 / 5" }} className="w-full">
        <Image source={{ uri }} className="h-full w-full object-contain" />
      </View>
    </TouchableOpacity>
  )
}
const ListImageComponent: React.FC = () => {
  const { data } = useRecoilValue(listImageLibraryStoryState)
  const { onImageCameraToUploadStory } = uploadImageStoryAction.useImageCameraToUploadStory()
  const originImage = useRecoilValue(originImageStoryState)
  if (!data) return null
  return (
    <ScrollView className="h-fit w-full bg-black">
      <View className="flex w-screen flex-row flex-wrap">
        <TouchableOpacity onPress={onImageCameraToUploadStory} className="w-1/3 border-[0.5px] border-black bg-black">
          <View style={{ aspectRatio: "3 / 5" }} className="relative flex w-full items-center justify-center">
            <Feather name="camera" size={28} color={"white"} />
          </View>
          <Text className="absolute bottom-2 left-2 font-bold text-white">Camera</Text>
        </TouchableOpacity>
        {data.map(({ id, uri }) => {
          return <ItemImageComponent id={id} uri={uri} key={id} />
        })}
      </View>
    </ScrollView>
  )
}
const MainComponent: React.FC = () => {
  const { onGetListImageStory } = uploadImageStoryAction.useGetListToStory()
  React.useEffect(() => {
    onGetListImageStory()
  }, [])
  return (
    <View className="flex">
      <View className="w-full flex-row justify-between px-4 py-2">
        <Text className="text-lg font-medium text-white">Recents</Text>
        <View className="flex flex-row items-center space-x-2 rounded-lg bg-gray-900 px-3 py-1 ">
          <Entypo name="popup" size={14} color={"white"} />
          <Text className="text-sm text-white">Select</Text>
        </View>
      </View>
      <ListImageComponent />
    </View>
  )
}
export default MainComponent

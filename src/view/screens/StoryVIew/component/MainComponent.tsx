import { Entypo, Feather } from "@expo/vector-icons"
import React from "react"
import { Text, View, ScrollView, Image } from "react-native"
import uploadImageStoryAction from "../store/hook"
import { useRecoilValue } from "recoil"
import { listImageLibraryStoryState } from "../store/atom"

const ItemImageComponent: React.FC<{ id: string; uri: string }> = ({ id, uri }) => {
  return (
    <View className="w-1/3 border-[0.5px] border-black bg-white">
      <View style={{ aspectRatio: "3 / 5" }} className="w-full">
        <Image source={{ uri }} className="h-full w-full object-contain" />
      </View>
    </View>
  )
}
const ListImageComponent: React.FC = () => {
  const { data } = useRecoilValue(listImageLibraryStoryState)
  if (!data) return null
  return (
    <ScrollView className="h-fit w-full bg-black">
      <View className="flex w-screen flex-row flex-wrap">
        <View className="w-1/3 border-[0.5px] border-black bg-black">
          <View style={{ aspectRatio: "3 / 5" }} className="relative flex w-full items-center justify-center">
            <Feather name="camera" size={28} color={"white"} />
          </View>
          <Text className="absolute bottom-2 left-2 font-bold text-white">Camera</Text>
        </View>
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

import React from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons"
import { listImageLibraryState, originImageState, uploadImageAction } from "../store"
import ImageHoc from "~/src/view/components/ImageHOC"

const ItemImageComponent: React.FC<{ id: string; uri: string }> = ({ id, uri }) => {
  const [originImage, setOriginImage] = useRecoilState(originImageState)
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => setOriginImage({ data: { id, uri } })}
      className={`w-1/4 border-[1px] border-black ${
        originImage.data?.uri === uri ? "opacity-40 backdrop-opacity-25" : ""
      }`}
    >
      <View className="w-full aspect-square">
        <Image source={{ uri }} className="w-full h-full" />
      </View>
    </TouchableOpacity>
  )
}
const ListImageComponent: React.FC = () => {
  const getImageLib = useRecoilValue(listImageLibraryState)
  const { onGetListImage } = uploadImageAction.useGetListImage()
  React.useEffect(() => {
    onGetListImage()
  }, [])
  return (
    <ScrollView className="w-full ">
      <View className="flex flex-row flex-wrap w-full">
        {getImageLib.data &&
          getImageLib.data.map((item) => {
            return <ItemImageComponent key={item.id} id={item.id} uri={item.uri} />
          })}
      </View>
    </ScrollView>
  )
}

const MainComponent: React.FC = () => {
  const getOriginImage = useRecoilValue(originImageState)
  return (
    <View className="flex items-center justify-center w-full space-y-4">
      <View className="w-4/5 bg-gray-400 h-96">
        <ImageHoc uri={getOriginImage.data?.uri || ""} className="" />
      </View>
      <View className="flex flex-row items-center justify-between w-full px-2 mb-2">
        <View className="flex flex-row items-center space-x-2">
          <Text className="text-lg font-bold text-white">Recents</Text>
          <Text className="text-lg font-bold text-gray-500">Drafts</Text>
        </View>
        <View className="flex flex-row items-center rounded-full border-[1px] border-gray-400 p-[6px]">
          <Feather name="camera" size={16} color={"white"} />
        </View>
      </View>
      <ListImageComponent />
    </View>
  )
}
export default MainComponent

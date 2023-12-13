import React from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator, NativeScrollEvent } from "react-native"
import { AntDesign, Entypo, Feather } from "@expo/vector-icons"
import { listImageLibraryState, multiImageState, originImageState, uploadImageAction } from "../store"
import ImageHoc from "~/src/view/components/ImageHOC"

const ItemImageComponent: React.FC<{ id: string; uri: string }> = ({ id, uri }) => {
  const multiImage = useRecoilValue(multiImageState)
  const [originImage, setOriginImage] = useRecoilState(originImageState)
  const [isChoice, setIsChoice] = React.useState<boolean>(false)
  const { onGetImageToUpload } = uploadImageAction.useGetImageToUpload()
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        setOriginImage({ data: { id, uri } })
        if (!isChoice) {
          onGetImageToUpload({ id, uri, isChoice: true })
        } else {
          onGetImageToUpload({ id, uri, isChoice: false })
        }
        setIsChoice(!isChoice)
      }}
      className={`w-1/4 border-[1px] border-black ${
        originImage.data?.uri === uri ? "opacity-40 backdrop-opacity-25" : ""
      }`}
    >
      <View className="relative aspect-square w-full">
        <View className="absolute right-1 top-1 z-50">
          {!isChoice && <View className="aspect-square h-4 rounded-full border-[1px] border-black bg-black" />}
          {isChoice && <AntDesign name="checkcircle" className="" size={14} color={"#0C356A"} />}
        </View>
        <Image source={{ uri }} className="h-full w-full" />
      </View>
    </TouchableOpacity>
  )
}
const ListImageComponent: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>()
  const getImageLib = useRecoilValue(listImageLibraryState)
  const { onGetListImage } = uploadImageAction.useGetListImage()
  React.useEffect(() => {
    onGetListImage()
  }, [])
  const RenderFooter = () => {
    return (
      <View>
        <ActivityIndicator animating size={"large"} color={"white"} />
      </View>
    )
  }
  const isCloseToBottom = (nativeEvent: NativeScrollEvent) => {
    const { layoutMeasurement, contentOffset, contentSize } = nativeEvent
    return layoutMeasurement.height + contentOffset.y >= contentSize.height + 20
  }
  return (
    <ScrollView
      className="w-full"
      scrollEventThrottle={400}
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) console.log("ScrollView")
      }}
    >
      <View className="flex w-full flex-row flex-wrap">
        {getImageLib.data &&
          getImageLib.data.map((item) => {
            return <ItemImageComponent key={item.id} id={item.id} uri={item.uri} />
          })}
      </View>
      {isLoading && <RenderFooter />}
    </ScrollView>
  )
}

const MainComponent: React.FC = () => {
  const getOriginImage = useRecoilValue(originImageState)
  return (
    <View className="flex w-full items-center justify-center space-y-4">
      <View className="h-96 w-4/5 bg-gray-400">
        <ImageHoc uri={getOriginImage.data?.uri || ""} className="" />
      </View>
      <View className="mb-2 flex w-full flex-row items-center justify-between px-2">
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

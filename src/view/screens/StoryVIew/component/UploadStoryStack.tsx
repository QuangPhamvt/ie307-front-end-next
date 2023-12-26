import { Text, SafeAreaView, View, ImageBackground, TouchableOpacity } from "react-native"
import { useRecoilValue } from "recoil"
import { originImageStoryState } from "../store/atom"
import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { StoryViewStackParamList } from "~/src/view/type"
import ReactNativeModal from "react-native-modal"
import React from "react"

const UploadStoryStack: React.FC = () => {
  const { data } = useRecoilValue(originImageStoryState)
  const navigation = useNavigation<StackNavigationProp<StoryViewStackParamList, "UploadStoryStack">>()
  const [modal, setModal] = React.useState<boolean>(false)
  if (!data) return
  return (
    <>
      <SafeAreaView className="bg-transparent/10">
        <View className="h-full w-screen bg-gray-500">
          <ImageBackground source={{ uri: data.uri }} className="relative h-full w-full">
            <Text>Upload story stack</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack()
              }}
              className="absolute left-2 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-700"
            >
              <AntDesign name="close" color={"white"} size={28} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModal(true)}
              className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-white"
            >
              <AntDesign name="arrowright" size={28} color={"black"} />
            </TouchableOpacity>
            <ReactNativeModal isVisible={modal} className="relative mx-0 mb-0 px-0">
              <TouchableOpacity className="h-full w-full" onPress={() => setModal(false)} />
              <View className="absolute bottom-0 flex h-80 w-full justify-between overflow-hidden rounded-t-xl bg-white">
                <View className="mt-4 flex w-full items-center justify-center border-b-[1px] border-solid border-b-gray-500 pb-2">
                  <Text className="text-base font-bold">Share</Text>
                </View>
                <View className="grow"></View>
                <View className="w-full p-4">
                  <TouchableOpacity className="flex w-full items-center justify-center rounded-xl bg-sky-600 py-2">
                    <Text className="text-base font-bold text-white">Share</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ReactNativeModal>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </>
  )
}
export default UploadStoryStack

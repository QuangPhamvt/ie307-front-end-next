import { Entypo, Ionicons } from "@expo/vector-icons"
import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { useSetRecoilState } from "recoil"
import { showModalSettingState } from "../store/atom"

const HeaderHeaderComponent: React.FC = () => {
  const setShowModalSetting = useSetRecoilState(showModalSettingState)
  return (
    <View className="flex flex-row items-center justify-between h-10 ">
      <Text className="text-2xl font-bold">quangquang___</Text>
      <TouchableOpacity onPress={() => setShowModalSetting({ isOpen: true })}>
        <Entypo name="menu" size={32} />
      </TouchableOpacity>
    </View>
  )
}
const MainHeaderComponent: React.FC = () => {
  return (
    <View className="flex flex-row w-full bg-white">
      <View className="flex space-y-2">
        <View className="relative h-20 rounded-full aspect-square bg-slate-200">
          <View className="absolute rounded-full -bottom-1 -right-1 aspect-square">
            <Ionicons name="md-add-circle-sharp" size={28} color={"#39A7FF"} className="text-white" />
          </View>
        </View>
        <Text className="font-bold">Pham Minh Quang</Text>
      </View>

      <View className="flex flex-row items-center justify-end space-x-4 grow">
        <View className="flex items-center">
          <Text className="font-bold">1</Text>
          <Text>Post</Text>
        </View>

        <View className="flex items-center">
          <Text className="font-bold">1</Text>
          <Text>Follower</Text>
        </View>

        <View className="flex items-center">
          <Text className="font-bold">1</Text>
          <Text>Following</Text>
        </View>
      </View>
    </View>
  )
}
export const BtnHeaderComponent: React.FC = () => {
  return (
    <View className="flex flex-row w-full space-x-1">
      <TouchableOpacity className="flex items-center justify-center p-2 bg-gray-700 rounded-lg grow">
        <Text className="font-bold">Edit profile</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex items-center justify-center p-2 bg-gray-700 rounded-lg grow">
        <Text className="font-bold">Share profile</Text>
      </TouchableOpacity>
    </View>
  )
}
export const HeaderComponent: React.FC = () => {
  return (
    <View className="flex w-full px-2 bg-gray-500">
      <HeaderHeaderComponent />
      <MainHeaderComponent />
      <BtnHeaderComponent />
    </View>
  )
}

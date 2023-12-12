import { Entypo, Ionicons } from "@expo/vector-icons"
import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { useSetRecoilState } from "recoil"
import { useNavigation } from "@react-navigation/native"
import { RootNativeStackParamList } from "~/src/view/type"
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types"

const HeaderHeaderComponent: React.FC = () => {
  return (
    <View className="flex h-10 flex-row items-center justify-between ">
      <Text className="text-2xl font-bold">quangquang___</Text>
    </View>
  )
}
const MainHeaderComponent: React.FC = () => {
  return (
    <View className="flex w-full flex-row bg-white">
      <View className="flex space-y-2">
        <View className="relative aspect-square h-20 rounded-full bg-slate-200">
          <View className="absolute -bottom-1 -right-1 aspect-square rounded-full">
            <Ionicons name="md-add-circle-sharp" size={28} color={"#39A7FF"} className="text-white" />
          </View>
        </View>
        <Text className="text-sm font-bold">Pham Minh Quang</Text>
      </View>

      <View className="flex grow flex-row items-center justify-end space-x-4">
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
  const navigation = useNavigation<NativeStackNavigationProp<RootNativeStackParamList, "MainView">>()

  return (
    <View className="mt-4 flex w-full flex-row space-x-1">
      <TouchableOpacity
        onPress={() => navigation.navigate("EditProfileView")}
        className="flex grow items-center justify-center rounded-lg bg-[#39A7FF] p-2"
      >
        <Text className="font-bold text-white">Follow</Text>
      </TouchableOpacity>
    </View>
  )
}
export const HeaderComponent: React.FC = () => {
  return (
    <View className="flex w-full bg-white px-2">
      <HeaderHeaderComponent />
      <MainHeaderComponent />
      <BtnHeaderComponent />
    </View>
  )
}

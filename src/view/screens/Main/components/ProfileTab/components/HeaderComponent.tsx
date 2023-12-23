import { Entypo, Ionicons } from "@expo/vector-icons"
import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { showModalSettingState } from "../store/atom"
import { useNavigation } from "@react-navigation/native"
import { RootNativeStackParamList } from "~/src/view/type"
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types"
import { userState } from "~/src/store/atom"

const HeaderHeaderComponent: React.FC = () => {
  const setShowModalSetting = useSetRecoilState(showModalSettingState)
  const { contents } = useRecoilValue(userState)
  return (
    <View className="flex h-10 flex-row items-center justify-between ">
      <Text className="text-2xl font-bold">{contents?.user.username}</Text>
      <TouchableOpacity onPress={() => setShowModalSetting({ isOpen: true })}>
        <Entypo name="menu" size={32} />
      </TouchableOpacity>
    </View>
  )
}
const MainHeaderComponent: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootNativeStackParamList, "MainView">>()
  const { contents } = useRecoilValue(userState)
  return (
    <View className="flex w-full flex-row items-start bg-white">
      <View className="flex space-y-2">
        <TouchableOpacity onPress={() => navigation.navigate("StoryView")}>
          <View className="relative aspect-square h-20 rounded-full bg-slate-200">
            {contents?.user.avatar && (
              <Image className="h-full w-full rounded-full" source={{ uri: contents?.user.avatar || "" }} />
            )}
            <View className="absolute -bottom-1 -right-1 aspect-square rounded-full">
              <Ionicons name="md-add-circle-sharp" size={28} color={"#39A7FF"} className="text-white" />
            </View>
          </View>
        </TouchableOpacity>
        <View className="">
          <Text className="w-34 line-clamp-1 font-bold">{contents?.user.username || "Not have to see"}</Text>
          {contents?.user?.bio && <Text className="font-normal">{contents?.user.bio}</Text>}
        </View>
      </View>

      <View className="mt-8 flex grow flex-row items-center justify-end space-x-4">
        <View className="flex items-center">
          {contents?.posts ? (
            <Text className="font-bold">{+contents?.posts.length}</Text>
          ) : (
            <Text className="font-bold">0</Text>
          )}
          <Text>Post</Text>
        </View>

        <View className="flex items-center">
          {contents?.user.follows.follows ? (
            <Text className="font-bold">{contents.user.follows.follows}</Text>
          ) : (
            <Text className="font-bold">0</Text>
          )}
          <Text>Follower</Text>
        </View>

        <View className="flex items-center">
          {contents?.user.follows.following ? (
            <Text className="font-bold">{contents.user.follows.following}</Text>
          ) : (
            <Text className="font-bold">0</Text>
          )}
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
        className="flex grow items-center justify-center rounded-lg bg-[#F3F3F3] p-2"
      >
        <Text className="font-bold">Edit profile</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex grow items-center justify-center rounded-lg bg-[#F3F3F3] p-2">
        <Text className="font-bold">Share profile</Text>
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

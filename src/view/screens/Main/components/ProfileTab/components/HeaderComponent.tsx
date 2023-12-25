import { Entypo, Feather, Ionicons } from "@expo/vector-icons"
import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { showModalSettingState } from "../store/atom"
import { useNavigation } from "@react-navigation/native"
import { RootNativeStackParamList } from "~/src/view/type"
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types"
import { userState } from "~/src/store/atom"
import ImageHoc from "~/src/view/components/ImageHOC"

const HeaderHeaderComponent: React.FC = () => {
  const setShowModalSetting = useSetRecoilState(showModalSettingState)
  const { contents } = useRecoilValue(userState)
  return (
    <View className="flex flex-row items-center justify-between h-10 ">
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
    <View className="flex flex-row items-start w-full bg-white">
      <View className="flex space-y-2">
        <TouchableOpacity onPress={() => navigation.navigate("StoryView")}>
          <View className="relative aspect-square h-20 rounded-full border-[0.5px] border-zinc-400">
            {contents?.user.avatar ? (
              <ImageHoc uri={contents?.user.avatar || ""} isCircle={true} />
            ) : (
              <View className="flex items-center justify-center w-20 h-20 rounded-full ">
                <Feather name="user" className="" size={52} />
              </View>
            )}
            <View className="absolute rounded-full -bottom-1 -right-1 aspect-square">
              <Ionicons name="md-add-circle-sharp" size={28} color={"#39A7FF"} className="text-white" />
            </View>
          </View>
        </TouchableOpacity>
        <View className="">
          <Text className="font-bold w-34 line-clamp-1">{contents?.user.username || "Not have to see"}</Text>
          {contents?.user?.bio && <Text className="font-normal">{contents?.user.bio}</Text>}
        </View>
      </View>

      <View className="flex flex-row items-center justify-end mt-8 space-x-4 grow">
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
    <View className="flex flex-row w-full mt-4 space-x-1">
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
    <View className="flex w-full px-2 bg-white">
      <HeaderHeaderComponent />
      <MainHeaderComponent />
      <BtnHeaderComponent />
    </View>
  )
}

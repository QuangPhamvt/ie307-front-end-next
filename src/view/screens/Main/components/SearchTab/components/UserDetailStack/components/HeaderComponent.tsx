import { Ionicons } from "@expo/vector-icons"
import React from "react"
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from "react-native"
import { useRecoilValue } from "recoil"
import { useNavigation } from "@react-navigation/native"
import { RootNativeStackParamList } from "~/src/view/type"
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types"
import { postFollowState, userDetailState } from "../../../store/atom"
import { userState } from "~/src/store/atom"
import SearchViewAction from "../../../store/hook"
import ImageHoc from "~/src/view/components/ImageHOC"

const HeaderHeaderComponent: React.FC = () => {
  const { state, contents } = useRecoilValue(userDetailState)
  if (state === "idle" && !contents) return null
  return (
    <View className="flex flex-row items-center justify-between h-10 ">
      <Text className="text-2xl font-bold">{contents?.user.username}</Text>
    </View>
  )
}
const MainHeaderComponent: React.FC = () => {
  const { state, contents } = useRecoilValue(userDetailState)
  if (state === "idle" && !contents) return null
  return (
    <View className="flex flex-row w-full bg-white">
      <View className="flex space-y-2">
        <View className="relative h-20 rounded-full aspect-square bg-slate-200">
          {contents?.user.avatar && <ImageHoc uri={contents.user.avatar || "abc"} isCircle={true} />}
          <View className="absolute rounded-full -bottom-1 -right-1 aspect-square">
            <Ionicons name="md-add-circle-sharp" size={28} color={"#39A7FF"} className="text-white" />
          </View>
        </View>
        <Text className="text-sm font-bold">Pham Minh Quang</Text>
      </View>

      <View className="flex flex-row items-center justify-end space-x-4 grow">
        <View className="flex items-center">
          <Text className="font-bold">{contents?.posts.length || 0}</Text>
          <Text>Post</Text>
        </View>

        <View className="flex items-center">
          <Text className="font-bold">{contents?.user.follows || 0}</Text>
          <Text>Follower</Text>
        </View>

        <View className="flex items-center">
          <Text className="font-bold">{contents?.user.following || 0}</Text>
          <Text>Following</Text>
        </View>
      </View>
    </View>
  )
}
export const BtnHeaderComponent: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootNativeStackParamList, "MainView">>()
  const auth = useRecoilValue(userState)
  const user = useRecoilValue(userDetailState)
  const { state } = useRecoilValue(postFollowState)
  const { onFollow } = SearchViewAction.useFollow()
  console.log(auth.contents?.user.follows.following_id)

  if (!auth.contents?.user.follows.following_id) return
  if (!user?.contents?.user) {
    return null
  }
  if (user.contents.user.user_id === auth.contents?.user.user_id) return null
  return (
    <View className="flex flex-row w-full mt-4 space-x-1">
      {state === "loading" ? (
        <View className="flex grow items-center justify-center rounded-lg bg-[#39A7FF] p-2">
          <ActivityIndicator color={"white"} size={16} />
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => onFollow(user.contents?.user.user_id || "abc")}
          className="flex grow items-center justify-center rounded-lg bg-[#39A7FF] p-2"
        >
          {auth.contents?.user.follows.following_id?.find((item) => item === user.contents?.user.user_id) ? (
            <Text className="font-bold text-white">Following</Text>
          ) : (
            <Text className="font-bold text-white">Follow</Text>
          )}
        </TouchableOpacity>
      )}
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

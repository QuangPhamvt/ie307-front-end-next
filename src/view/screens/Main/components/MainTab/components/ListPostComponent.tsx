import { AntDesign, Fontisto, Ionicons } from "@expo/vector-icons"
import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { useSetRecoilState } from "recoil"
import { showCommentModalState } from "../store/atom"

const PostComponent: React.FC = () => {
  const setShowCommentModal = useSetRecoilState(showCommentModalState)
  return (
    <View className="flex w-full pt-2">
      <View className="flex flex-row items-center space-x-2 p-2">
        <View className="aspect-square h-8 rounded-full bg-gray-600" />
        <Text className="text-base font-bold">quangquang___</Text>
      </View>
      <View className="aspect-square w-full bg-slate-200" />
      <View className="flex flex-row items-start space-x-4 p-2">
        <AntDesign name="heart" size={28} />
        <TouchableOpacity
          onPress={() => {
            setShowCommentModal({ isOpen: true })
          }}
        >
          <Fontisto name="comment" size={26} />
        </TouchableOpacity>
      </View>
      <View className="mt-1 flex space-y-1 px-2">
        <Text className="font-bold">2 likes</Text>
        <Text>
          <Text className="font-bold">quangquang___</Text> To day is lucky day
        </Text>
        <Text className="text-xs">December 9, 2022</Text>
      </View>
    </View>
  )
}
const ListPostComponent: React.FC = () => {
  return (
    <View className="flex w-full flex-col">
      <PostComponent />
      <PostComponent />
      <PostComponent />
      <PostComponent />
    </View>
  )
}
export default ListPostComponent

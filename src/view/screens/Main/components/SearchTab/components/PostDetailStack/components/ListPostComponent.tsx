import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { useSetRecoilState } from "recoil"
import { AntDesign, Fontisto } from "@expo/vector-icons"
import CommentModalComponent from "./CommentComponent"
import { showCommentPostDetailState } from "../store/atom"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { SearchViewStackParamList } from "~/src/view/type"
const ItemPostComponent: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<SearchViewStackParamList, "PostDetailStack">>()
  const setShowModal = useSetRecoilState(showCommentPostDetailState)
  return (
    <View className="flex w-full border-b-[1px] border-gray-400 pb-2">
      <View className="flex flex-row items-center space-x-2 p-2">
        <View className="aspect-square h-8 rounded-full bg-gray-500" />
        <View className="flex grow flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("UserDetailStack")
            }}
          >
            <Text className="font-bold">intouchtanthy</Text>
          </TouchableOpacity>
          <TouchableOpacity className="rounded-lg bg-gray-400 px-4 py-1">
            <Text className="font-medium text-white">Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="aspect-square w-full bg-slate-200" />
      <View className="flex flex-row items-start space-x-4 p-2">
        <AntDesign name="heart" size={28} />
        <TouchableOpacity
          onPress={() => {
            setShowModal({ isOpen: true })
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
    <>
      <CommentModalComponent />
      <View>
        <ItemPostComponent />
        <ItemPostComponent />
        <ItemPostComponent />
        <ItemPostComponent />
        <ItemPostComponent />
        <ItemPostComponent />
      </View>
    </>
  )
}
export default ListPostComponent

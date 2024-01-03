import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { useResetRecoilState } from "recoil"
import ImageHoc from "~/src/view/components/ImageHOC"
import { SearchViewStackParamList } from "~/src/view/type"
import { getUserInfoBySearchState, inputSearchState } from "../store/atom"
import { FontAwesome5 } from "@expo/vector-icons"
interface IItemSearchComponent {
  id: string
  avatar: string | null
  username: string
  bio: string | null
}
const ItemSearchComponent: React.FC<IItemSearchComponent> = (props) => {
  const { id, avatar, username, bio } = props
  const navigate = useNavigation<StackNavigationProp<SearchViewStackParamList, "SearchStack">>()
  const resetInput = useResetRecoilState(inputSearchState)
  const resetGetUsername = useResetRecoilState(getUserInfoBySearchState)
  return (
    <TouchableOpacity
      onPress={() => {
        resetInput()
        resetGetUsername()
        navigate.navigate("UserDetailStack", { user_id: id })
      }}
    >
      <View className="mt-2 flex flex-row items-center space-x-3 ">
        <View className="flex aspect-square w-12 items-center justify-center rounded-full border-2 border-zinc-400">
          {avatar ? <ImageHoc uri={avatar} isCircle /> : <FontAwesome5 name="user" size={32} />}
        </View>
        <View className="flex">
          <Text className="font-bold">{username}</Text>
          <Text>{!!bio ? bio : "Not bio"}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ItemSearchComponent

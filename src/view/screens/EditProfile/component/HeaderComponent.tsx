import { AntDesign } from "@expo/vector-icons"
import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { showModalEditAvatarState } from "../store/atom"
import { userState } from "~/src/store/atom"

const HeaderComponent: React.FC = () => {
  const setShowModal = useSetRecoilState(showModalEditAvatarState)
  const { contents } = useRecoilValue(userState)
  return (
    <View className="flex w-full items-center justify-center space-y-2 border-b-[1px] border-solid border-gray-300 py-4">
      <View className="h-20 bg-gray-400 rounded-full aspect-square">
        {contents?.user?.avatar && (
          <Image source={{ uri: contents.user.avatar || "" }} className="w-full h-full rounded-full" />
        )}
      </View>
      <TouchableOpacity onPress={() => setShowModal({ isOpen: true })}>
        <Text className="text-sm font-bold text-[#068FFF]">Edit picture or avatar</Text>
      </TouchableOpacity>
    </View>
  )
}
export default HeaderComponent

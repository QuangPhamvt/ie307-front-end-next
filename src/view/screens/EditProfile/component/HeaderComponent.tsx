import { AntDesign } from "@expo/vector-icons"
import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { useSetRecoilState } from "recoil"
import { showModalEditAvatarState } from "../store/atom"

const HeaderComponent: React.FC = () => {
  const setShowModal = useSetRecoilState(showModalEditAvatarState)
  return (
    <View className="flex w-full items-center justify-center space-y-2 border-b-[1px] border-solid border-gray-300 py-4">
      <View className="aspect-square h-20 rounded-full bg-gray-400" />
      <TouchableOpacity onPress={() => setShowModal({ isOpen: true })}>
        <Text className="text-sm font-bold text-[#068FFF]">Edit picture or avatar</Text>
      </TouchableOpacity>
    </View>
  )
}
export default HeaderComponent

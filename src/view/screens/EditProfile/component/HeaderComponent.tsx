import { Feather } from "@expo/vector-icons"
import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { showModalEditAvatarState } from "../store/atom"
import { userState } from "~/src/store/atom"
import ImageHoc from "~/src/view/components/ImageHOC"

const HeaderComponent: React.FC = () => {
  const setShowModal = useSetRecoilState(showModalEditAvatarState)
  const { contents } = useRecoilValue(userState)
  return (
    <View className="flex w-full items-center justify-center space-y-2 border-b-[1px] border-solid border-gray-300 py-4">
      <View className="flex aspect-square h-20 items-center justify-center rounded-full border-[0.5px] border-zinc-400">
        {contents?.user?.avatar ? (
          <ImageHoc uri={contents.user.avatar || ""} isCircle={true} />
        ) : (
          <Feather name="user" size={53} />
        )}
      </View>
      <TouchableOpacity onPress={() => setShowModal({ isOpen: true })}>
        <Text className="text-sm font-bold text-[#068FFF]">Edit picture or avatar</Text>
      </TouchableOpacity>
    </View>
  )
}
export default HeaderComponent

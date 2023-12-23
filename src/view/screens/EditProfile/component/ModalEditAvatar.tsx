import React from "react"
import { Modal, View, Text, TouchableOpacity, Image } from "react-native"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { Feather, Octicons } from "@expo/vector-icons"
import { showModalEditAvatarState } from "../store/atom"
import editProfileAction from "../store/hook"
import ModalUploadAvatar from "./ModalUploadAvatar"
import { authState, userState } from "~/src/store/atom"

export const ModalEditAvatar: React.FC = () => {
  const { isOpen } = useRecoilValue(showModalEditAvatarState)
  const { contents } = useRecoilValue(userState)
  const setShowModal = useSetRecoilState(showModalEditAvatarState)
  const { onSetImageUploadPayloadState } = editProfileAction.useGetImageUpload()
  return (
    <Modal animationType="fade" visible={isOpen} className="flex bg-transparent" transparent={true}>
      <ModalUploadAvatar />
      <View className="h-full bg-black/50">
        <TouchableOpacity onPress={() => setShowModal({ isOpen: false })} className="h-96" />
        <View className="2 flex h-full rounded-2xl bg-white pt-6">
          <View className="flex w-full items-center justify-center border-b-[0.5px] border-solid border-gray-400 pb-3">
            <View className="aspect-square h-12 rounded-full bg-slate-100">
              {contents?.user.avatar && (
                <Image className="h-full w-full rounded-full " source={{ uri: contents.user.avatar }} />
              )}
            </View>
          </View>

          <View className="flex w-full p-4">
            <TouchableOpacity onPress={() => onSetImageUploadPayloadState(true)}>
              <View className="flex flex-row items-center justify-between space-x-3 py-1">
                <Feather name="image" size={28} />
                <Text className="w-[87.5%] text-base font-medium">Choose from library</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onSetImageUploadPayloadState(false)}>
              <View className="flex flex-row items-center justify-between space-x-3 py-4">
                <Feather name="camera" size={28} />
                <Text className="w-[87.5%] text-base font-medium">Take photo</Text>
              </View>
            </TouchableOpacity>

            <View className="flex flex-row items-center justify-between space-x-3 pb-4">
              <Octicons name="trash" size={28} color={"#FE0000"} />
              <Text className="w-[87.5%] text-base font-medium text-[#FE0000]">Remove current picture</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}

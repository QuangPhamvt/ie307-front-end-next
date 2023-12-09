import React from "react"
import { Modal, View, Text, TouchableOpacity } from "react-native"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { showModalSettingState } from "../store/atom"
import { AntDesign } from "@expo/vector-icons"
import authAction from "~/src/view/screens/Auth/store/authAction"

export const ModalSettingComponent: React.FC = () => {
  const { isOpen } = useRecoilValue(showModalSettingState)
  const setShowModalSetting = useSetRecoilState(showModalSettingState)
  const { onLogOutAction } = authAction.logOutAuthAction()
  return (
    <Modal animationType="slide" visible={isOpen} className="flex bg-transparent" transparent={true}>
      <View className="h-full bg-black/50">
        <TouchableOpacity onPress={() => setShowModalSetting({ isOpen: false })} className="h-40 " />
        <View className="flex h-full px-4 pt-6 bg-white border-t-2 border-solid rounded-2xl">
          <View className="flex flex-row items-center w-screen space-x-2">
            <AntDesign name="logout" size={24} />
            <TouchableOpacity
              onPress={onLogOutAction}
              className="grow border-b-[1px] border-solid border-gray-400 pb-2"
            >
              <Text className="text-xl font-bold ">Log out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

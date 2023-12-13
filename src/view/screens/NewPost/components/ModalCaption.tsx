import React from "react"
import { KeyboardAvoidingView, TextInput, Text, View, StatusBar, TouchableOpacity } from "react-native"
import Modal from "react-native-modal"
import { useRecoilState, useSetRecoilState } from "recoil"
import { modalCaptionState } from "../store/atom"
import { uploadPostState } from "../../Upload/store"
const ModalCaptionComponent: React.FC = () => {
  const [showModal, setShowModal] = useRecoilState(modalCaptionState)
  const [{ title }, setUploadState] = useRecoilState(uploadPostState)
  const toggleModal = () => {
    setShowModal(true)
  }
  return (
    <View className="">
      <StatusBar hidden />
      <KeyboardAvoidingView behavior="padding">
        <Modal
          className="relative z-50 mx-0 mt-0 w-screen overflow-hidden"
          isVisible={showModal}
          swipeDirection={"down"}
          onSwipeComplete={toggleModal}
          avoidKeyboard={true}
          onBackdropPress={() => setShowModal(false)}
        >
          <View className="absolute top-0 flex w-screen justify-between bg-white pt-2">
            <View className="flex w-full items-center justify-center ">
              <View className="relative flex w-full items-center justify-center border-b-[1px] border-gray-300 py-2">
                <Text className="text-xl font-bold">Caption</Text>
                <TouchableOpacity onPress={() => setShowModal(false)} className="absolute right-2 top-[10px]">
                  <Text className="text-base font-medium text-sky-500">OK</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex w-full flex-row space-x-2 border-t-[1px] border-gray-400 px-2 pb-8 pt-2">
              <TextInput
                value={title || ""}
                onChangeText={(title) => setUploadState((preState) => ({ ...preState, title }))}
                className="w-full"
                placeholder="Add a comment for ..."
              />
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </View>
  )
}
export default ModalCaptionComponent

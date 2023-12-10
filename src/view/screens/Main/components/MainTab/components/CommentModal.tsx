import React from "react"
import { KeyboardAvoidingView, TextInput, Text, View } from "react-native"
import Modal from "react-native-modal"
import { useRecoilState } from "recoil"
import { showCommentModalState } from "../store/atom"
const CommentModalComponent: React.FC = () => {
  const [showModal, setShowModal] = useRecoilState(showCommentModalState)
  const toggleModal = () => {
    setShowModal({ isOpen: !showModal.isOpen })
  }
  return (
    <View className="">
      <KeyboardAvoidingView behavior="padding">
        <Modal
          className="relative mx-0 mb-0 w-screen overflow-hidden "
          isVisible={showModal.isOpen}
          swipeDirection={"down"}
          onSwipeComplete={toggleModal}
          avoidKeyboard={true}
        >
          <View className="absolute bottom-0 flex h-full w-screen justify-between rounded-t-2xl bg-white pt-2">
            <View className="flex w-full items-center justify-center pt-2">
              <View className="w-14 rounded-xl border-y-4 border-gray-400" />
              <View className="flex w-full items-center justify-center border-b-[1px] border-gray-300 py-2">
                <Text className="text-xl font-bold">Comments</Text>
              </View>
            </View>
            <View className="flex w-full flex-row space-x-2 border-t-[1px] border-gray-400 px-2 py-2">
              <View className="aspect-square h-10 rounded-full bg-slate-300" />
              <View className="flex grow items-center justify-center rounded-full  border-[1px] border-gray-400 p-2">
                <TextInput className="w-full" placeholder="Add a comment for ..." />
              </View>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </View>
  )
}
export default CommentModalComponent

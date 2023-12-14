import React from "react"
import { KeyboardAvoidingView, TextInput, Text, View, ScrollView } from "react-native"
import Modal from "react-native-modal"
import { useRecoilState } from "recoil"
import { showCommentPostDetailState } from "../store/atom"
import { AntDesign } from "@expo/vector-icons"
const ItemCommentComponent: React.FC = () => {
  return (
    <View className="mt-8 flex w-full flex-row items-center space-x-2">
      <View className="aspect-square w-10 self-start rounded-full file:bg-gray-400" />
      <View className="flex grow">
        <Text className="text-xs">quangquang___</Text>
        <Text className="text-xs">ASDSADSADasdasdads</Text>
        <Text className="mt-1 text-xs font-bold text-zinc-500">Reply</Text>
        <Text className="mt-2 text-xs font-bold text-zinc-500">--- View 4 more replies</Text>
      </View>
      <View className="flex items-center justify-center space-y-2">
        <AntDesign name="hearto" />
        <Text>36</Text>
      </View>
    </View>
  )
}
const CommentModalComponent: React.FC = () => {
  const [showModal, setShowModal] = useRecoilState(showCommentPostDetailState)
  const toggleModal = () => {
    setShowModal({ isOpen: false })
    return
  }
  return (
    <View className="">
      <KeyboardAvoidingView behavior="padding">
        <Modal
          className="relative mx-0 mb-0 w-screen "
          isVisible={showModal.isOpen}
          swipeDirection={["down"]}
          onSwipeComplete={toggleModal}
          avoidKeyboard={true}
          propagateSwipe={true}
        >
          <View className="flex h-full w-screen justify-between rounded-t-2xl bg-white pt-2">
            <View className="flex w-full items-center justify-center pt-2">
              <View className="w-14 rounded-xl border-y-4 border-gray-400" />
              <View className="flex w-full items-center justify-center border-b-[1px] border-gray-300 py-2">
                <Text className="text-xl font-bold">Comments</Text>
              </View>
            </View>
            <ScrollView className="">
              <View className="w-full flex-col space-y-4 px-4" onStartShouldSetResponder={() => true}>
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
                <ItemCommentComponent />
              </View>
            </ScrollView>
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

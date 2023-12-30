import React from "react"
import { KeyboardAvoidingView, TextInput, Text, View, ScrollView } from "react-native"
import Modal from "react-native-modal"
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil"
import { showCommentModalState } from "../store/atom"
import { AntDesign } from "@expo/vector-icons"
import ImageHoc from "~/src/view/components/ImageHOC"
import {
  commentFormState,
  getListCommentState,
  listCommentState,
  postIdToGetListCommentState,
} from "../../SearchTab/components/PostDetailStack/store/atom"
import PostDetailAction from "../../SearchTab/components/PostDetailStack/store/hook"
interface IItemCommentComponent {
  id: string
  username: string
  avatar: string | null
  context: string
  create_at: string | null
}
const ItemCommentComponent: React.FC<IItemCommentComponent> = (props) => {
  const { id, username, avatar, context, create_at } = props
  return (
    <View className="mt-8 flex w-full flex-row items-center space-x-2">
      <View className="aspect-square w-10 self-start rounded-full file:bg-gray-400">
        {avatar && <ImageHoc uri={avatar} isCircle />}
      </View>
      <View className="flex grow">
        <Text className="text-xs">{username}</Text>
        <Text className="text-xs">{context}</Text>
      </View>
      <View className="flex items-center justify-center space-y-2">
        <AntDesign name="hearto" />
        <Text>36</Text>
      </View>
    </View>
  )
}
const CommentModalComponent: React.FC = () => {
  const [showModal, setShowModal] = useRecoilState(showCommentModalState)
  const listComment = useRecoilValue(listCommentState)
  const [comment, setComment] = useRecoilState(commentFormState)
  const resetListComment = useResetRecoilState(listCommentState)
  const resetGetListComment = useResetRecoilState(getListCommentState)
  const post_id = useRecoilValue(postIdToGetListCommentState)
  const { onGetListComment } = PostDetailAction.useGetListComment()
  const { onPostComment } = PostDetailAction.usePostComment()
  const toggleModal = () => {
    resetListComment()
    resetGetListComment()
    setShowModal({ isOpen: !showModal.isOpen })
  }
  React.useEffect(() => {
    if (showModal && post_id) {
      onGetListComment(post_id)
    }
  }, [showModal])
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
            <ScrollView className="">
              {listComment.state === "loading" && <Text>Loading ....</Text>}
              <View className="w-full flex-col space-y-4 px-4" onStartShouldSetResponder={() => true}>
                {listComment.data.length > 0 &&
                  listComment.data.map((comment) => {
                    const { author, comment: Comment } = comment
                    return (
                      <ItemCommentComponent
                        key={Comment.id}
                        id={Comment.id}
                        username={author.username}
                        avatar={author.avatar}
                        context={Comment.context}
                        create_at={Comment.create_at}
                      />
                    )
                  })}
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

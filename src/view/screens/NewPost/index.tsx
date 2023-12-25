import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View, ViewBase } from "react-native"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { postUploadPostState, uploadPostState } from "../Upload/store"
import { modalCaptionState } from "./store/atom"
import ModalCaptionComponent from "./components/ModalCaption"
import newPostAction from "./store/hook"
import ImageHoc from "../../components/ImageHOC"

const NewPostScreen: React.FC = () => {
  const { title, images } = useRecoilValue(uploadPostState)
  const setShowModal = useSetRecoilState(modalCaptionState)
  const { state } = useRecoilValue(postUploadPostState)
  const { onUploadPost } = newPostAction.useUploadPost()
  return (
    <>
      <ModalCaptionComponent />
      <View className="flex w-full space-y-4">
        <ScrollView horizontal={true} className="w-full">
          <View className="flex flex-row w-full px-4">
            {images.map((item) => {
              return (
                <View key={item.id} className="w-56 h-72">
                  <ImageHoc uri={item.image} />
                </View>
              )
            })}
          </View>
        </ScrollView>
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <View className="w-full px-4 py-2">{title ? <Text>{title}</Text> : <Text>Write a caption</Text>}</View>
        </TouchableOpacity>
        <View className="w-full border-b-[0.5px] border-gray-500" />
        <TouchableOpacity onPress={onUploadPost} className="px-2">
          <View className="flex items-center justify-center py-4 rounded-lg bg-sky-500">
            {state === "loading" ? (
              <ActivityIndicator color={"white"} size={"small"} />
            ) : (
              <Text className="text-white">Share</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}
export default NewPostScreen

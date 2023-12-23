import { ActivityIndicator, Image, Text, TouchableOpacity, View } from "react-native"
import Modal from "react-native-modal"
import { useRecoilState, useRecoilStateLoadable, useRecoilValue } from "recoil"
import { imageUploadPayloadState, modalUploadAvatarState, uploadAvatarState } from "../store/atom"
import editProfileAction from "../store/hook"
import authAction from "../../Auth/store/authAction"
const ModalUploadAvatar: React.FC = () => {
  const [modalUploadAvatar, setModalUploadAvatar] = useRecoilState(modalUploadAvatarState)
  const { contents } = useRecoilValue(imageUploadPayloadState)
  const { state } = useRecoilValue(uploadAvatarState)
  const { onImageUpload } = editProfileAction.useImageUpload()
  return (
    <Modal isVisible={modalUploadAvatar}>
      <View className="flex w-full items-center justify-center space-y-2 bg-white px-8 py-4">
        <View className="aspect-square h-40 w-40 rounded-full bg-slate-300">
          {contents.uri && <Image source={{ uri: contents.uri }} className="h-full w-full rounded-full" />}
        </View>
        <View className="flex flex-row space-x-4">
          <TouchableOpacity
            onPress={() => {
              setModalUploadAvatar(false)
            }}
            className="rounded-lg border-[0.5px] border-gray-500 px-8 py-2"
          >
            <Text className="font-semibold">Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onImageUpload()
            }}
            className="rounded-lg border-[0.5px] border-gray-500 bg-blue-500 px-10 py-2"
          >
            {state === "loading" ? (
              <Text className="flex items-center justify-center font-semibold text-white">
                <ActivityIndicator size={24} />
              </Text>
            ) : (
              <Text className="font-semibold text-white">Oke</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}
export default ModalUploadAvatar

import { Image, Text, TouchableOpacity, View } from "react-native"
import Modal from "react-native-modal"
import { useRecoilState, useRecoilStateLoadable, useRecoilValue } from "recoil"
import { imageUploadPayloadState, modalUploadAvatarState } from "../store/atom"
const ModalUploadAvatar: React.FC = () => {
  const [modalUploadAvatar, setModalUploadAvatar] = useRecoilState(modalUploadAvatarState)
  const { contents } = useRecoilValue(imageUploadPayloadState)
  return (
    <Modal isVisible={modalUploadAvatar}>
      <View className="flex items-center justify-center w-full px-8 py-4 space-y-2 bg-white">
        <View className="w-40 h-40 rounded-full aspect-square bg-slate-300">
          <Image source={{ uri: contents.uri || "" }} className="w-full h-full rounded-full" />
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
          <TouchableOpacity className="rounded-lg border-[0.5px] border-gray-500 bg-blue-500 px-10 py-2">
            <Text className="font-semibold text-white">Oke</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}
export default ModalUploadAvatar

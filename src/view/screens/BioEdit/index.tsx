import { TextInput, View } from "react-native"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { userState } from "~/src/store/atom"
import { uploadBioState } from "./atom"

const BioEditView: React.FC = () => {
  const { contents } = useRecoilValue(userState)
  const upload = useSetRecoilState(uploadBioState)
  if (!contents?.user) return
  return (
    <View className="w-full border-b-[1px] border-gray-400 py-3 ">
      <TextInput
        onChangeText={(bio) => upload(bio)}
        className="px-4 text-base"
        placeholder={`${contents.user.bio ? contents.user.bio : "Not have bio"}`}
        placeholderTextColor={"black"}
      />
    </View>
  )
}
export default BioEditView

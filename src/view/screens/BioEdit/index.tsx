import { Text, TextInput, View } from "react-native"

const BioEditView: React.FC = () => {
  return (
    <View className="w-full border-b-[1px] border-gray-400 py-3 ">
      <TextInput className="px-4 text-base" placeholder="This hello message" placeholderTextColor={"black"} />
    </View>
  )
}
export default BioEditView

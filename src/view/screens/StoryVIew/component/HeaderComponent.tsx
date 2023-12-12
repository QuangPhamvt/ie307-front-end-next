import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { View, Text, TouchableOpacity } from "react-native"
import { RootNativeStackParamList } from "~/src/view/type"

const HeaderComponent: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootNativeStackParamList, "StoryView">>()
  return (
    <View className="relative flex flex-row items-center w-full p-2 bg-black">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="close" className="" size={24} color={"white"} />
      </TouchableOpacity>
      <View className="absolute left-[50%] -ml-10 translate-x-1/2 translate-y-1/2">
        <Text className="text-base font-medium text-white w-fit"> Add to story</Text>
      </View>
    </View>
  )
}
export default HeaderComponent

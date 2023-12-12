import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Text, TouchableOpacity, View } from "react-native"
import { RootNativeStackParamList } from "~/src/view/type"

const HeaderComponent: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootNativeStackParamList, "UploadView">>()
  return (
    <View className="relative flex w-full flex-row items-center bg-black p-2">
      <TouchableOpacity onPress={() => navigation.navigate("MainView", { screen: "HomeView" })}>
        <AntDesign name="close" className="" size={24} color={"white"} />
      </TouchableOpacity>
      <View className="absolute left-[50%] -ml-8 translate-x-1/2 translate-y-1/2">
        <Text className="w-fit text-lg font-bold text-white"> New Post </Text>
      </View>
    </View>
  )
}
export default HeaderComponent

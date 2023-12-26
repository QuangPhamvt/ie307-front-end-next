import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native"
import { RootNativeStackParamList } from "../../type"

const NewStoryView: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootNativeStackParamList, "NewStoryView">>()
  return (
    <SafeAreaView>
      <View className="relative h-full w-full bg-zinc-600">
        <Text>View Post</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-500"
        >
          <AntDesign name="close" color={"white"} size={22} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
export default NewStoryView

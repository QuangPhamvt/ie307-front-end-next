import { AntDesign, Feather } from "@expo/vector-icons"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Text, View, SafeAreaView, TouchableOpacity, ImageBackground } from "react-native"
import { RootNativeStackParamList } from "../../type"
import ImageHoc from "../../components/ImageHOC"

interface INewStoryView {
  user_id: string
  avatar: string | null
  email: string
  image: string
  create_at: string
}
const NewStoryView: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootNativeStackParamList, "NewStoryView">>()
  const { params } = useRoute<RouteProp<RootNativeStackParamList, "NewStoryView">>()
  return (
    <SafeAreaView>
      <View className="relative h-full w-full bg-zinc-600">
        <ImageBackground source={{ uri: params.image || "" }} className="h-full w-full opacity-60">
          <View className="mt-2 flex flex-row items-center space-x-2 px-2">
            {params.avatar ? (
              <View className="h-10 w-10 rounded-full">
                <ImageHoc uri={params.avatar || ""} isCircle={true} />
              </View>
            ) : (
              <View className="flex h-20 w-20 items-center justify-center rounded-full ">
                <Feather name="user" className="" size={52} />
              </View>
            )}
            <Text className="font-bold text-white">{params.email.split("@")[0]}</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-500"
          >
            <AntDesign name="close" color={"white"} size={22} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </SafeAreaView>
  )
}
export default NewStoryView

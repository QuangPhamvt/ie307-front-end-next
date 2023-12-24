import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { Text, TouchableOpacity, View } from "react-native"
import { useRecoilValue } from "recoil"
import { userState } from "~/src/store/atom"
import { RootNativeStackParamList } from "~/src/view/type"

const MainComponent = () => {
  const navigation = useNavigation<StackNavigationProp<RootNativeStackParamList, "EditProfileView">>()
  const { contents } = useRecoilValue(userState)
  if (!contents?.user) return
  return (
    <View className="flex w-full px-3">
      <View className="flex flex-row py-3">
        <View className="w-[30%] pb-1">
          <Text className="border-b-[0.5px] text-lg">Name</Text>
        </View>
        <View className="w-[70%] border-b-[0.5px] border-solid border-gray-300 pb-3">
          <Text className="text-lg ">Pham Minh Quang</Text>
        </View>
      </View>

      <View className="flex flex-row pb-3">
        <View className="w-[30%] pb-1">
          <Text className="border-b-[0.5px] text-lg">Username</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Username")} className="w-full">
          <View className="w-[70%] border-b-[0.5px] border-solid border-gray-300 pb-3">
            <Text className="text-lg ">{contents.user.username}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View className="flex flex-row pb-3">
        <View className="w-[30%] pb-1">
          <Text className="border-b-[0.5px] text-lg">Pronouns</Text>
        </View>
        <View className="w-[70%] border-b-[0.5px] border-solid border-gray-300 pb-3">
          <Text className="text-lg ">English</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Bio")} className="w-full">
        <View className="flex flex-row pb-3">
          <View className="w-[30%] pb-1">
            <Text className="border-b-[0.5px] text-lg">Bio</Text>
          </View>
          <View className="w-[70%] border-b-[0.5px] border-solid border-gray-300 pb-3">
            <Text className="text-lg ">Hello this message</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View className="flex flex-row pb-3">
        <View className="w-[30%] pb-1">
          <Text className="border-b-[0.5px] text-lg">Links</Text>
        </View>
        <View className="w-[70%] border-b-[0.5px] border-solid border-gray-300 pb-3">
          <Text className="text-lg ">Add Links</Text>
        </View>
      </View>

      <View className="flex flex-row pb-3">
        <View className="w-[30%] pb-1">
          <Text className="border-b-[0.5px] text-lg">Gender</Text>
        </View>
        <View className="w-[70%] border-b-[0.5px] border-solid border-gray-300 pb-3">
          <Text className="text-lg ">Gender</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("ChangePassword")} className="flex w-full flex-row">
        <Text className="text-base font-semibold text-blue-500">Change Your Password</Text>
      </TouchableOpacity>
    </View>
  )
}
export default MainComponent

import { AntDesign } from "@expo/vector-icons"
import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { SignUpStackParamList } from "~/src/view/type"

const SaveLoginStackComponent: React.FC = () => {
  const navigator = useNavigation<StackNavigationProp<SignUpStackParamList, "SaveLogin">>()
  return (
    <View className="flex h-full bg-[#F7F7F7] px-2">
      <View className="w-full py-2">
        <AntDesign name="left" size={24} onPress={() => navigator.goBack()} />
      </View>
      <View className="flex grow space-y-4 ">
        <Text className="text-2xl font-bold">Save your login info?</Text>
        <Text className="text-base font-medium text-gray-700">
          We'll save the login info for you, so you won't need to enter it on your devices next time you log in
        </Text>
        <TouchableOpacity
          onPress={() => navigator.navigate("CreatePassword")}
          className="flex w-full items-center justify-center rounded-full bg-[#3081D0] p-3"
        >
          <Text className="text-lg font-bold text-white">Save</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex w-full items-center justify-center rounded-full border-[1px] border-solid border-gray-500 bg-transparent p-3">
          <Text className="text-lg font-bold text-gray-500">Not now</Text>
        </TouchableOpacity>
      </View>
      <View className="flex items-center justify-center py-4">
        <Text className="text-xs font-bold text-[#3876BF]">Already have an account?</Text>
      </View>
    </View>
  )
}
export default SaveLoginStackComponent

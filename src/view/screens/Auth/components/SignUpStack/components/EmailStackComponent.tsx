import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { AuthStackParamList } from "~/src/view/type"
import FormEmailComponent from "./FormEmailComponent"
const EmailStackComponent: React.FC = () => {
  const navigator = useNavigation<StackNavigationProp<AuthStackParamList, "SignUpStack">>()
  return (
    <View className="flex h-full bg-[#F7F7F7] px-3">
      <View className="w-full py-2">
        <AntDesign name="left" size={24} onPress={() => navigator.goBack()} />
      </View>
      <FormEmailComponent />
      <View className="flex items-center justify-center py-4">
        <TouchableOpacity onPress={() => navigator.navigate("LogInStack")}>
          <Text className="text-xs font-bold text-[#3876BF]">Already have an account?</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default EmailStackComponent

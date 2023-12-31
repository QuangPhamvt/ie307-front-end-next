import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { LinearGradient } from "expo-linear-gradient"
import { Entypo, EvilIcons } from "@expo/vector-icons"
import { AuthStackParamList } from "~/src/view/type"
import FormComponent from "./components/FormComponent"
const LogInStack: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList, "LogInStack">>()
  return (
    <LinearGradient colors={["#4158D0", "#C850C0", "#FFCC70"]} className="flex h-full">
      <View className="flex w-full flex-col space-y-4 px-4 py-2">
        <View className="flex h-48 w-full items-center justify-center pt-16 ">
          <Entypo name="flattr" size={96} />
        </View>
        <FormComponent />
        <View className="flex items-center justify-center space-y-2 ">
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUpStack", { screen: "EmailStack" })}
            className="flex w-full items-center rounded-full border-[1px] border-solid border-[#39A7FF] bg-white py-2"
          >
            <Text className="text-lg font-medium text-[#3876BF] ">Create new account</Text>
          </TouchableOpacity>
          <View className="flex flex-row items-center justify-center pr-4">
            <EvilIcons name="sc-facebook" size={26} />
            <Text className="text-xl font-bold italic">Meta</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}
export default LogInStack

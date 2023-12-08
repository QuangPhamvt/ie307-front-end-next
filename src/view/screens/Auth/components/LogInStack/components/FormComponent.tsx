import React from "react"
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native"
import { Feather } from "@expo/vector-icons"
const FormComponent: React.FC = () => {
  const [isHidePassword, setIsHidePassword] = React.useState<boolean | null>(null)
  return (
    <KeyboardAvoidingView behavior="padding" className="flex h-80 items-center justify-center">
      <View className="my-4 flex h-fit w-full items-center justify-center space-y-2">
        <View className="w-full rounded-xl border-[1px] border-solid border-gray-600 px-2 py-3">
          <TextInput placeholder="Username, email or mobile number" className="text-lg" />
        </View>
        <View className="flex w-full flex-row items-center justify-between rounded-xl border-[1px] border-solid border-gray-600 px-2 py-3">
          <TextInput
            onTouchStart={() => setIsHidePassword(true)}
            placeholder="Password"
            className="w-4/5"
            secureTextEntry={isHidePassword ? true : false}
          />
          {isHidePassword === false && <Feather name="eye-off" size={24} onPress={() => setIsHidePassword(true)} />}
          {isHidePassword === true && <Feather name="eye" size={24} onPress={() => setIsHidePassword(false)} />}
        </View>
        <TouchableOpacity className="flex w-full items-center rounded-full bg-[#3081D0] py-2">
          <Text className="text-lg font-medium text-white">Log in</Text>
        </TouchableOpacity>
        <View className="flex w-full items-center justify-center py-3">
          <Text className="text-sm font-bold text-gray-700">Forgot password?</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
export default FormComponent

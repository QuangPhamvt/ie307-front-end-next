import { StackNavigationProp } from "@react-navigation/stack"
import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"
import { SignUpStackParamList } from "~/src/view/type"
import { Feather } from "@expo/vector-icons"
const FormCreatePasswordComponent: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<SignUpStackParamList, "EmailStack">>()
  const [isPressInConfirmField, setIsPressInConfirmField] = React.useState<boolean>(false)
  const [isHidePassword, setIsHidePassword] = React.useState<boolean | null>(null)
  return (
    <View className="flex grow space-y-4 ">
      <Text className="text-2xl font-bold">Create a password</Text>
      <Text className="text-base font-medium text-gray-700">
        Create a password with at least 6 letters or number. It should be something others can't guess
      </Text>
      <View
        className={`flex flex-row justify-between rounded-lg border-[1px] border-solid ${
          isPressInConfirmField ? "border-gray-700" : "border-gray-400"
        } p-4`}
      >
        <TextInput
          onTouchStart={() => setIsHidePassword(true)}
          placeholder="Confirmation Code"
          className="w-4/5"
          secureTextEntry={isHidePassword ? true : false}
          onFocus={() => setIsPressInConfirmField(true)}
          onBlur={() => setIsPressInConfirmField(false)}
        />
        {isHidePassword === false && <Feather name="eye-off" size={24} onPress={() => setIsHidePassword(true)} />}
        {isHidePassword === true && <Feather name="eye" size={24} onPress={() => setIsHidePassword(false)} />}
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("SaveLogin")}
        className="flex w-full items-center justify-center rounded-full bg-[#3081D0] p-3"
      >
        <Text className="text-lg font-bold text-white">Next</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity className="flex w-full items-center justify-center rounded-full border-[1px] border-solid border-gray-500 bg-transparent p-3">:18
        <Text className="text-lg font-bold text-gray-500">I didn't get the code</Text>
      </TouchableOpacity> */}
    </View>
  )
}
export default FormCreatePasswordComponent

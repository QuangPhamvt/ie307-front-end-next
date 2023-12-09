import React from "react"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { View, Text, TouchableOpacity } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { SignUpStackParamList } from "~/src/view/type"
import { useRecoilState } from "recoil"
import { signUpFormState } from "../store/atom"
const FormConfirmComponent: React.FC = () => {
  const [isPressInConfirmField, setIsPressInConfirmField] = React.useState<boolean>(false)
  const navigation = useNavigation<StackNavigationProp<SignUpStackParamList, "EmailStack">>()
  const [getSignUpForm, setSignUpForm] = useRecoilState(signUpFormState)
  return (
    <View className="flex space-y-4 grow ">
      <Text className="text-2xl font-bold">Enter the confirmation code </Text>
      <Text className="font-medium text-gray-700">
        To confirm your account, enter the 6-digit code we sent to customafk@gmail.com{" "}
      </Text>
      <View
        className={`rounded-lg border-[1px] border-solid ${
          isPressInConfirmField ? "border-gray-600" : "border-gray-400"
        } p-4`}
      >
        <TextInput
          keyboardType="number-pad"
          value={getSignUpForm?.code_digit || ""}
          placeholder="Confirmation Code"
          className="w-full"
          onFocus={() => setIsPressInConfirmField(true)}
          onBlur={() => setIsPressInConfirmField(false)}
          onChangeText={(code_digit) => setSignUpForm((preState) => ({ ...preState, code_digit }))}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("CreatePassword")}
        className="flex w-full items-center justify-center rounded-full bg-[#3081D0] p-3"
      >
        <Text className="text-lg font-bold text-white">Next</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex w-full items-center justify-center rounded-full border-[1px] border-solid border-gray-500 bg-transparent p-3">
        <Text className="text-lg font-bold text-gray-500">I didn't get the code</Text>
      </TouchableOpacity>
    </View>
  )
}
export default FormConfirmComponent

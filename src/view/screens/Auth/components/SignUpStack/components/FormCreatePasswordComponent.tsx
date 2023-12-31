import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack"
import { TextInput } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"
import { Feather } from "@expo/vector-icons"
import { useRecoilState, useResetRecoilState } from "recoil"
import { SignUpStackParamList } from "~/src/view/type"
import authAction from "~/src/view/screens/Auth/store/authAction"
import { signUpFormState } from "~/src/view/screens/Auth/components/SignUpStack/store/atom"
const FormCreatePasswordComponent: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<SignUpStackParamList, "EmailStack">>()
  const [isPressInConfirmField, setIsPressInConfirmField] = React.useState<boolean>(false)
  const [isHidePassword, setIsHidePassword] = React.useState<boolean | null>(null)
  const [getSignUpForm, setSignUpForm] = useRecoilState(signUpFormState)
  const resetSignUpForm = useResetRecoilState(signUpFormState)
  const { onSignUpAction } = authAction.signUpAuthAction()
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
          placeholder="Password"
          className="w-4/5"
          secureTextEntry={isHidePassword ? true : false}
          onFocus={() => setIsPressInConfirmField(true)}
          onBlur={() => setIsPressInConfirmField(false)}
          value={getSignUpForm?.password || ""}
          onChangeText={(password) => setSignUpForm((preState) => ({ ...preState, password }))}
        />
        {isHidePassword === false && <Feather name="eye-off" size={24} onPress={() => setIsHidePassword(true)} />}
        {isHidePassword === true && <Feather name="eye" size={24} onPress={() => setIsHidePassword(false)} />}
      </View>
      <TouchableOpacity
        onPress={() => {
          onSignUpAction()
          resetSignUpForm()
          navigation.navigate("SaveLogin")
        }}
        className="flex w-full items-center justify-center rounded-full bg-[#3081D0] p-3"
      >
        <Text className="text-lg font-bold text-white">Next</Text>
      </TouchableOpacity>
    </View>
  )
}
export default FormCreatePasswordComponent

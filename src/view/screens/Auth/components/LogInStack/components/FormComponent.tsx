import React from "react"
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator } from "react-native"
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil"
import { Feather } from "@expo/vector-icons"
import authAction from "~/src/view/screens/Auth/store/authAction"
import { authState } from "~/src/store/atom"
import { logInFormState } from "~/src/view/screens/Auth/components/LogInStack/store/atom"
const FormComponent: React.FC = () => {
  const [isHidePassword, setIsHidePassword] = React.useState<boolean | null>(null)
  const [getLogInFormState, setLogInFormState] = useRecoilState(logInFormState)
  const resetLogInForm = useResetRecoilState(logInFormState)
  const auth = useRecoilValue(authState)
  const { onLogInAction } = authAction.logInAction()
  return (
    <KeyboardAvoidingView behavior="padding" className="flex h-80 items-center justify-center">
      <View className="my-4 flex h-fit w-full items-center justify-center space-y-2">
        <View className="flex h-auto w-full flex-row items-center rounded-xl border border-solid border-gray-600 px-2 py-3">
          <TextInput
            value={getLogInFormState?.email ? getLogInFormState.email : ""}
            onChangeText={(email) => setLogInFormState((preState) => ({ ...preState, email }))}
            placeholder="Username, email or mobile number"
            className="flex w-full "
          />
        </View>
        <View className="flex w-full flex-row items-center justify-between rounded-xl border border-solid border-gray-600 px-2 py-3">
          <TextInput
            onTouchStart={() => setIsHidePassword(true)}
            value={!!getLogInFormState?.password ? getLogInFormState.password : ""}
            onChangeText={(password) => setLogInFormState((preState) => ({ ...preState, password }))}
            placeholder="Password"
            className="flex w-4/5 "
            secureTextEntry={isHidePassword ? true : false}
          />
          {isHidePassword === false && <Feather name="eye-off" size={16} onPress={() => setIsHidePassword(true)} />}
          {isHidePassword === true && <Feather name="eye" size={16} onPress={() => setIsHidePassword(false)} />}
        </View>
        <TouchableOpacity
          onPress={() => {
            onLogInAction()
            resetLogInForm()
          }}
          className="flex w-full items-center rounded-full bg-[#3081D0] py-2"
        >
          {auth.state === "loading" && <ActivityIndicator size={24} />}
          {auth.state !== "loading" && <Text className="text-xl font-semibold text-white">Login</Text>}
        </TouchableOpacity>
        <View className="flex w-full items-center justify-center py-3">
          <Text className="text-sm font-bold text-gray-700">Forgot password?</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
export default FormComponent

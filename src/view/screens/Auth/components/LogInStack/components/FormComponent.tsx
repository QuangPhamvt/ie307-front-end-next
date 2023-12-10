import React from "react"
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native"
import { Feather } from "@expo/vector-icons"
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil"

import { logInFormState } from "../store/atom"
import authAction from "../../../store/authAction"
import { authState } from "~/src/store/atom"
const FormComponent: React.FC = () => {
  const [isHidePassword, setIsHidePassword] = React.useState<boolean | null>(null)
  const [getLogInFormState, setLogInFormState] = useRecoilState(logInFormState)
  const resetLogInForm = useResetRecoilState(logInFormState)
  const auth = useRecoilValue(authState)
  const { onLogInAction } = authAction.logInAction()
  return (
    <KeyboardAvoidingView behavior="padding" className="flex items-center justify-center h-80">
      <View className="flex items-center justify-center w-full my-4 space-y-2 h-fit">
        <View className="flex w-full flex-row items-start  rounded-xl border-[1px] border-solid border-gray-600 px-2 py-3">
          <TextInput
            value={getLogInFormState?.email ? getLogInFormState.email : ""}
            onChangeText={(email) => setLogInFormState((preState) => ({ ...preState, email }))}
            placeholder="Username, email or mobile number"
            className="flex items-center justify-center w-full text-base align-text-top"
          />
        </View>
        <View className="flex w-full flex-row items-center justify-between rounded-xl border-[1px] border-solid border-gray-600 px-2 py-3">
          <TextInput
            onTouchStart={() => setIsHidePassword(true)}
            value={!!getLogInFormState?.password ? getLogInFormState.password : ""}
            onChangeText={(password) => setLogInFormState((preState) => ({ ...preState, password }))}
            placeholder="Password"
            className="flex items-center justify-center w-4/5"
            secureTextEntry={isHidePassword ? true : false}
          />
          {isHidePassword === false && <Feather name="eye-off" size={24} onPress={() => setIsHidePassword(true)} />}
          {isHidePassword === true && <Feather name="eye" size={24} onPress={() => setIsHidePassword(false)} />}
        </View>
        <TouchableOpacity
          onPress={() => {
            onLogInAction()
            resetLogInForm()
          }}
          className="flex w-full items-center rounded-full bg-[#3081D0] py-2"
        >
          {auth.state === "loading" && <Feather name="loader" size={24} />}
          {auth.state !== "loading" && <Text className="text-lg font-medium text-white">Log in</Text>}
        </TouchableOpacity>
        <View className="flex items-center justify-center w-full py-3">
          <Text className="text-sm font-bold text-gray-700">Forgot password?</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
export default FormComponent

import { Text, View, TouchableOpacity, TextInput, ActivityIndicator } from "react-native"
import ChangePasswordAction from "../store/hook"
import { useRecoilState, useRecoilValue } from "recoil"
import { sendChangePasswordFormState, sendChangePasswordState } from "../store/atom"
import React from "react"
import { Feather } from "@expo/vector-icons"

const SendChangePasswordStack: React.FC = () => {
  const [isHidePassword, setIsHidePassword] = React.useState<boolean | null>(null)
  const [isPressInConfirmField, setIsPressInConfirmField] = React.useState<boolean>(false)
  const [form, setForm] = useRecoilState(sendChangePasswordFormState)
  const { state, message } = useRecoilValue(sendChangePasswordState)
  const { onChangePassword } = ChangePasswordAction.useSendChangePassword()
  return (
    <View className="flex h-full bg-[#F7F7F7] px-3">
      <View className="flex grow space-y-4 ">
        <Text className="text-base font-medium text-gray-700">
          Change a password with at least 6 letters or number. It should be something others can't guess
        </Text>
        <View
          className={`flex flex-row justify-between rounded-lg border-[1px] border-solid p-4 ${
            isPressInConfirmField ? "border-gray-600" : "border-gray-400"
          }`}
        >
          <TextInput
            placeholder="Please enter your password"
            className="grow"
            onTouchStart={() => setIsHidePassword(true)}
            secureTextEntry={isHidePassword ? true : false}
            onFocus={() => setIsPressInConfirmField(true)}
            onBlur={() => setIsPressInConfirmField(false)}
            value={form.password}
            onChangeText={(password) => setForm((preState) => ({ ...preState, password }))}
          />
          {isHidePassword === false && <Feather name="eye-off" size={16} onPress={() => setIsHidePassword(true)} />}
          {isHidePassword === true && <Feather name="eye" size={16} onPress={() => setIsHidePassword(false)} />}
        </View>
        <TouchableOpacity
          onPress={() => {
            onChangePassword()
          }}
          className="flex w-full items-center justify-center rounded-full bg-[#3081D0] p-3"
        >
          {state === "loading" ? (
            <ActivityIndicator color={"white"} size={24} />
          ) : (
            <Text className="text-lg font-bold text-white">Change Password</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default SendChangePasswordStack

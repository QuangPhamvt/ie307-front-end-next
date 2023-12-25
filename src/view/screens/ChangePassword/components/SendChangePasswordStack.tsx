import { Text, View, TouchableOpacity, TextInput, ActivityIndicator } from "react-native"
import ChangePasswordAction from "../store/hook"
import { useRecoilState, useRecoilValue } from "recoil"
import { sendChangePasswordFormState, sendChangePasswordState } from "../store/atom"
import React from "react"
import { Feather } from "@expo/vector-icons"

const SendChangePasswordStack: React.FC = () => {
  const [isHidePassword, setIsHidePassword] = React.useState<boolean | null>(null)
  const [form, setForm] = useRecoilState(sendChangePasswordFormState)
  const { state, message } = useRecoilValue(sendChangePasswordState)
  const { onChangePassword } = ChangePasswordAction.useSendChangePassword()
  return (
    <View className="flex h-full bg-[#F7F7F7] px-2">
      <View className="flex space-y-4 grow ">
        <Text className="text-base font-medium text-gray-700">
          Change a password with at least 6 letters or number. It should be something others can't guess
        </Text>
        <View className={`flex flex-row justify-between rounded-lg border-[1px] border-solid p-4`}>
          <TextInput
            placeholder="Please enter your password"
            className="w-4/5"
            onTouchStart={() => setIsHidePassword(true)}
            secureTextEntry={isHidePassword ? true : false}
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
          {/* {state === "idle" && <Text className="text-lg font-bold text-white">Sent email to verify</Text>}
          {(state === "hasValue" || state === "hasError") && <Text className="text-lg font-bold text-white">Next</Text>} */}
        </TouchableOpacity>
        {/* <TouchableOpacity className="flex w-full items-center justify-center rounded-full border-[1px] border-solid border-gray-500 bg-transparent p-3">:18
        <Text className="text-lg font-bold text-gray-500">I didn't get the code</Text>
      </TouchableOpacity> */}
      </View>
      <View className="flex items-center justify-center py-4">
        <Text className="text-xs font-bold text-[#3876BF]">Already have an account?</Text>
      </View>
    </View>
  )
}
export default SendChangePasswordStack

import React from "react"
import { Text, TouchableOpacity, TextInput, View, ActivityIndicator, Alert } from "react-native"
import { useRecoilState, useRecoilValue } from "recoil"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import ChangePasswordAction from "../store/hook"
import { sendChangePasswordFormState, sendEmailChangePasswordState } from "../store/atom"
import { ChangePasswordStackParamList } from "~/src/view/type"

const SendEmailChangePasswordStack: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<ChangePasswordStackParamList, "SendEmailChangePassword">>()
  const [isPressInConfirmField, setIsPressInConfirmField] = React.useState<boolean>(false)
  const { state } = useRecoilValue(sendEmailChangePasswordState)
  const { onSendEmailChangePassword } = ChangePasswordAction.useSendEmailChangePassword()
  const [form, setForm] = useRecoilState(sendChangePasswordFormState)
  const alert = () => Alert.alert("Please enter code digit")
  return (
    <View className="flex h-full bg-[#F7F7F7] px-3">
      <View className="flex grow space-y-4 pt-2">
        <Text className="text-base font-medium text-gray-700">
          The Code Digit have 6 letters. Please check your email after click "Sent email to verify"
        </Text>
        <View
          className={`flex flex-row justify-between rounded-lg border-[1px] border-solid p-4 ${
            isPressInConfirmField ? "border-gray-600" : "border-gray-400"
          }`}
        >
          <TextInput
            placeholder="Please enter code digit"
            className="w-full"
            autoComplete="one-time-code"
            keyboardType="numeric"
            onFocus={() => setIsPressInConfirmField(true)}
            onBlur={() => setIsPressInConfirmField(false)}
            value={form.code_digit}
            onChangeText={(code_digit) => setForm((preState) => ({ ...preState, code_digit }))}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            if (state === "idle") {
              onSendEmailChangePassword()
            }
            if (state === "hasValue" || state === "hasError") {
              if (form.code_digit) navigation.navigate("SendChangePassword")
              else alert()
            }
          }}
          className="flex w-full items-center justify-center rounded-full bg-[#3081D0] p-3"
        >
          {state === "loading" && <ActivityIndicator color={"white"} size={24} />}
          {state === "idle" && <Text className="text-lg font-bold text-white">Sent email to verify</Text>}
          {(state === "hasValue" || state === "hasError") && <Text className="text-lg font-bold text-white">Next</Text>}
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default SendEmailChangePasswordStack

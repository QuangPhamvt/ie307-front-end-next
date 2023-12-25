import { Text, TouchableOpacity, TextInput, View, ActivityIndicator } from "react-native"
import ChangePasswordAction from "../store/hook"
import { useRecoilState, useRecoilValue } from "recoil"
import { sendChangePasswordFormState, sendEmailChangePasswordState } from "../store/atom"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { ChangePasswordStackParamList } from "~/src/view/type"

const SendEmailChangePasswordStack: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<ChangePasswordStackParamList, "SendEmailChangePassword">>()
  const { state } = useRecoilValue(sendEmailChangePasswordState)
  const { onSendEmailChangePassword } = ChangePasswordAction.useSendEmailChangePassword()
  const [form, setForm] = useRecoilState(sendChangePasswordFormState)
  return (
    <View className="flex h-full bg-[#F7F7F7] px-2">
      <View className="flex space-y-4 grow ">
        <Text className="text-base font-medium text-gray-700">
          Change a password with at least 6 letters or number. It should be something others can't guess
        </Text>
        <View className={`flex flex-row justify-between rounded-lg border-[1px] border-solid p-4`}>
          <TextInput
            placeholder="Please enter code digit"
            className="w-4/5"
            autoComplete="one-time-code"
            keyboardType="numeric"
            // onFocus={() => setIsPressInConfirmField(true)}
            // onBlur={() => setIsPressInConfirmField(false)}
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
              navigation.navigate("SendChangePassword")
            }
          }}
          className="flex w-full items-center justify-center rounded-full bg-[#3081D0] p-3"
        >
          {state === "loading" && <ActivityIndicator color={"white"} size={24} />}
          {state === "idle" && <Text className="text-lg font-bold text-white">Sent email to verify</Text>}
          {(state === "hasValue" || state === "hasError") && <Text className="text-lg font-bold text-white">Next</Text>}
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
export default SendEmailChangePasswordStack

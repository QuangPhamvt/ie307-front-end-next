import { AntDesign } from "@expo/vector-icons"
import { Text, TouchableOpacity, TextInput, View, ActivityIndicator } from "react-native"
import ChangePasswordAction from "./store/hook"
import { useRecoilValue } from "recoil"
import { sendEmailChangePasswordState } from "./store/atom"

const ChangePasswordView: React.FC = () => {
  const { onSendEmailChangePassword } = ChangePasswordAction.useSendEmailChangePassword()
  const { state } = useRecoilValue(sendEmailChangePasswordState)
  return (
    <View className="flex h-full bg-[#F7F7F7] px-2">
      <View className="flex grow space-y-4 ">
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
            // value={getSignUpForm?.password || ""}
            // onChangeText={(password) => setSignUpForm((preState) => ({ ...preState, password }))}
          />
          {/* {isHidePassword === false && <Feather name="eye-off" size={24} onPress={() => setIsHidePassword(true)} />}
        {isHidePassword === true && <Feather name="eye" size={24} onPress={() => setIsHidePassword(false)} />} */}
        </View>
        <TouchableOpacity
          onPress={() => {
            if (state === "idle") {
              onSendEmailChangePassword()
            }
          }}
          className="flex w-full items-center justify-center rounded-full bg-[#3081D0] p-3"
        >
          {state === "loading" && <ActivityIndicator color={"white"} size={24} />}
          {state === "idle" && <Text className="text-lg font-bold text-white">Sent email to verify</Text>}
          {state === "hasValue" && <Text className="text-lg font-bold text-white">Next</Text>}
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
export default ChangePasswordView

import { useNavigation } from "@react-navigation/native"
import React from "react"
import { StackNavigationProp } from "@react-navigation/stack"
import { View, Text, TouchableOpacity } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { useRecoilState } from "recoil"
import { SignUpStackParamList } from "~/src/view/type"
import { signUpFormState } from "../store/atom"
import authAction from "../../../store/authAction"
const FormEmailComponent: React.FC = () => {
  const [isPressInEmailField, setIsPressInEmailField] = React.useState<boolean>(false)
  const navigation = useNavigation<StackNavigationProp<SignUpStackParamList, "EmailStack">>()
  const [getSignUpForm, setSignUpForm] = useRecoilState(signUpFormState)
  const { onSentVerifyEmail } = authAction.emailAuthAction()
  return (
    <View className="flex space-y-4 grow ">
      <Text className="text-2xl font-bold">What's your email? </Text>
      <Text className="font-medium text-gray-700">
        Enter the email where you can be contacted. No one will see this on your profile
      </Text>
      <View
        className={`rounded-lg border-[1px] border-solid ${
          isPressInEmailField ? "border-gray-600" : "border-gray-400"
        } p-4`}
      >
        <TextInput
          placeholder="Email"
          className="w-full"
          value={getSignUpForm?.email || ""}
          onChangeText={(email) => setSignUpForm((preState) => ({ ...preState, email }))}
          onFocus={() => setIsPressInEmailField(true)}
          onBlur={() => setIsPressInEmailField(false)}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          onSentVerifyEmail()
          navigation.navigate("ConfirmStack")
        }}
        className="flex w-full items-center justify-center rounded-full bg-[#3081D0] p-3"
      >
        <Text className="text-lg font-bold text-white">Next</Text>
      </TouchableOpacity>
    </View>
  )
}
export default FormEmailComponent

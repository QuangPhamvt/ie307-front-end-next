import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { SignUpStackParamList } from "~/src/view/type"
const FormEmailComponent: React.FC = () => {
  const [isPressInEmailField, setIsPressInEmailField] = React.useState<boolean>(false)
  const navigation = useNavigation<StackNavigationProp<SignUpStackParamList, "EmailStack">>()
  return (
    <View className="flex grow space-y-4 ">
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
          onFocus={() => setIsPressInEmailField(true)}
          onBlur={() => setIsPressInEmailField(false)}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("ConfirmStack")}
        className="flex w-full items-center justify-center rounded-full bg-[#3081D0] p-3"
      >
        <Text className="text-lg font-bold text-white">Next</Text>
      </TouchableOpacity>
    </View>
  )
}
export default FormEmailComponent

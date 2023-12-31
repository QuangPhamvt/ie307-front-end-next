import React from "react"
import { View, Text, TextInput } from "react-native"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { userState } from "~/src/store/atom"
import { uploadUsernameState } from "./atom"

const UsernameEdit: React.FC = () => {
  const { contents } = useRecoilValue(userState)
  const upload = useSetRecoilState(uploadUsernameState)
  if (!contents?.user) return
  return (
    <View className="flex w-full">
      <View className="flex w-full space-y-2 border-b-[1px] border-gray-400 px-4 py-3">
        <TextInput
          onChangeText={(text) => upload(text)}
          className=""
          placeholderTextColor={"black"}
          placeholder={`${contents.user.username}`}
        />
      </View>
      <View className="px-4 pt-4">
        <Text className="text-gray-500">
          In most cases, you'll be able to change your username back to
          <Text className="font-semibold text-black"> {contents.user.username} </Text>
          for another days.
        </Text>
      </View>
    </View>
  )
}

export default UsernameEdit

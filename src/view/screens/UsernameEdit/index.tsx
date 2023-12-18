import React from "react"
import { View, Text, TextInput } from "react-native"

const UsernameEdit: React.FC = () => {
  return (
    <View className="flex w-full">
      <View className="flex w-full space-y-2 border-b-[1px] border-gray-400 px-4 pb-3">
        <Text className="text-lg text-gray-400">Username</Text>
        <TextInput className="" placeholderTextColor={"black"} placeholder="quangquang___" />
      </View>
      <View className="px-4 pt-4">
        <Text className="text-gray-500">
          In most cases, you'll be able to change your username back to quangquang___ for another days.
        </Text>
      </View>
    </View>
  )
}

export default UsernameEdit

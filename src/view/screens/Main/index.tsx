import React from "react"
import { SafeAreaView, TouchableOpacity, View, Text } from "react-native"
import authAction from "../Auth/store/authAction"

const MainView: React.FC = () => {
  const { onLogOutAction } = authAction.logOutAuthAction()
  return (
    <SafeAreaView>
      <View>
        <Text>Main</Text>
      </View>
      <TouchableOpacity onPress={onLogOutAction}>
        <Text className="p-4 bg-blue-400">LogOut</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
export default MainView

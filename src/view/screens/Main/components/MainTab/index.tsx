import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import authAction from "../../../Auth/store/authAction"

const MainTab: React.FC = () => {
  const { onLogOutAction } = authAction.logOutAuthAction()
  return (
    <View>
      <TouchableOpacity onPress={() => onLogOutAction()}>
        <Text>Main bottom tab</Text>
      </TouchableOpacity>
    </View>
  )
}
export default MainTab

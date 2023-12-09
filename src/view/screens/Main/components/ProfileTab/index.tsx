import React from "react"
import { Text, View } from "react-native"
import { HeaderComponent } from "./components/HeaderComponent"
import { ModalSettingComponent } from "./components/ModalSettingComponent"

const ProfileTab: React.FC = () => {
  return (
    <View className="flex h-full bg-gray-300">
      <ModalSettingComponent />
      <HeaderComponent />
    </View>
  )
}
export default ProfileTab

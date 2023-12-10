import React from "react"
import { Text, View, ScrollView } from "react-native"
import { HeaderComponent } from "./components/HeaderComponent"
import { ModalSettingComponent } from "./components/ModalSettingComponent"
import MainComponent from "./components/MainComponent"

const ProfileTab: React.FC = () => {
  return (
    <ScrollView className="flex h-full bg-white">
      <ModalSettingComponent />
      <HeaderComponent />
      <MainComponent />
    </ScrollView>
  )
}
export default ProfileTab

import React from "react"
import { Text, View, ScrollView } from "react-native"
import { HeaderComponent } from "./components/HeaderComponent"
import { ModalSettingComponent } from "./components/ModalSettingComponent"
import MainComponent from "./components/MainComponent"

const ProfileTab: React.FC = () => {
  return (
    <ScrollView alwaysBounceVertical={true} showsVerticalScrollIndicator={true} className="bg-white">
      <View>
        <ModalSettingComponent />
        <HeaderComponent />
        <MainComponent />
      </View>
    </ScrollView>
  )
}
export default ProfileTab

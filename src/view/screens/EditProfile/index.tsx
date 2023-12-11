import React from "react"
import { View, SafeAreaView } from "react-native"
import HeaderComponent from "./component/HeaderComponent"
import MainComponent from "./component/MainComponent"
import { ModalEditAvatar } from "./component/ModalEditAvatar"

const EditProfileView: React.FC = () => {
  return (
    <SafeAreaView>
      <ModalEditAvatar />
      <View className="flex w-full h-full bg-white">
        <HeaderComponent />
        <MainComponent />
      </View>
    </SafeAreaView>
  )
}
export default EditProfileView

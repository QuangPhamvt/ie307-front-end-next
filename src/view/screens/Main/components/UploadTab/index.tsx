import { AntDesign } from "@expo/vector-icons"
import React from "react"
import { Text, View } from "react-native"
import HeaderComponent from "./components/HeaderComponent"
const UploadTab: React.FC = () => {
  return (
    <View className="flex h-screen w-full bg-black">
      <HeaderComponent />
    </View>
  )
}
export default UploadTab

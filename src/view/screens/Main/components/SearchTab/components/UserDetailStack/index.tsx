import React from "react"
import { ScrollView } from "react-native"
import { HeaderComponent } from "./components/HeaderComponent"
import MainComponent from "./components/MainComponent"
const UserDetailStack: React.FC = () => {
  return (
    <ScrollView className="flex h-full w-full bg-white">
      <HeaderComponent />
      <MainComponent />
    </ScrollView>
  )
}
export default UserDetailStack

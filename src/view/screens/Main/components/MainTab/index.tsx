import React from "react"
import { Text, TouchableOpacity, ScrollView, View } from "react-native"
import authAction from "../../../Auth/store/authAction"
import HeaderComponent from "./components/HeaderComponent"
import ListPostComponent from "./components/ListPostComponent"
import CommentModalComponent from "./components/CommentModal"

const MainTab: React.FC = () => {
  const { onLogOutAction } = authAction.logOutAuthAction()
  return (
    <ScrollView className="flex h-full bg-white">
      <HeaderComponent />
      <ListPostComponent />
      <CommentModalComponent />
    </ScrollView>
  )
}
export default MainTab

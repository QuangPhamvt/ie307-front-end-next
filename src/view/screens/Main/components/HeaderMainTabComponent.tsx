import React from "react"
import { View, Text } from "react-native"
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons"
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs"
const HeaderMainTabComponent: React.FC<BottomTabHeaderProps> = () => {
  return (
    <View className="flex flex-row items-center justify-between bg-white px-3 pt-1">
      <Text className="text-2xl font-bold italic">JustBeYourself</Text>
      <View className="flex flex-row space-x-5">
        <AntDesign name="hearto" size={28} />
        <MaterialCommunityIcons name="facebook-messenger" size={28} />
      </View>
    </View>
  )
}
export default HeaderMainTabComponent

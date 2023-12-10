import { AntDesign, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs"
import React from "react"
import { View, Text } from "react-native"
const HeaderComponent: React.FC = () => {
  return (
    <View className="flex space-y-4 border-b-[1px] border-gray-400 bg-gray-300 py-2">
      <View className="flex flex-row px-2">
        <View className="relative aspect-square h-20 rounded-full bg-slate-200">
          <View className="absolute -bottom-1 -right-1 aspect-square rounded-full">
            <Ionicons name="md-add-circle-sharp" size={28} color={"#39A7FF"} className="text-white" />
          </View>
        </View>
      </View>
    </View>
  )
}
export default HeaderComponent

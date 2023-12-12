import { AntDesign } from "@expo/vector-icons"
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { MainBottomTabParamList, MainBottomTabProps } from "~/src/view/type"
const HeaderComponent: React.FC = () => {
  const navigation = useNavigation<BottomTabNavigationProp<MainBottomTabParamList, "NotificationView">>()
  return (
    <View className="flex flex-row items-center space-x-2 py-2">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={24} />
      </TouchableOpacity>
      <Text className="text-2xl font-bold">Notifications</Text>
    </View>
  )
}
export default HeaderComponent

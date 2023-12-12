import { AntDesign } from "@expo/vector-icons"
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { MainBottomTabParamList } from "~/src/view/type"
const HeaderComponent: React.FC = () => {
  const navigation = useNavigation<BottomTabNavigationProp<MainBottomTabParamList, "UploadView">>()
  return (
    <View className="relative flex w-full flex-row items-center py-2">
      <TouchableOpacity onPress={() => navigation.navigate("HomeView")}>
        <AntDesign name="close" className="absolute left-0 top-0" color={"white"} size={24} />
      </TouchableOpacity>
      <Text className="left-0 right-0 mx-auto text-xl font-bold text-white">New Post</Text>
    </View>
  )
}
export default HeaderComponent

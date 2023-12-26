import React from "react"
import { View, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Ionicons } from "@expo/vector-icons"
import { RootNativeStackParamList } from "~/src/view/type"
const HeaderComponent: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootNativeStackParamList, "MainView">>()
  return (
    <View className="flex space-y-4 border-b-[1px] border-gray-400 bg-gray-300 py-2">
      <TouchableOpacity onPress={() => navigation.navigate("StoryView")}>
        <View className="flex flex-row px-2">
          <View className="relative aspect-square h-20 rounded-full bg-slate-200">
            <View className="absolute -bottom-1 -right-1 aspect-square rounded-full ">
              <Ionicons name="md-add-circle-sharp" size={28} color={"#39A7FF"} className="text-white" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}
export default HeaderComponent

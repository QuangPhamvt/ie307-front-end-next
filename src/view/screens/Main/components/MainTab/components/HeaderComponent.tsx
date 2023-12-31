import React from "react"
import { View, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { FontAwesome, Ionicons } from "@expo/vector-icons"
import { RootNativeStackParamList } from "~/src/view/type"
const HeaderComponent: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootNativeStackParamList, "MainView">>()
  return (
    <View className="flex space-y-4 border-b-[0.25px] border-zinc-300 py-2">
      <TouchableOpacity>
        <View className="flex flex-row px-2">
          <View className="relative flex aspect-square h-20 items-center justify-center rounded-full ">
            <View className="flex h-full w-full items-center justify-center">
              <FontAwesome name="user-circle" size={78} color={"gray"} />
            </View>
            <View className="absolute -bottom-1 -right-1 flex aspect-square w-[30px] items-center justify-center rounded-full bg-white">
              <TouchableOpacity onPress={() => navigation.navigate("StoryView", { screen: "SelectStoryStack" })}>
                <View className="mb-[1px] ml-[1px] flex items-center justify-center">
                  <Ionicons name="md-add-circle-sharp" size={29} color={"#39A7FF"} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}
export default HeaderComponent

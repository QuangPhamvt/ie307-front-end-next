import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import React from "react"
import { View, TouchableOpacity } from "react-native"
const ListPostMainComponent: React.FC = () => {
  const [status, setStatus] = React.useState<"Post" | "Story" | "Photo">("Post")
  return (
    <View className="mt-4 flex ">
      <View className="w-full border-b-[1px] border-gray-200" />
      <View className="flex w-full flex-row border-b-[1px] border-gray-200">
        <TouchableOpacity
          onPress={() => setStatus("Post")}
          className={`flex w-1/3 items-center justify-center border-b-[1px] border-solid py-2 ${
            status === "Post" ? "border-gray-700" : "border-gray-300"
          } `}
        >
          <MaterialCommunityIcons name="grid" size={28} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setStatus("Story")}
          className={`flex w-1/3 items-center justify-center border-b-[1px] border-solid ${
            status === "Story" ? "border-gray-700" : "border-gray-300"
          } `}
        >
          <MaterialIcons name="video-collection" size={28} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setStatus("Photo")}
          className={`flex w-1/3 items-center justify-center border-b-[1px] border-solid ${
            status === "Photo" ? "border-gray-700" : "border-gray-300"
          } `}
        >
          <MaterialCommunityIcons name="account-details-outline" size={28} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const MainComponent: React.FC = () => {
  return (
    <View className="mt-4 flex h-72 w-full">
      <ListPostMainComponent />
    </View>
  )
}
export default MainComponent

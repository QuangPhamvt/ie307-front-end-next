import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import React from "react"
import { Text, View, ScrollView, TouchableOpacity, Animated, Touchable } from "react-native"
const StoryMainComponent: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true)
  return (
    <View className="flex space-y-4 ">
      <View className="flex flex-row items-center justify-between px-2">
        <View className="flex space-y-[2px]">
          <Text className="pt-1 text-sm font-bold">Story highlights</Text>
          {isOpen && <Text className="text-gray-600">Keep your favorite stories on your profiles</Text>}
        </View>
        <TouchableOpacity
          onPress={() => {
            setIsOpen((preState) => !preState)
          }}
        >
          {isOpen ? <Ionicons name="ios-chevron-up" size={18} /> : <Ionicons name="ios-chevron-down" size={18} />}
        </TouchableOpacity>
      </View>
      {isOpen && (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} className="flex w-full space-x-4 px-2">
          <View className="aspect-square h-[72px] rounded-full border-[1px] border-solid border-gray-400 bg-white" />
          <View className="aspect-square h-[72px] rounded-full border-[1px] border-solid border-gray-400 bg-white" />
          <View className="aspect-square h-[72px] rounded-full border-[1px] border-solid border-gray-400 bg-white" />
          <View className="aspect-square h-[72px] rounded-full border-[1px] border-solid border-gray-400 bg-white" />
          <View className="aspect-square h-[72px] rounded-full border-[1px] border-solid border-gray-400 bg-white" />
        </ScrollView>
      )}
    </View>
  )
}
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
      <StoryMainComponent />
      <ListPostMainComponent />
    </View>
  )
}
export default MainComponent

import { Text, View } from "react-native"

const MainComponent = () => {
  return (
    <View className="flex w-full px-3">
      <View className="flex flex-row py-3">
        <View className="w-[30%] pb-1">
          <Text className="border-b-[0.5px] text-lg">Name</Text>
        </View>
        <View className="w-[70%] border-b-[0.5px] border-solid border-gray-300 pb-3">
          <Text className="text-lg ">Pham Minh Quang</Text>
        </View>
      </View>

      <View className="flex flex-row pb-3">
        <View className="w-[30%] pb-1">
          <Text className="border-b-[0.5px] text-lg">Username</Text>
        </View>
        <View className="w-[70%] border-b-[0.5px] border-solid border-gray-300 pb-3">
          <Text className="text-lg ">quangquang___</Text>
        </View>
      </View>

      <View className="flex flex-row pb-3">
        <View className="w-[30%] pb-1">
          <Text className="border-b-[0.5px] text-lg">Pronouns</Text>
        </View>
        <View className="w-[70%] border-b-[0.5px] border-solid border-gray-300 pb-3">
          <Text className="text-lg ">English</Text>
        </View>
      </View>

      <View className="flex flex-row pb-3">
        <View className="w-[30%] pb-1">
          <Text className="border-b-[0.5px] text-lg">Bio</Text>
        </View>
        <View className="w-[70%] border-b-[0.5px] border-solid border-gray-300 pb-3">
          <Text className="text-lg ">Hello this message</Text>
        </View>
      </View>

      <View className="flex flex-row pb-3">
        <View className="w-[30%] pb-1">
          <Text className="border-b-[0.5px] text-lg">Links</Text>
        </View>
        <View className="w-[70%] border-b-[0.5px] border-solid border-gray-300 pb-3">
          <Text className="text-lg ">Add Links</Text>
        </View>
      </View>

      <View className="flex flex-row pb-3">
        <View className="w-[30%] pb-1">
          <Text className="border-b-[0.5px] text-lg">Gender</Text>
        </View>
        <View className="w-[70%] border-b-[0.5px] border-solid border-gray-300 pb-3">
          <Text className="text-lg ">Gender</Text>
        </View>
      </View>
    </View>
  )
}
export default MainComponent

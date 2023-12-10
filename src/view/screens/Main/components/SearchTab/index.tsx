import React from "react"
import { View, Text } from "react-native"
import HeaderComponent from "./components/HeaderComponent"
import ListPostComponent from "./components/ListPostComponent"

const SearchTab: React.FC = () => {
  return (
    <View className="flex h-full w-full bg-white">
      <HeaderComponent />
      <ListPostComponent />
    </View>
  )
}
export default SearchTab

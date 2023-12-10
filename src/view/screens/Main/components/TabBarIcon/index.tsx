import { AntDesign, Feather, FontAwesome, Ionicons, MaterialIcons, Octicons } from "@expo/vector-icons"
import { RouteProp } from "@react-navigation/native"
import React from "react"
import { View, Text } from "react-native"
import { MainBottomTabParamList } from "~/src/view/type"
type TTabBarIconComponent = {
  focused: boolean
}
export const HomeTabBarIconComponent: React.FC<TTabBarIconComponent> = (props) => {
  const { focused } = props
  return (
    <View className="flex items-center justify-center w-full h-full ">
      {focused ? <Ionicons name="md-home-sharp" size={28} /> : <Ionicons name="md-home-outline" size={28} />}
    </View>
  )
}
export const SearchTabBarIconComponent: React.FC<TTabBarIconComponent> = (props) => {
  const { focused } = props
  return (
    <View className="flex items-center justify-center w-full h-full ">
      {focused ? <Ionicons name="search" size={32} /> : <Ionicons name="search-outline" size={28} />}
    </View>
  )
}
export const UploadTabBarIconComponent: React.FC<TTabBarIconComponent> = (props) => {
  const { focused } = props
  return (
    <View className="flex items-center justify-center w-full h-full ">
      {focused ? <MaterialIcons name="add-box" size={32} /> : <Octicons name="diff-added" size={28} />}
    </View>
  )
}
export const NotificationTabBarIconComponent: React.FC<TTabBarIconComponent> = (props) => {
  const { focused } = props
  return (
    <View className="flex items-center justify-center w-full h-full ">
      {focused ? <AntDesign name="heart" size={28} /> : <AntDesign name="hearto" size={28} />}
    </View>
  )
}
export const ProfileTabBarIconComponent: React.FC<TTabBarIconComponent> = (props) => {
  const { focused } = props
  return (
    <View className="flex items-center justify-center w-full h-full ">
      {focused ? <FontAwesome name="user-circle" size={28} /> : <FontAwesome name="user-circle-o" size={28} />}
    </View>
  )
}

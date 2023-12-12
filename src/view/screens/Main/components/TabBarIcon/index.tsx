import { AntDesign, Feather, FontAwesome, Ionicons, MaterialIcons, Octicons } from "@expo/vector-icons"
import { RouteProp, useNavigation } from "@react-navigation/native"
import {
  NativeStackNavigationProp,
  NativeStackNavigatorProps,
} from "@react-navigation/native-stack/lib/typescript/src/types"
import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { MainBottomTabParamList, RootNativeStackParamList } from "~/src/view/type"
type TTabBarIconComponent = {
  focused: boolean
}
export const HomeTabBarIconComponent: React.FC<TTabBarIconComponent> = (props) => {
  const { focused } = props
  return (
    <View className="flex h-full w-full items-center justify-center ">
      {focused ? <Ionicons name="md-home-sharp" size={28} /> : <Ionicons name="md-home-outline" size={28} />}
    </View>
  )
}
export const SearchTabBarIconComponent: React.FC<TTabBarIconComponent> = (props) => {
  const { focused } = props
  return (
    <View className="flex h-full w-full items-center justify-center ">
      {focused ? <Ionicons name="search" size={32} /> : <Ionicons name="search-outline" size={28} />}
    </View>
  )
}
export const UploadTabBarIconComponent: React.FC<TTabBarIconComponent> = (props) => {
  const { focused } = props
  const navigation = useNavigation<NativeStackNavigationProp<RootNativeStackParamList, "MainView">>()
  return (
    <View className="flex h-full w-full items-center justify-center ">
      <TouchableOpacity onPress={() => navigation.replace("UploadView")}>
        {focused ? <MaterialIcons name="add-box" size={32} /> : <Octicons name="diff-added" size={28} />}
      </TouchableOpacity>
    </View>
  )
}
export const NotificationTabBarIconComponent: React.FC<TTabBarIconComponent> = (props) => {
  const { focused } = props
  return (
    <View className="flex h-full w-full items-center justify-center ">
      {focused ? <AntDesign name="heart" size={28} /> : <AntDesign name="hearto" size={28} />}
    </View>
  )
}
export const ProfileTabBarIconComponent: React.FC<TTabBarIconComponent> = (props) => {
  const { focused } = props
  return (
    <View className="flex h-full w-full items-center justify-center ">
      {focused ? <FontAwesome name="user-circle" size={28} /> : <FontAwesome name="user-circle-o" size={28} />}
    </View>
  )
}

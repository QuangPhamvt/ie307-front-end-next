import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootNativeStackParamList } from "../type"
import AuthView from "./Auth"
import MainView from "./Main"

const NativeStack = createNativeStackNavigator<RootNativeStackParamList>()
const Screens: React.FC = () => {
  return (
    <NativeStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="AuthView">
      <NativeStack.Screen name="AuthView" component={AuthView} />
      <NativeStack.Screen name="MainView" component={MainView} />
    </NativeStack.Navigator>
  )
}
export default Screens

import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootNativeStackParamList } from "../type"
import AuthView from "./Auth"
import MainView from "./Main"
import authAction from "./Auth/store/authAction"
import { useRecoilValue } from "recoil"
import { authState } from "~/src/store/atom"

const NativeStack = createNativeStackNavigator<RootNativeStackParamList>()
const Screens: React.FC = () => {
  authAction.getProfileLocalAuthAction()
  const { state } = useRecoilValue(authState)
  return (
    <NativeStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="AuthView">
      {state !== "hasValue" && <NativeStack.Screen name="AuthView" component={AuthView} />}
      {state === "hasValue" && <NativeStack.Screen name="MainView" component={MainView} />}
    </NativeStack.Navigator>
  )
}
export default Screens

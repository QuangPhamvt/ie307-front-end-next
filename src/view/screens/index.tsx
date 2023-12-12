import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootNativeStackParamList } from "../type"
import AuthView from "./Auth"
import MainView from "./Main"
import authAction from "./Auth/store/authAction"
import { useRecoilValue } from "recoil"
import { authState } from "~/src/store/atom"
import EditProfileView from "./EditProfile"
import UploadScreen from "./Upload"
import StoryView from "./StoryVIew"

const NativeStack = createNativeStackNavigator<RootNativeStackParamList>()
const Screens: React.FC = () => {
  const { state } = useRecoilValue(authState)
  authAction.getProfileLocalAuthAction()
  return (
    <NativeStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="AuthView">
      {state !== "hasValue" ? (
        <NativeStack.Screen name="AuthView" component={AuthView} />
      ) : (
        <>
          <NativeStack.Screen name="MainView" component={MainView} />
          <NativeStack.Screen name="UploadView" component={UploadScreen} />
          <NativeStack.Screen name="StoryView" component={StoryView} />
          <NativeStack.Screen
            options={{
              headerShown: true,
              title: "Edit Profile",
              headerTintColor: "black",
            }}
            name="EditProfileView"
            component={EditProfileView}
          />
        </>
      )}
    </NativeStack.Navigator>
  )
}
export default Screens

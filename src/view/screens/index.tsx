import React, { useEffect } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootNativeStackParamList } from "../type"
import AuthView from "./Auth"
import MainView from "./Main"
import authAction from "./Auth/store/authAction"
import { useRecoilValue } from "recoil"
import { authState, userState } from "~/src/store/atom"
import EditProfileView from "./EditProfile"
import UploadScreen from "./Upload"
import StoryView from "./StoryVIew"
import NewPostScreen from "./NewPost"
import { Text } from "react-native"
import UsernameEdit from "./UsernameEdit"
import BioEditView from "./BioEdit"

const NativeStack = createNativeStackNavigator<RootNativeStackParamList>()
const Screens: React.FC = () => {
  const { state } = useRecoilValue(authState)
  const user = useRecoilValue(userState)
  authAction.getProfileLocalAuthAction()
  const { onGetMe } = authAction.getMe()
  React.useEffect(() => {
    if (state === "hasValue") onGetMe()
  }, [state])
  console.log(user.contents?.user.follows.following_id)

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
              headerTintColor: "New post",
            }}
            name="NewPostView"
            component={NewPostScreen}
          />
          <NativeStack.Screen
            options={{
              headerShown: true,
              title: "Edit Profile",
              headerTintColor: "black",
            }}
            name="EditProfileView"
            component={EditProfileView}
          />
          <NativeStack.Screen
            options={{
              headerShown: true,
              title: "username",
              headerTintColor: "black",
              headerRight: () => <Text className="text-lg font-bold text-sky-500">Done</Text>,
            }}
            name="Username"
            component={UsernameEdit}
          />
          <NativeStack.Screen
            options={{
              headerShown: true,
              title: "Bio",
              headerTintColor: "black",
              headerRight: () => <Text className="text-lg font-bold text-sky-500">Done</Text>,
            }}
            name="Bio"
            component={BioEditView}
          />
        </>
      )}
    </NativeStack.Navigator>
  )
}
export default Screens

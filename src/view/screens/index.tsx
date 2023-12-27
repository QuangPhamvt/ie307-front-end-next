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
import { Text, TouchableOpacity, View } from "react-native"
import UsernameEdit from "./UsernameEdit"
import BioEditView from "./BioEdit"
import { StatusBar } from "expo-status-bar"
import UsernameEditAction from "./UsernameEdit/hook"
import ChangePasswordView from "./ChangePassword"
import { AntDesign } from "@expo/vector-icons"
import NewStoryView from "./NewStoryView"

const NativeStack = createNativeStackNavigator<RootNativeStackParamList>()
const Screens: React.FC = () => {
  const { state } = useRecoilValue(authState)
  const user = useRecoilValue(userState)
  authAction.getProfileLocalAuthAction()
  const { onGetMe } = authAction.getMe()
  const { onUseUploadUser } = UsernameEditAction.useUploadUsername()
  React.useEffect(() => {
    if (state === "hasValue") onGetMe()
  }, [state])
  return (
    <>
      <StatusBar />
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
                headerRight: () => (
                  <TouchableOpacity onPress={() => onUseUploadUser()}>
                    <Text className="text-lg font-bold text-sky-500">Done</Text>
                  </TouchableOpacity>
                ),
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
            <NativeStack.Screen
              options={({ navigation }) => ({
                headerShown: true,
                title: "Change Password",
                headerTintColor: "black",
                headerLeft: () => {
                  return (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                      <AntDesign name="left" size={24} />
                    </TouchableOpacity>
                  )
                },
                headerRight: () => <Text className="text-lg font-bold text-sky-500">Done</Text>,
              })}
              name="ChangePassword"
              component={ChangePasswordView}
            />
            <NativeStack.Screen name="NewStoryView" component={NewStoryView} />
          </>
        )}
      </NativeStack.Navigator>
    </>
  )
}
export default Screens

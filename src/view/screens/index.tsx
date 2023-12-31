import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { useRecoilValue } from "recoil"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import { AntDesign } from "@expo/vector-icons"
import { RootNativeStackParamList } from "../type"
import authAction from "./Auth/store/authAction"
import { authState } from "~/src/store/atom"
import UsernameEditAction from "./UsernameEdit/hook"
import AuthView from "./Auth"
import MainView from "./Main"
import EditProfileView from "./EditProfile"
import UploadScreen from "./Upload"
import StoryView from "./StoryVIew"
import NewPostScreen from "./NewPost"
import UsernameEdit from "./UsernameEdit"
import BioEditView from "./BioEdit"
import ChangePasswordView from "./ChangePassword"
import NewStoryView from "./NewStoryView"
import BioEditAction from "./BioEdit/hook"

const NativeStack = createNativeStackNavigator<RootNativeStackParamList>()
const Screens: React.FC = () => {
  const { state } = useRecoilValue(authState)
  authAction.getProfileLocalAuthAction()
  const { onGetMe } = authAction.getMe()
  const { onUseUploadUser } = UsernameEditAction.useUploadUsername()
  const { onUseUploadBio } = BioEditAction.useUploadBio()
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
                title: "Edit Title Post",
                headerTintColor: "New post",
              }}
              name="NewPostView"
              component={NewPostScreen}
            />
            <NativeStack.Screen
              options={{
                headerShown: true,
                title: "Edit Profile",
              }}
              name="EditProfileView"
              component={EditProfileView}
            />
            <NativeStack.Screen
              options={{
                headerShown: true,
                title: "Username",
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
                headerRight: () => (
                  <TouchableOpacity onPress={onUseUploadBio}>
                    <Text className="text-lg font-bold text-sky-500">Done</Text>
                  </TouchableOpacity>
                ),
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

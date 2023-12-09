import React from "react"
import { KeyboardAvoidingView, SafeAreaView } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { useRecoilValue } from "recoil"
import { AuthStackParamList } from "../../type"
import LogInStack from "./components/LogInStack"
import SignUpStack from "./components/SignUpStack"
import { DismissKeyBoardView } from "~/src/HOC"
import authAction from "./store/authAction"
import { authState } from "~/src/store/atom"
const Stack = createStackNavigator<AuthStackParamList>()
const AuthView: React.FC = () => {
  const auth = useRecoilValue(authState)
  authAction.getProfileLocalAuthAction()
  console.log(auth)
  return (
    <KeyboardAvoidingView behavior="padding" className="">
      <DismissKeyBoardView>
        <SafeAreaView className="h-screen text-white">
          <Stack.Navigator
            initialRouteName="LogInStack"
            screenOptions={{ headerShown: false, headerStatusBarHeight: 0 }}
          >
            <Stack.Screen name="LogInStack" component={LogInStack} />
            <Stack.Screen name="SignUpStack" component={SignUpStack} />
          </Stack.Navigator>
        </SafeAreaView>
      </DismissKeyBoardView>
    </KeyboardAvoidingView>
  )
}
export default AuthView

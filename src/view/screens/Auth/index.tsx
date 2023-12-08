import React from "react"
import { KeyboardAvoidingView, SafeAreaView, Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { createStackNavigator } from "@react-navigation/stack"
import { AuthStackParamList } from "../../type"
import LogInStack from "./components/LogInStack"
import SignUpStack from "./components/SignUpStack"
import { DismissKeyBoardView } from "~/src/HOC"
const Stack = createStackNavigator<AuthStackParamList>()
const AuthView: React.FC = () => {
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

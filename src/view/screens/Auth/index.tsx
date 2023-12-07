import React from "react"
import { SafeAreaView, Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { createStackNavigator } from "@react-navigation/stack"
import { AuthStackParamList } from "../../type"
import LogInStack from "./components/LogInStack"
import SignUpStack from "./components/SignUpStack"
const Stack = createStackNavigator<AuthStackParamList>()
const AuthView: React.FC = () => {
  return (
    <LinearGradient colors={["#4158D0", "#C850C0", "#FFCC70"]}>
      <SafeAreaView className="h-screen text-white">
        <Stack.Navigator initialRouteName="LogInStack">
          <Stack.Screen name="LogInStack" component={LogInStack} />
          <Stack.Screen name="SignUpStack" component={SignUpStack} />
        </Stack.Navigator>
      </SafeAreaView>
    </LinearGradient>
  )
}
export default AuthView

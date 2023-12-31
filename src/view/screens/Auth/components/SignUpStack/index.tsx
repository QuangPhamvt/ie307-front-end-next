import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { SignUpStackParamList } from "~/src/view/type"
import {
  EmailStackComponent,
  ConfirmStackComponent,
  CreatePasswordStackComponent,
  SaveLoginStackComponent,
} from "./components"

const Stack = createStackNavigator<SignUpStackParamList>()
const SignUpStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="EmailStack" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="EmailStack" component={EmailStackComponent} />
      <Stack.Screen name="ConfirmStack" component={ConfirmStackComponent} />
      <Stack.Screen name="CreatePassword" component={CreatePasswordStackComponent} />
      <Stack.Screen name="SaveLogin" component={SaveLoginStackComponent} />
    </Stack.Navigator>
  )
}
export default SignUpStack

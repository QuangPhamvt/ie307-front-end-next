import { createStackNavigator } from "@react-navigation/stack"
import { ChangePasswordStackParamList } from "~/src/view/type"
import SendEmailChangePasswordStack from "./components/SendEmailChangePasswordStack"
import SendChangePasswordStack from "./components/SendChangePasswordStack"
const Stack = createStackNavigator<ChangePasswordStackParamList>()
const ChangePasswordView: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SendEmailChangePassword">
      <Stack.Screen name="SendEmailChangePassword" component={SendEmailChangePasswordStack} />
      <Stack.Screen name="SendChangePassword" component={SendChangePasswordStack} />
    </Stack.Navigator>
  )
}
export default ChangePasswordView

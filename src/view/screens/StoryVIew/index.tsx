import { createStackNavigator } from "@react-navigation/stack"
import { StoryViewStackParamList } from "../../type"
import SelectStoryStack from "./component/SelectStoryStack"
import UploadStoryStack from "./component/UploadStoryStack"

const Stack = createStackNavigator<StoryViewStackParamList>()
const StoryView: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SelectStoryStack">
      <Stack.Screen name="SelectStoryStack" component={SelectStoryStack} />
      <Stack.Screen name="UploadStoryStack" component={UploadStoryStack} />
    </Stack.Navigator>
  )
}
export default StoryView

import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { SearchViewStackParamList } from "~/src/view/type"
import SearchStack from "./components/SearchStack"
import PostDetailStack from "./components/PostDetailStack"
import UserDetailStack from "./components/UserDetailStack"
const Stack = createStackNavigator<SearchViewStackParamList>()
const SearchTab: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="SearchStack" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SearchStack" component={SearchStack} />
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Explore",
          headerTintColor: "black",
          headerLeftLabelVisible: false,
          headerStatusBarHeight: 0,
        }}
        name="PostDetailStack"
        component={PostDetailStack}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: "User",
          headerStatusBarHeight: 0,
          headerTintColor: "black",
          headerLeftLabelVisible: false,
        }}
        name="UserDetailStack"
        component={UserDetailStack}
      />
    </Stack.Navigator>
  )
}
export default SearchTab

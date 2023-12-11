import React from "react"
import { View } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { SearchViewStackParamList } from "~/src/view/type"
import SearchStack from "./components/SearchStack"
import PostDetailStack from "./components/PostDetailStack"
const SearchViewStack = createStackNavigator<SearchViewStackParamList>()
const SearchTab: React.FC = () => {
  return (
    <SearchViewStack.Navigator initialRouteName="SearchStack" screenOptions={{ headerShown: false }}>
      <SearchViewStack.Screen name="SearchStack" component={SearchStack} />
      <SearchViewStack.Screen name="PostDetailStack" component={PostDetailStack} />
    </SearchViewStack.Navigator>
  )
}
export default SearchTab

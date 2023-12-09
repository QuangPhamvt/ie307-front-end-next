import React from "react"
import { SafeAreaView } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MainBottomTabParamList } from "../../type"
import MainTab from "./components/MainTab"
import NotificationTab from "./components/NotificationTab"
import ProfileTab from "./components/ProfileTab"
import UploadTab from "./components/UploadTab"
import SearchTab from "./components/SearchTab"
import {
  HomeTabBarIconComponent,
  NotificationTabBarIconComponent,
  ProfileTabBarIconComponent,
  SearchTabBarIconComponent,
  UploadTabBarIconComponent,
} from "./components/TabBarIcon"

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>()
const MainView: React.FC = () => {
  return (
    <SafeAreaView className="h-screen">
      <BottomTab.Navigator
        initialRouteName="HomeView"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#ffff",
            borderTopWidth: 1,
            borderTopColor: "#393E46",
          },
          tabBarIcon: ({ focused }) => {
            if (route.name === "HomeView") return <HomeTabBarIconComponent focused={focused} />
            if (route.name === "SearchView") return <SearchTabBarIconComponent focused={focused} />
            if (route.name === "UploadView") return <UploadTabBarIconComponent focused={focused} />
            if (route.name === "NotificationView") return <NotificationTabBarIconComponent focused={focused} />
            if (route.name === "ProfileView") return <ProfileTabBarIconComponent focused={focused} />
          },
        })}
      >
        <BottomTab.Screen name="HomeView" component={MainTab} />
        <BottomTab.Screen name="SearchView" component={SearchTab} />
        <BottomTab.Screen name="UploadView" component={UploadTab} />
        <BottomTab.Screen name="NotificationView" component={NotificationTab} />
        <BottomTab.Screen name="ProfileView" component={ProfileTab} />
      </BottomTab.Navigator>
    </SafeAreaView>
  )
}
export default MainView

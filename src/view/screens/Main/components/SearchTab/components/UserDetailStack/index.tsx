import React from "react"
import { ScrollView } from "react-native"
import { HeaderComponent } from "./components/HeaderComponent"
import MainComponent from "./components/MainComponent"
import { RouteProp, useRoute } from "@react-navigation/native"
import { SearchViewStackParamList } from "~/src/view/type"
import SearchViewAction from "../../store/hook"
const UserDetailStack: React.FC = () => {
  const route = useRoute<RouteProp<SearchViewStackParamList, "UserDetailStack">>()
  const { onGetUserDetail } = SearchViewAction.useGetUserDetail()
  React.useEffect(() => {
    onGetUserDetail(route.params.user_id)
  }, [route.params.user_id])
  return (
    <ScrollView className="flex w-full h-full bg-white">
      <HeaderComponent />
      <MainComponent />
    </ScrollView>
  )
}
export default UserDetailStack

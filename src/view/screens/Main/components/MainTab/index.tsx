import React from "react"
import { useRecoilValue } from "recoil"
import { ScrollView } from "react-native"
import HeaderComponent from "./components/HeaderComponent"
import ListPostComponent from "./components/ListPostComponent"
import CommentModalComponent from "./components/CommentModal"
import MainTabAction from "./store/hook"
import { userState } from "~/src/store/atom"

const MainTab: React.FC = () => {
  const { onGetOriginListPost } = MainTabAction.useGetOriginListPost()
  const user = useRecoilValue(userState)
  React.useEffect(() => {
    onGetOriginListPost()
  }, [user.contents?.user.follows])
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex h-full bg-white">
      <HeaderComponent />
      <ListPostComponent />
      <CommentModalComponent />
    </ScrollView>
  )
}
export default MainTab

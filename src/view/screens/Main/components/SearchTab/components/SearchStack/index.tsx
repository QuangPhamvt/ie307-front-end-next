import React from "react"
import { View } from "react-native"
import HeaderComponent from "./components/HeaderComponent"
import InstaGrid from "./components/ListPostComponent"
import SearchStackAction from "./store/hook"
import { useRecoilValue } from "recoil"
import { listPostSearchState, openSearchState } from "./store/atom"
const SearchStack: React.FC = () => {
  const { onGetListPost } = SearchStackAction.useGetListPost()
  const { data } = useRecoilValue(listPostSearchState)
  const openSearch = useRecoilValue(openSearchState)
  React.useEffect(() => {
    onGetListPost()
  }, [])
  return (
    <View className="relative flex h-full w-full bg-white">
      <HeaderComponent />
      <InstaGrid data={data} columns={3} loading={false} onEndReached={() => null} onEndReachedThreshold={400} />
      {openSearch && <View className="absolute top-12 h-screen w-full bg-white"></View>}
    </View>
  )
}
export default SearchStack

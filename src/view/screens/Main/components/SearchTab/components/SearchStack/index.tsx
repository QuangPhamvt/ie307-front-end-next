import React from "react"
import { View, Text } from "react-native"
import HeaderComponent from "./components/HeaderComponent"
import InstaGrid from "./components/ListPostComponent"
import SearchStackAction from "./store/hook"
import { useRecoilValue } from "recoil"
import { getUserInfoBySearchState, listPostSearchState, openSearchState } from "./store/atom"
import ItemSearchComponent from "./components/ItemSearchComponent"
const SearchStack: React.FC = () => {
  const { onGetListPost } = SearchStackAction.useGetListPost()
  const { data } = useRecoilValue(listPostSearchState)
  const openSearch = useRecoilValue(openSearchState)
  const getUserSearch = useRecoilValue(getUserInfoBySearchState)
  React.useEffect(() => {
    onGetListPost()
  }, [])
  return (
    <View className="relative flex h-full w-full bg-white">
      <HeaderComponent />
      <InstaGrid data={data} columns={3} loading={false} onEndReached={() => null} onEndReachedThreshold={400} />
      {openSearch && (
        <View className="absolute top-12 h-screen w-full bg-white">
          <View className="w-ful flex px-2">
            {!!getUserSearch.data.length &&
              getUserSearch.data.map((item) => {
                return <ItemSearchComponent key={item.id} {...item} />
              })}
          </View>
        </View>
      )}
    </View>
  )
}
export default SearchStack

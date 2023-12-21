import React from "react"
import { View, ScrollView, TouchableOpacity, NativeScrollEvent, ActivityIndicator } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import ImageHoc from "~/src/view/components/ImageHOC"
import { SearchViewStackParamList } from "~/src/view/type"
import SearchStackAction from "../store/hook"
import { useRecoilValue } from "recoil"
import { listPostSearchState } from "../store/atom"

type TInstaGrid = {
  data: { amountPosts: number; data: { id: string; images: Array<string> }[]; direction: string }[]
  columns: number
  loading: boolean
  onEndReachedThreshold: number
  onEndReached: () => void
  onItemClick?: () => void
}
type TGroup5nthPost = {
  data: { id: string; images: Array<string> }[]
  direction: string
}
type TGroup3nthPost = {
  data: { id: string; images: Array<string> }[]
  direction: string
}
const Group1nthPost: React.FC<{ data: Array<{ id: string; images: Array<string> }> }> = (props) => {
  const { data } = props
  const navigation = useNavigation<StackNavigationProp<SearchViewStackParamList, "SearchStack">>()
  return (
    <View className="flex h-auto w-screen flex-row flex-wrap">
      {data.map((item) => {
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate("PostDetailStack", { post_id: item.id })}
            className="flex aspect-square h-1/3 w-1/3 items-center justify-center border-[1px] border-black"
          >
            <ImageHoc uri={item && item.images[0]} />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
const Group5nthPost: React.FC<TGroup5nthPost> = (props) => {
  const { data, direction } = props
  const navigation = useNavigation<StackNavigationProp<SearchViewStackParamList, "SearchStack">>()
  return (
    <View className="flex h-auto w-screen flex-row flex-wrap">
      {direction === "right" && (
        <TouchableOpacity
          onPress={() => navigation.navigate("PostDetailStack", { post_id: data[3].id })}
          className="aspect-square w-1/3 border-[1px] border-black bg-slate-400"
        >
          <ImageHoc uri={data[3] && data[3].images[0]} />
        </TouchableOpacity>
      )}
      <View className="flex aspect-square h-2/3 w-2/3 flex-row flex-wrap border-[1px] border-black">
        <TouchableOpacity
          onPress={() => navigation.navigate("PostDetailStack", { post_id: data[0].id })}
          className="flex aspect-square h-1/2 w-1/2 items-center justify-center border-[1px] border-black"
        >
          <ImageHoc uri={data[0] && data[0].images[0]} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("PostDetailStack", { post_id: data[1].id })}
          className="aspect-square h-1/2 w-1/2 border-[1px] border-black"
        >
          <ImageHoc uri={data[1] && data[1].images[0]} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("PostDetailStack", { post_id: data[2].id })}
          className="aspect-square h-1/2 w-1/2 border-[1px] border-black"
        >
          <ImageHoc uri={data[2] && data[2].images[0]} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("PostDetailStack", { post_id: data[3].id })}
          className="aspect-square h-1/2 w-1/2 border-[1px] border-black"
        >
          <ImageHoc uri={data[3] && data[3].images[0]} />
        </TouchableOpacity>
      </View>
      {direction === "left" && (
        <TouchableOpacity
          onPress={() => navigation.navigate("PostDetailStack", { post_id: data[4].id })}
          className="aspect-square w-1/3 border-[1px] border-black bg-slate-400"
        >
          <ImageHoc uri={data[3] && data[3].images[0]} />
        </TouchableOpacity>
      )}
    </View>
  )
}
const Group3nthPost: React.FC<TGroup3nthPost> = (props) => {
  const { data, direction } = props
  const navigation = useNavigation<StackNavigationProp<SearchViewStackParamList, "SearchStack">>()
  return (
    <View className="flex w-full flex-row flex-wrap ">
      {direction === "right" && (
        <TouchableOpacity
          onPress={() => navigation.navigate("PostDetailStack", { post_id: data[2].id })}
          className="aspect-square h-2/3 w-2/3 border-[1px] border-black bg-gray-500"
        >
          <ImageHoc uri={data[2] && data[2].images[0]} />
        </TouchableOpacity>
      )}
      <View className="flex w-1/3">
        <TouchableOpacity
          onPress={() => navigation.navigate("PostDetailStack", { post_id: data[0].id })}
          className="aspect-square w-full  border-[1px] border-black bg-gray-400"
        >
          <ImageHoc uri={data[0] && data[0].images[0]} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("PostDetailStack", { post_id: data[1].id })}
          className="aspect-square w-full  border-[1px] border-black bg-gray-500"
        >
          <ImageHoc uri={data[1] && data[1].images[0]} />
        </TouchableOpacity>
      </View>
      {direction === "left" && (
        <TouchableOpacity
          onPress={() => navigation.navigate("PostDetailStack", { post_id: data[2].id })}
          className="aspect-square h-2/3 w-2/3 border-[1px] border-black bg-gray-500"
        >
          <ImageHoc uri={data[2] && data[2].images[0]} />
        </TouchableOpacity>
      )}
    </View>
  )
}
const InstaGrid: React.FC<TInstaGrid> = ({ data, onEndReached, loading = false, onItemClick }) => {
  const { state } = useRecoilValue(listPostSearchState)
  const { onGetListPost } = SearchStackAction.useGetListPost()
  const isCloseToBottom = (nativeEvent: NativeScrollEvent) => {
    const { layoutMeasurement, contentOffset, contentSize } = nativeEvent
    return layoutMeasurement.height + contentOffset.y >= contentSize.height + 20
  }
  return (
    <ScrollView
      className="flex w-full"
      scrollEventThrottle={400}
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) {
          onGetListPost()
        }
      }}
    >
      {data.map((item, index) => {
        return (
          <View key={index} className="w-full">
            {item.amountPosts === 3 && item.data.length === 3 && (
              <Group3nthPost data={item.data} direction={item.direction} />
            )}
            {item.amountPosts === 5 && item.data.length === 5 && (
              <Group5nthPost data={item.data} direction={item.direction} />
            )}
            {(item.amountPosts === 3 && item.data.length !== 3) ||
              (item.amountPosts === 5 && item.data.length !== 5 && <Group1nthPost data={item.data} />)}
          </View>
        )
      })}
      {state === "loading" && (
        <View className="mt-4">
          <ActivityIndicator animating size={"large"} color={"black"} />
        </View>
      )}
    </ScrollView>
  )
}
export default InstaGrid

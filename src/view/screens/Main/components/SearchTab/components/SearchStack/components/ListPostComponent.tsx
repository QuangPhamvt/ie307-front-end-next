import React from "react"
import { View, ScrollView, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import ImageHoc from "~/src/view/components/ImageHOC"
import { SearchViewStackParamList } from "~/src/view/type"

type TInstaGrid = {
  data: { amountPosts: number; data: any[]; direction: string }[]
  columns: number
  loading: boolean
  onEndReachedThreshold: number
  onEndReached: () => void
  onItemClick?: () => void
}
type TGroup5nthPost = {
  data: any[]
  direction: string
}
type TGroup3nthPost = {
  data: any[]
  direction: string
}
const Group5nthPost: React.FC<TGroup5nthPost> = (props) => {
  const { data, direction } = props
  const navigation = useNavigation<StackNavigationProp<SearchViewStackParamList, "SearchStack">>()
  return (
    <View className="flex h-auto w-screen flex-row flex-wrap">
      {direction === "right" && (
        <TouchableOpacity className="aspect-square w-1/3 border-[1px] border-black bg-slate-400">
          <ImageHoc uri={data[3].uri} />
        </TouchableOpacity>
      )}
      <View className="flex aspect-square h-2/3 w-2/3 flex-row flex-wrap border-[1px] border-black">
        <TouchableOpacity
          onPress={() => navigation.navigate("PostDetailStack")}
          className="flex aspect-square h-1/2 w-1/2 items-center justify-center border-[1px] border-black"
        >
          <ImageHoc uri={data[0].uri} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("PostDetailStack")}
          className="aspect-square h-1/2 w-1/2 border-[1px] border-black"
        >
          <ImageHoc uri={data[1].uri} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("PostDetailStack")}
          className="aspect-square h-1/2 w-1/2 border-[1px] border-black"
        >
          <ImageHoc uri={data[2].uri} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("PostDetailStack")}
          className="aspect-square h-1/2 w-1/2 border-[1px] border-black"
        >
          <ImageHoc uri={data[3].uri} />
        </TouchableOpacity>
      </View>
      {direction === "left" && (
        <TouchableOpacity
          onPress={() => navigation.navigate("PostDetailStack")}
          className="aspect-square w-1/3 border-[1px] border-black bg-slate-400"
        >
          <ImageHoc uri={data[3].uri} />
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
          onPress={() => navigation.navigate("PostDetailStack")}
          className="aspect-square h-2/3 w-2/3 border-[1px] border-black bg-gray-500"
        >
          <ImageHoc uri={data[2].uri} />
        </TouchableOpacity>
      )}
      <View className="flex w-1/3">
        <TouchableOpacity
          onPress={() => navigation.navigate("PostDetailStack")}
          className="aspect-square w-full  border-[1px] border-black bg-gray-400"
        >
          <ImageHoc uri={data[0].uri} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("PostDetailStack")}
          className="aspect-square w-full  border-[1px] border-black bg-gray-500"
        >
          <ImageHoc uri={data[1].uri} />
        </TouchableOpacity>
      </View>
      {direction === "left" && (
        <TouchableOpacity
          onPress={() => navigation.navigate("PostDetailStack")}
          className="aspect-square h-2/3 w-2/3 border-[1px] border-black bg-gray-500"
        >
          <ImageHoc uri={data[2].uri} />
        </TouchableOpacity>
      )}
    </View>
  )
}
const InstaGrid: React.FC<TInstaGrid> = ({ data, onEndReached, loading = false, onItemClick }) => {
  return (
    <ScrollView className="flex w-full">
      {data.map((item, index) => {
        return (
          <View key={index} className="w-full">
            {item.amountPosts === 3 && <Group3nthPost data={item.data} direction={item.direction} />}
            {item.amountPosts === 5 && <Group5nthPost data={item.data} direction={item.direction} />}
          </View>
        )
      })}
    </ScrollView>
  )
}
export default InstaGrid

import { AntDesign, Fontisto, Ionicons } from "@expo/vector-icons"
import React from "react"
import { View, Text, TouchableOpacity, Image, ScrollView, NativeScrollEvent } from "react-native"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { getPostListMainState, showCommentModalState } from "../store/atom"
import dayjs from "dayjs"
import { userState } from "~/src/store/atom"
import PostDetailAction from "../../SearchTab/components/PostDetailStack/store/hook"
import { useDoubleTap } from "~/src/utilities/hook"
import { useNavigation } from "@react-navigation/native"
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { MainBottomTabParamList } from "~/src/view/type"
import ImageHoc from "~/src/view/components/ImageHOC"

interface IPostComponent {
  id: string
  author_id: string
  avatar: string | null
  email: string
  title: string
  images: Array<string>
  create_at: Date
  loves: number
  comments: number
}
const PostComponent: React.FC<IPostComponent> = (props) => {
  const { email, create_at, avatar, images, loves, id, author_id } = props
  const navigation = useNavigation<BottomTabNavigationProp<MainBottomTabParamList, "HomeView">>()
  const setShowCommentModal = useSetRecoilState(showCommentModalState)
  const [amountLoves, setAmountLoves] = React.useState<number>(loves)
  const [imgActive, setImgActive] = React.useState<number>(0)
  const { contents } = useRecoilValue(userState)
  const { onPostLove } = PostDetailAction.usePostLove()
  const { handleDoubleTap } = useDoubleTap(() => {
    onPostLove(id)
    if (contents?.user.post_loves.find((item) => item === id)) setAmountLoves(amountLoves - 1)
    else setAmountLoves(amountLoves + 1)
  }, 500)
  const onChange = (nativeEvent: NativeScrollEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
      if (slide != imgActive) setImgActive(slide)
    }
  }
  return (
    <View className="relative flex w-full pt-2">
      <View className="flex flex-row items-center p-2 space-x-2">
        <View className="h-8 bg-gray-600 rounded-full aspect-square">
          {avatar && <Image className="w-full h-full rounded-full" source={{ uri: avatar }} />}
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SearchView", { screen: "UserDetailStack", params: { user_id: author_id } })
          }}
        >
          <Text className="font-bold">{email?.split("@")[0]}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        onScroll={({ nativeEvent }) => {
          onChange(nativeEvent)
        }}
        pagingEnabled
        scrollEventThrottle={400}
        showsHorizontalScrollIndicator={false}
        horizontal
        className="w-full aspect-square"
      >
        {images.map((item, index) => (
          <View key={index} className="h-full aspect-square bg-slate-200">
            <ImageHoc uri={item} />
          </View>
        ))}
      </ScrollView>
      <View className="flex flex-row items-start p-2 space-x-4">
        <TouchableOpacity
          onPress={() => {
            handleDoubleTap()
          }}
        >
          {contents?.user.post_loves.find((item) => item === id) ? (
            <AntDesign name="heart" size={28} />
          ) : (
            <AntDesign name="hearto" size={28} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setShowCommentModal({ isOpen: true })
          }}
        >
          <Fontisto name="comment" size={26} />
        </TouchableOpacity>
      </View>
      <View className="flex px-2 mt-1 space-y-1">
        <Text className="font-bold">{loves} likes</Text>
        <Text>
          <Text className="font-bold">quangquang___</Text> To day is lucky day
        </Text>
        <Text className="text-xs">{dayjs(create_at).format("MMMM DD, YYYY")}</Text>
      </View>
      {images.length > 1 && (
        <View className="absolute flex items-center justify-center right-4 top-16">
          <View className="flex w-8 items-center justify-center rounded-full bg-zinc-600 py-[0.5px]">
            <Text className="text-xs text-white">
              {imgActive + 1}/{images.length}
            </Text>
          </View>
        </View>
      )}
    </View>
  )
}
const ListPostComponent: React.FC = () => {
  const post = useRecoilValue(getPostListMainState)
  return (
    <View className="flex flex-col w-full">
      {post.data.map((item) => {
        return (
          <PostComponent
            key={item.id}
            id={item.id}
            title={item.title}
            email={item.email}
            author_id={item.author_id}
            avatar={item.avatar}
            loves={item.loves}
            comments={item.comments}
            images={item.images}
            create_at={item.create_at}
          />
        )
      })}
    </View>
  )
}
export default ListPostComponent

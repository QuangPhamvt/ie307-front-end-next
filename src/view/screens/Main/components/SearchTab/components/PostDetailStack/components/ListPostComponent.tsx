import React from "react"
import { Image, NativeScrollEvent, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { AntDesign, Fontisto } from "@expo/vector-icons"
import CommentModalComponent from "./CommentComponent"
import { getOriginListPostState, postIdToGetListCommentState, showCommentPostDetailState } from "../store/atom"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootNativeStackParamList, SearchViewStackParamList } from "~/src/view/type"
import PostDetailAction from "../store/hook"
import { userState } from "~/src/store/atom"
import { useDoubleTap } from "~/src/utilities/hook"
import dayjs from "dayjs"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import ImageHoc from "~/src/view/components/ImageHOC"

interface IItemPostComponent {
  author_id: string
  post_id: string
  avatar: string | null
  email: string | null
  images: Array<string>
  loves: number
  create_at: Date
  comment: {
    author_id: string
    avatar: string | null
    email: string
    context: string
    loves: 0
    create_at: Date
  } | null
  stories: [{ id: string; image: string; create_at: string }]
}
const ItemPostComponent: React.FC<IItemPostComponent> = (props) => {
  const { author_id, post_id, avatar, loves, create_at, images, email, stories } = props
  const [imgActive, setImgActive] = React.useState<number>(0)
  const navigation = useNavigation<StackNavigationProp<SearchViewStackParamList, "PostDetailStack">>()
  const goToNewStoryView = useNavigation<NativeStackNavigationProp<RootNativeStackParamList, "MainView">>()
  const [amountLoves, setAmountLoves] = React.useState<number>(loves)
  const setShowModal = useSetRecoilState(showCommentPostDetailState)
  const setPostIdToGetListComment = useSetRecoilState(postIdToGetListCommentState)
  const { contents } = useRecoilValue(userState)
  const { onPostLove } = PostDetailAction.usePostLove()
  const { handleDoubleTap } = useDoubleTap(() => {
    onPostLove(post_id)
    if (contents?.user.post_loves.find((item) => item === post_id)) setAmountLoves(amountLoves - 1)
    else setAmountLoves(amountLoves + 1)
  }, 500)
  const onChange = (nativeEvent: NativeScrollEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
      if (slide != imgActive) setImgActive(slide)
    }
  }
  return (
    <View className="flex w-full border-b-[1px] border-gray-400 pb-2">
      <View className="flex flex-row items-center space-x-2 p-2">
        {avatar ? (
          <TouchableOpacity
            onPress={() => {
              if (stories.length > 0)
                goToNewStoryView.navigate("NewStoryView", {
                  user_id: author_id,
                  avatar,
                  email: email || "",
                  image: stories[0].image,
                  create_at: stories[0].create_at,
                })
            }}
          >
            <View
              className={`aspect-square h-8 rounded-full  ${
                stories.length > 0 && "border-[2px] border-pink-500/60 bg-gray-500"
              }`}
            >
              <ImageHoc uri={avatar} isCircle />
            </View>
          </TouchableOpacity>
        ) : (
          <View className="aspect-square h-8 rounded-full bg-gray-500" />
        )}
        <View className="flex grow flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("UserDetailStack", { user_id: author_id })
            }}
          >
            <Text className="font-bold">{email?.split("@")[0]}</Text>
          </TouchableOpacity>
          {contents?.user?.follows?.following_id &&
          contents.user.follows.following_id.some((item) => item == author_id) ? (
            <TouchableOpacity className="rounded-lg bg-gray-400 px-4 py-1">
              <Text className="font-medium text-white">Following</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity className="rounded-lg bg-gray-400 px-4 py-1">
              <Text className="font-medium text-white">Follow</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <ScrollView
        onScroll={({ nativeEvent }) => {
          onChange(nativeEvent)
        }}
        pagingEnabled
        scrollEventThrottle={400}
        showsHorizontalScrollIndicator={false}
        horizontal
        className="aspect-square w-full"
      >
        {images.map((item, index) => (
          <View key={index} className="aspect-square h-full bg-slate-200">
            <ImageHoc uri={item} />
          </View>
        ))}
      </ScrollView>
      <View className="flex flex-row items-start space-x-4 p-2">
        <TouchableOpacity
          onPress={() => {
            handleDoubleTap()
          }}
        >
          {contents?.user.post_loves.find((item) => item === post_id) ? (
            <AntDesign name="heart" size={28} />
          ) : (
            <AntDesign name="hearto" size={28} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setShowModal({ isOpen: true })
            setPostIdToGetListComment(post_id)
          }}
        >
          <Fontisto name="comment" size={26} />
        </TouchableOpacity>
      </View>
      <View className="mt-1 flex space-y-1 px-2">
        <Text className="font-bold">{amountLoves} loves</Text>
        <Text>
          <Text className="font-bold">quangquang___</Text> To day is lucky day
        </Text>
        <Text className="text-xs">{dayjs(create_at).format("MMMM DD, YYYY")}</Text>
      </View>
      {images.length > 1 && (
        <View className="absolute right-4 top-16 flex items-center justify-center">
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
  const route = useRoute<RouteProp<SearchViewStackParamList, "PostDetailStack">>()
  const { onGetOriginListPost } = PostDetailAction.useGetOriginListPost()
  const listPost = useRecoilValue(getOriginListPostState)
  React.useEffect(() => {
    if (route.params.post_id) {
      onGetOriginListPost(route.params.post_id)
    }
  }, [])

  return (
    <>
      <CommentModalComponent />
      <View>
        {listPost.state === "hasValue" &&
          listPost.data.map((post) => {
            return (
              <ItemPostComponent
                key={post.id}
                author_id={post.author_id}
                post_id={post.id}
                email={post.email}
                images={post.images}
                avatar={post.avatar}
                loves={post.loves}
                create_at={post.create_at}
                comment={post.comment}
                stories={post.stories}
              />
            )
          })}
      </View>
    </>
  )
}
export default ListPostComponent

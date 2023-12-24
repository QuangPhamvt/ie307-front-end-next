import { AntDesign, Fontisto, Ionicons } from "@expo/vector-icons"
import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { getPostListMainState, showCommentModalState } from "../store/atom"
import dayjs from "dayjs"
import { userState } from "~/src/store/atom"
import PostDetailAction from "../../SearchTab/components/PostDetailStack/store/hook"
import { useDoubleTap } from "~/src/utilities/hook"
import { useNavigation } from "@react-navigation/native"
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { MainBottomTabParamList } from "~/src/view/type"

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
  const { contents } = useRecoilValue(userState)
  const { onPostLove } = PostDetailAction.usePostLove()
  const { handleDoubleTap } = useDoubleTap(() => {
    onPostLove(id)
    if (contents?.user.post_loves.find((item) => item === id)) setAmountLoves(amountLoves - 1)
    else setAmountLoves(amountLoves + 1)
  }, 500)
  return (
    <View className="flex w-full pt-2">
      <View className="flex flex-row items-center space-x-2 p-2">
        <View className="aspect-square h-8 rounded-full bg-gray-600">
          {avatar && <Image className="h-full w-full rounded-full" source={{ uri: avatar }} />}
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SearchView", { screen: "UserDetailStack", params: { user_id: author_id } })
          }}
        >
          <Text className="font-bold">{email?.split("@")[0]}</Text>
        </TouchableOpacity>
      </View>
      <View className="aspect-square w-full bg-slate-200">
        <Image className="h-full w-full" source={{ uri: images[0] }} />
      </View>
      <View className="flex flex-row items-start space-x-4 p-2">
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
      <View className="mt-1 flex space-y-1 px-2">
        <Text className="font-bold">{loves} likes</Text>
        <Text>
          <Text className="font-bold">quangquang___</Text> To day is lucky day
        </Text>
        <Text className="text-xs">{dayjs(create_at).format("MMMM DD, YYYY")}</Text>
      </View>
    </View>
  )
}
const ListPostComponent: React.FC = () => {
  const post = useRecoilValue(getPostListMainState)
  return (
    <View className="flex w-full flex-col">
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

import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { AntDesign, Fontisto } from "@expo/vector-icons"
import CommentModalComponent from "./CommentComponent"
import { getOriginListPostState, showCommentPostDetailState } from "../store/atom"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { SearchViewStackParamList } from "~/src/view/type"
import PostDetailAction from "../store/hook"
import { userState } from "~/src/store/atom"

interface IItemPostComponent {
  author_id: string
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
}
const ItemPostComponent: React.FC<IItemPostComponent> = (props) => {
  const { author_id, avatar, loves, create_at, images, email } = props
  console.log(author_id)
  const navigation = useNavigation<StackNavigationProp<SearchViewStackParamList, "PostDetailStack">>()
  const setShowModal = useSetRecoilState(showCommentPostDetailState)
  const { contents } = useRecoilValue(userState)
  return (
    <View className="flex w-full border-b-[1px] border-gray-400 pb-2">
      <View className="flex flex-row items-center p-2 space-x-2">
        {avatar ? (
          <Image source={{ uri: avatar }} className="h-8 bg-gray-500 rounded-full aspect-square" />
        ) : (
          <View className="h-8 bg-gray-500 rounded-full aspect-square" />
        )}
        <View className="flex flex-row items-center justify-between grow">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("UserDetailStack", { user_id: author_id })
            }}
          >
            <Text className="font-bold">{email?.split("@")[0]}</Text>
          </TouchableOpacity>
          {contents?.user?.follows?.following_id &&
            contents.user.follows.following_id.some((item) => item == author_id) && (
              <TouchableOpacity className="px-4 py-1 bg-gray-400 rounded-lg">
                <Text className="font-medium text-white">Follow</Text>
              </TouchableOpacity>
            )}
        </View>
      </View>
      <View className="aspect-square w-full border-[1px] border-solid border-black bg-slate-200">
        <Image source={{ uri: images[0] }} className="w-full h-full" />
      </View>
      <View className="flex flex-row items-start p-2 space-x-4">
        <AntDesign name="heart" size={28} />
        <TouchableOpacity
          onPress={() => {
            setShowModal({ isOpen: true })
          }}
        >
          <Fontisto name="comment" size={26} />
        </TouchableOpacity>
      </View>
      <View className="flex px-2 mt-1 space-y-1">
        <Text className="font-bold">{loves} loves</Text>
        <Text>
          <Text className="font-bold">quangquang___</Text> To day is lucky day
        </Text>
        <Text className="text-xs">{create_at.toString()}</Text>
      </View>
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
                email={post.email}
                images={post.images}
                avatar={post.avatar}
                loves={post.loves}
                create_at={post.create_at}
                comment={post.comment}
              />
            )
          })}
      </View>
    </>
  )
}
export default ListPostComponent

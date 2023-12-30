import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil"
import { postApi } from "~/src/api/postApi"
import {
  commentFormState,
  getListCommentState,
  getOriginListPostState,
  listCommentState,
  postCommentState,
  postLoveState,
} from "./atom"
import { userState } from "~/src/store/atom"
import { userApi } from "~/src/api"
import { commentApi } from "~/src/api/commentApi"
import { Alert } from "react-native"

const useGetOriginListPost = () => {
  const setOrigin = useSetRecoilState(getOriginListPostState)
  const onGetOriginListPost = async (post_id: string) => {
    try {
      if (!post_id) return { data: { message: "Post is empty" } }
      setOrigin({ state: "loading", message: null, data: [] })
      const { data } = await postApi.postOriginPost({ post_id })
      setOrigin({ state: "hasValue", message: data.message, data: data.data })
    } catch (error: any) {
      console.log(error.data.message)
    }
  }
  return { onGetOriginListPost }
}
const usePostLove = () => {
  const [user, setUser] = useRecoilState(userState)
  const setPostLoveState = useSetRecoilState(postLoveState)
  const onPostLove = async (post_id: string) => {
    try {
      if (!user) return
      if (!user.contents) return
      if (!user.contents.user) return
      const { post_loves } = user.contents.user
      setPostLoveState({ state: "loading", message: null })
      const {
        data: { message },
      } = await userApi.postLove({ post_id })
      setPostLoveState({ state: "hasValue", message })
      let POST_LOVES: Array<string>
      if (post_loves.find((item) => item === post_id)) {
        POST_LOVES = post_loves.filter((item) => item !== post_id)
      } else {
        POST_LOVES = [...post_loves, post_id]
      }
      setUser({
        ...user,
        contents: {
          ...user.contents,
          user: {
            ...user.contents.user,
            post_loves: POST_LOVES,
          },
        },
      })
    } catch (error: any) {
      console.log(error)
      setPostLoveState({ state: "hasError", message: null })
    }
  }
  return { onPostLove }
}
const useGetListComment = () => {
  const setGetList = useSetRecoilState(getListCommentState)
  const setListComment = useSetRecoilState(listCommentState)
  const onGetListComment = async (post_id: string) => {
    try {
      setGetList({ state: "loading", message: null })
      const {
        data: { data, message },
      } = await commentApi.getListComment({ post_id })
      setListComment({
        state: "hasValue",
        data: data,
      })
      setGetList({ state: "hasValue", message: null })
    } catch (error) {
      setGetList({ state: "hasError", message: null })
    }
  }
  return { onGetListComment }
}
const usePostComment = () => {
  const comment = useRecoilValue(commentFormState)
  const user = useRecoilValue(userState)
  const setPostComment = useSetRecoilState(postCommentState)
  const setListComment = useSetRecoilState(listCommentState)
  const resetCommentForm = useResetRecoilState(commentFormState)
  const alert = (message: string) =>
    Alert.alert(message, undefined, [
      {
        text: "Oke",
      },
    ])
  const onPostComment = async (post_id: string) => {
    try {
      if (!comment) return { data: { message: "comment is empty" } }
      setPostComment("loading")
      const {
        data: { message },
      } = await commentApi.postComment({ post_id, comment })
      setPostComment("hasValue")
      resetCommentForm()
      setListComment((preState) => {
        if (preState.data.length > 0)
          return {
            ...preState,
            data: [
              {
                comment: {
                  id: Date.now().toString(),
                  context: comment || " ",
                  create_at: Date.now().toString(),
                },
                author: {
                  id: user.contents?.user.user_id || "",
                  avatar: user.contents?.user.avatar || null,
                  username: user.contents?.user.username || "",
                },
              },
              ...preState.data,
            ],
          }
        return {
          ...preState,
          data: [
            {
              comment: {
                id: Date.now().toString(),
                context: comment || " ",
                create_at: Date.now().toString(),
              },
              author: {
                id: user.contents?.user.user_id || "",
                avatar: user.contents?.user.avatar || null,
                username: user.contents?.user.username || "",
              },
            },
          ],
        }
      })
    } catch (error: any) {
      setPostComment("hasError")
      alert(error.data.message)
    }
  }
  return { onPostComment }
}
const PostDetailAction = {
  useGetOriginListPost,
  usePostLove,
  useGetListComment,
  usePostComment,
}
export default PostDetailAction

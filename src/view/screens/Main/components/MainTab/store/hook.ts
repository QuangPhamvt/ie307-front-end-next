import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { postApi } from "~/src/api/postApi"
import { getPostListMainState } from "./atom"
import { userState } from "~/src/store/atom"
import { userApi } from "~/src/api"

const useGetOriginListPost = () => {
  const setOrigin = useSetRecoilState(getPostListMainState)
  const { contents } = useRecoilValue(userState)
  const onGetOriginListPost = async () => {
    if (!contents) return
    const {
      follows: { following_id },
    } = contents.user
    if (!following_id) return
    try {
      setOrigin({ state: "loading", message: null, data: [] })
      const { data } = await postApi.postListMain({ user_id: following_id })
      setOrigin({ state: "hasValue", message: data.message, data: data.data })
    } catch (error: any) {
      console.log(error.data.message)
    }
  }
  return { onGetOriginListPost }
}
const usePostLove = () => {
  // const [user, setUser] = useRecoilState(userState)
  // const setPostLoveState = useSetRecoilState(postLoveState)
  // const onPostLove = async (post_id: string) => {
  //   try {
  //     if (!user) return
  //     if (!user.contents) return
  //     if (!user.contents.user) return
  //     const { post_loves } = user.contents.user
  //     setPostLoveState({ state: "loading", message: null })
  //     const {
  //       data: { message },
  //     } = await userApi.postLove({ post_id })
  //     setPostLoveState({ state: "hasValue", message })
  //     let POST_LOVES: Array<string>
  //     if (post_loves.find((item) => item === post_id)) {
  //       POST_LOVES = post_loves.filter((item) => item !== post_id)
  //     } else {
  //       POST_LOVES = [...post_loves, post_id]
  //     }
  //     setUser({
  //       ...user,
  //       contents: {
  //         ...user.contents,
  //         user: {
  //           ...user.contents.user,
  //           post_loves: POST_LOVES,
  //         },
  //       },
  //     })
  //   } catch (error: any) {
  //     console.log(error)
  //     setPostLoveState({ state: "hasError", message: null })
  //   }
  // }
  // return { onPostLove }
}
const MainTabAction = {
  useGetOriginListPost,
  usePostLove,
}
export default MainTabAction

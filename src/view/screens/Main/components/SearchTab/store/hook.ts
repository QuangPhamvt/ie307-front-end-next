import { useRecoilState, useSetRecoilState } from "recoil"
import { postFollowState, userDetailState } from "./atom"
import { userApi } from "~/src/api"
import { userState } from "~/src/store/atom"

const useGetUserDetail = () => {
  const setUserDetail = useSetRecoilState(userDetailState)
  const onGetUserDetail = async (user_id: string) => {
    try {
      setUserDetail({ state: "loading", message: null, contents: null })
      const { data } = await userApi.findOriginUser({ user_id })
      setUserDetail({ state: "hasValue", message: data.message, contents: data.data[0] })
    } catch (error: any) {
      setUserDetail({ state: "hasError", message: error.data.message, contents: null })
    }
  }
  return { onGetUserDetail }
}
const useFollow = () => {
  const setPostFollow = useSetRecoilState(postFollowState)
  const [{ contents }, setUser] = useRecoilState(userState)
  const onFollow = async (user_id: string) => {
    if (!contents?.user) return
    const {
      user: {
        follows: { following_id },
      },
    } = contents
    if (!following_id) return
    try {
      let unFollow: string | null = null,
        follow: string | null = null
      if (following_id.find((item) => item === user_id)) unFollow = user_id
      else follow = user_id
      console.log("unFollow: ", unFollow)
      console.log("follow: ", follow)
      setPostFollow({ state: "loading", message: null })
      await userApi.postFollow({ unFollow, follow })
      let newFollowing_id: Array<string>
      setPostFollow({ state: "hasValue", message: null })
      if (following_id.find((item) => item === user_id)) {
        newFollowing_id = following_id.filter((item) => item !== user_id)
      } else {
        newFollowing_id = [...following_id, user_id]
      }
      setUser({
        state: "hasValue",
        message: null,
        contents: {
          ...contents,
          user: {
            ...contents.user,
            follows: {
              ...contents.user.follows,
              following_id: newFollowing_id,
            },
          },
        },
      })
    } catch (error) {}
  }
  return { onFollow }
}
const SearchViewAction = {
  useGetUserDetail,
  useFollow,
}
export default SearchViewAction

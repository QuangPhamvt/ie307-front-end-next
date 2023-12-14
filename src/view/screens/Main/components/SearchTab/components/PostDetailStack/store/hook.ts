import { useSetRecoilState } from "recoil"
import { getOriginListPostState } from "./atom"
import { postApi } from "~/src/api/postApi"

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
const PostDetailAction = {
  useGetOriginListPost,
}
export default PostDetailAction

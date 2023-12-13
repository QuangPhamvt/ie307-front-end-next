import { useRecoilValue, useSetRecoilState } from "recoil"
import { postApi } from "~/src/api/postApi"
import { postUploadPostState, uploadPostState } from "../../Upload/store"
import { Alert } from "react-native"

const useUploadPost = () => {
  const alert = (message: string) =>
    Alert.alert(message, undefined, [
      {
        text: "Oke",
        style: "default",
      },
    ])
  const { title, images } = useRecoilValue(uploadPostState)
  const setState = useSetRecoilState(postUploadPostState)
  const onUploadPost = async () => {
    try {
      if (!title || !images.length) throw { data: { message: "title or images empty" } }
      setState({ state: "loading", message: null })
      const {
        data: { message },
      } = await postApi.postUpload({ title, images: images.map((item) => item.image) })
      setState({ state: "hasValue", message })
      alert(message)
    } catch (error: any) {
      setState({
        state: "hasError",
        message: error.data.message,
      })
      alert(error.data.message)
    }
  }
  return { onUploadPost }
}

const newPostAction = {
  useUploadPost,
}
export default newPostAction

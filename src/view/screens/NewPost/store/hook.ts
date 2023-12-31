import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil"
import { postApi } from "~/src/api/postApi"
import { postUploadPostState, uploadPostState } from "../../Upload/store"
import { Alert } from "react-native"
import authAction from "../../Auth/store/authAction"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootNativeStackParamList } from "~/src/view/type"
import { listPostSearchState } from "../../Main/components/SearchTab/components/SearchStack/store/atom"

const useUploadPost = () => {
  const navigate = useNavigation<StackNavigationProp<RootNativeStackParamList, "NewPostView">>()
  const alert = (message: string) =>
    Alert.alert(message, undefined, [
      {
        text: "Oke",
        style: "default",
        onPress: () => navigate.navigate("MainView", { screen: "HomeView" }),
      },
    ])
  const { title, images } = useRecoilValue(uploadPostState)
  const setState = useSetRecoilState(postUploadPostState)
  const resetListPostSearch = useResetRecoilState(listPostSearchState)
  const { onGetMe } = authAction.getMe()
  const onUploadPost = async () => {
    try {
      if (!title || !images.length) throw { data: { message: "title or images empty" } }
      setState({ state: "loading", message: null })
      const {
        data: { message },
      } = await postApi.postUpload({ title, images: images.map((item) => item.image) })
      setState({ state: "hasValue", message })
      await onGetMe()
      resetListPostSearch()
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

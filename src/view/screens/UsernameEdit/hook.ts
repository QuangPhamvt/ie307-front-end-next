import { useRecoilState, useSetRecoilState } from "recoil"
import { postUploadUsernameState, uploadUsernameState } from "./atom"
import { userApi } from "~/src/api"
import { userState } from "~/src/store/atom"
import { Alert } from "react-native"

const useUploadUsername = () => {
  const [uploadUsername, setUploadUsername] = useRecoilState(uploadUsernameState)
  const setUpload = useSetRecoilState(postUploadUsernameState)
  const [user, setUser] = useRecoilState(userState)
  const alert = (message: string) =>
    Alert.alert(message, undefined, [
      {
        text: "Oke",
      },
    ])
  const onUseUploadUser = async () => {
    try {
      if (!uploadUsername) return { data: { message: "Username is empty" } }
      if (!user.contents) return
      if (!user.contents.user) return
      setUpload({ message: null, state: "loading" })
      await userApi.postUpload({ username: uploadUsername, name: null, bio: null, gender: null })
      setUpload({ message: null, state: "hasValue" })
      setUser({
        ...user,
        contents: {
          ...user.contents,
          user: {
            ...user.contents.user,
            username: uploadUsername,
          },
        },
      })
      setUploadUsername("")
      alert("Update successfully")
    } catch (error: any) {
      alert(error.data.message)
    }
  }
  return { onUseUploadUser }
}
const UsernameEditAction = {
  useUploadUsername,
}
export default UsernameEditAction

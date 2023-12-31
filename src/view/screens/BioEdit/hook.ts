import { Alert } from "react-native"
import { useRecoilState, useSetRecoilState } from "recoil"
import { postUploadBioState, uploadBioState } from "./atom"
import { userApi } from "~/src/api"
import { userState } from "~/src/store/atom"

const useUploadBio = () => {
  const [uploadBio, setUploadBio] = useRecoilState(uploadBioState)
  const [user, setUser] = useRecoilState(userState)
  const setUpload = useSetRecoilState(postUploadBioState)
  const alert = (message: string) => Alert.alert(message, undefined)
  const onUseUploadBio = async () => {
    try {
      if (!uploadBio) throw { data: { message: "Bio is empty" } }
      if (!user.contents) return
      if (!user.contents.user) return
      setUpload({ message: null, state: "loading" })
      await userApi.postUpload({ bio: uploadBio, name: null, username: null, gender: null })
      setUpload({ message: null, state: "hasValue" })
      setUser({ ...user, contents: { ...user.contents, user: { ...user.contents.user, bio: uploadBio } } })
      setUploadBio("")
      alert("Update successfully")
    } catch (error: any) {
      alert(error.data.message)
    }
  }
  return { onUseUploadBio }
}
const BioEditAction = {
  useUploadBio,
}
export default BioEditAction

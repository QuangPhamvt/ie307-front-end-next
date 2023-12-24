import { Alert } from "react-native"
import { useSetRecoilState } from "recoil"
import { sendEmailChangePasswordState } from "./atom"
import { authApi } from "~/src/api"

const useSendEmailChangePassword = () => {
  const setEmail = useSetRecoilState(sendEmailChangePasswordState)
  const alert = (message: string) =>
    Alert.alert(message, undefined, [
      {
        text: "Oke",
      },
    ])
  const onSendEmailChangePassword = async () => {
    try {
      setEmail({ state: "loading", message: null })
      const {
        data: { message },
      } = await authApi.getSendEmailChangePassword()
      setEmail({ state: "hasValue", message })
      alert(message)
    } catch (error: any) {
      console.log(error.data)
      setEmail({ state: "hasError", message: error.data.message })
      alert(error.data.message)
    }
  }
  return { onSendEmailChangePassword }
}
const ChangePasswordAction = {
  useSendEmailChangePassword,
}
export default ChangePasswordAction

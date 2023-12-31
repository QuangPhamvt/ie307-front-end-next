import { Alert } from "react-native"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { sendChangePasswordFormState, sendChangePasswordState, sendEmailChangePasswordState } from "./atom"
import { authApi } from "~/src/api"
import authAction from "../../Auth/store/authAction"

const useSendEmailChangePassword = () => {
  const setEmail = useSetRecoilState(sendEmailChangePasswordState)
  const alert = (message: string) => Alert.alert(message, undefined)
  const onSendEmailChangePassword = async () => {
    try {
      setEmail({ state: "loading", message: null })
      const {
        data: { message },
      } = await authApi.getSendEmailChangePassword()
      setEmail({ state: "hasValue", message })
      alert(message)
    } catch (error: any) {
      setEmail({ state: "hasError", message: error.data.message })
      alert(error.data.message)
    }
  }
  return { onSendEmailChangePassword }
}
const useSendChangePassword = () => {
  const { code_digit, password } = useRecoilValue(sendChangePasswordFormState)
  const setChangePasswordState = useSetRecoilState(sendChangePasswordState)
  const { onLogOutAction } = authAction.logOutAuthAction()
  const alert = (message: string, error: boolean) =>
    Alert.alert(message, undefined, [
      {
        text: `${error ? "Oke" : "Logout"}`,
        onPress: () => {
          if (!error) onLogOutAction()
        },
      },
    ])
  const onChangePassword = async () => {
    try {
      if (!code_digit || !password) throw { data: { message: "Code digit or password is empty" } }
      setChangePasswordState({ state: "loading", message: null })
      const { data } = await authApi.postChangePassword({ code_digit, password })
      alert(data.message, false)
      setChangePasswordState({ state: "hasValue", message: null })
    } catch (error: any) {
      alert(error.data.message, true)
      setChangePasswordState({ state: "hasError", message: null })
    }
  }
  return { onChangePassword }
}
const ChangePasswordAction = {
  useSendEmailChangePassword,
  useSendChangePassword,
}
export default ChangePasswordAction

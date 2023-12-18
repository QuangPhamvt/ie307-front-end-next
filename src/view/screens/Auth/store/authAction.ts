import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil"
import { authApi } from "~/src/api"
import { logInFormState } from "../components/LogInStack/store/atom"
import { authState, userState } from "~/src/store/atom"
import { LocalStorage, checkIsMail, encodeJWT } from "~/src/utilities"
import { sentEmailVerifyState, signUpFormState } from "../components/SignUpStack/store/atom"
import { Alert } from "react-native"
import React from "react"
import { userApi } from "~/src/api/userApi"
import { listPostSearchState } from "../../Main/components/SearchTab/components/SearchStack/store/atom"

const logInAction = () => {
  const setAuthState = useSetRecoilState(authState)
  const { email, password } = useRecoilValue(logInFormState)
  const alert = (message: string) => Alert.alert(message)
  const onLogInAction = async () => {
    try {
      setAuthState({
        state: "loading",
        message: null,
        contents: null,
      })
      if (!email || !password) throw { data: { message: "Email or password is empty" } }
      if (!checkIsMail(email)) throw { data: { message: "Email not verify" } }
      console.log("signIn")
      const { data } = await authApi.postSignIn({ email, password })
      const { access_token, refresh_token } = data.data[0]
      const { id, username, avatar } = encodeJWT(access_token)
      setAuthState({
        state: "hasValue",
        message: data.message,
        contents: { id, username, avatar },
      })
      await LocalStorage.setAccessTokenSecureStore(access_token)
      await LocalStorage.setRefreshTokenSecureStore(refresh_token)
    } catch (error: any) {
      const { message } = error.data
      setAuthState({ state: "hasError", message, contents: null })
      alert(message)
    }
  }
  return { onLogInAction }
}
const emailAuthAction = () => {
  const { email } = useRecoilValue(signUpFormState)
  const setSentEmailVerify = useSetRecoilState(sentEmailVerifyState)
  const alert = (message: string) => Alert.alert(message)
  const onSentVerifyEmail = async () => {
    try {
      if (!email) throw { data: { message: "Not have email" } }
      if (!checkIsMail(email)) throw { data: { message: "Email isn't verify" } }
      setSentEmailVerify({ state: "loading", message: null })
      const { data } = await authApi.postEmailAuth({ email })
      setSentEmailVerify({ state: "hasValue", message: data.message })
      alert(data.message)
    } catch (error: any) {
      console.log(error.data)
      setSentEmailVerify({ state: "hasError", message: error.data.message })
      alert(error.data.message)
    }
  }
  return { onSentVerifyEmail }
}
const signUpAuthAction = () => {
  const { email, password, code_digit } = useRecoilValue(signUpFormState)
  const setAuthState = useSetRecoilState(authState)
  const alert = (message: string) => Alert.alert(message)
  const onSignUpAction = async () => {
    try {
      if (!email) throw { data: { message: "Email is empty" } }
      if (!password) throw { data: { message: "Password is empty" } }
      if (!code_digit) throw { data: { message: "Code digit is empty" } }
      setAuthState({ state: "loading", message: null, contents: null })
      const { data } = await authApi.postSignUp({ email, password, code_digit })
      const { access_token, refresh_token } = data.data[0]
      const { id, username, avatar } = encodeJWT(access_token)
      setAuthState({
        state: "hasValue",
        message: data.message,
        contents: { id, username, avatar },
      })
      await LocalStorage.setAccessTokenSecureStore(access_token)
      await LocalStorage.setRefreshTokenSecureStore(refresh_token)
      alert(data.message)
    } catch (error: any) {
      const { message } = error.data
      console.error(message)
      setAuthState({ state: "hasError", message, contents: null })
      alert(message)
    }
  }
  return { onSignUpAction }
}
const logOutAuthAction = () => {
  const resetAuth = useResetRecoilState(authState)
  const resetListPost = useResetRecoilState(listPostSearchState)
  const onLogOutAction = async () => {
    try {
      await LocalStorage.removeAccessTokenSecureStore()
      await LocalStorage.removeRefreshTokenSecureStore()
      resetListPost()
      resetAuth()
    } catch (error) {
      console.error(error)
    }
  }
  return { onLogOutAction }
}
const getProfileLocalAuthAction = () => {
  const setAuthState = useSetRecoilState(authState)
  React.useEffect(() => {
    handleGetInform()
  }, [])
  const handleGetInform = async () => {
    const data = await LocalStorage.getAccessTokenSecureStore()
    if (!data) return
    const { id, username, avatar } = encodeJWT(data)
    setAuthState({ state: "hasValue", message: null, contents: { id, username, avatar } })
  }
}
const getMe = () => {
  const setUserState = useSetRecoilState(userState)
  const onGetMe = async () => {
    try {
      setUserState({ state: "loading", message: null, contents: null })
      const { data } = await userApi.getMe()
      if (data.data[0].user.follows && data.data[0].user.follows.following_id) {
        setUserState({
          state: "hasValue",
          message: data.message,
          contents: {
            ...data.data[0],
            user: {
              ...data.data[0].user,
              follows: {
                ...data.data[0].user.follows,
                following_id: JSON.parse(data.data[0].user.follows.following_id),
              },
            },
          },
        })
      } else {
        setUserState({
          state: "hasValue",
          message: data.message,
          contents: {
            ...data.data[0],
            user: {
              ...data.data[0].user,
              follows: {
                ...data.data[0].user.follows,
                following_id: [],
              },
            },
          },
        })
      }
    } catch (error: any) {
      console.error(error)
      setUserState({ state: "hasError", message: null, contents: null })
    }
  }
  return { onGetMe }
}

const authAction = {
  logInAction,
  emailAuthAction,
  signUpAuthAction,
  logOutAuthAction,
  getProfileLocalAuthAction,
  getMe,
}
export default authAction

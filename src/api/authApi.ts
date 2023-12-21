import {
  TPostEmailAuthPayloadApi,
  TPostRefreshPayloadApi,
  TPostSignInPayloadApi,
  TPostSignUpPayloadApi,
  TPostUploadAvatarPayloadApi,
} from "~/type"
import { axiosClient } from "./axiosClient"
import { PATH } from "./PATH"

export const authApi = {
  getProfile: (): Promise<any> => {
    const url = PATH.USER_PROFILE
    return axiosClient.get(url)
  },
  postSignIn: (payload: TPostSignInPayloadApi): Promise<any> => {
    const url = PATH.SIGN_IN
    return axiosClient.post(url, payload)
  },
  postSignUp: (payload: TPostSignUpPayloadApi): Promise<any> => {
    const url = PATH.SIGN_UP
    return axiosClient.post(url, payload)
  },
  postRefresh: (payload: TPostRefreshPayloadApi): Promise<any> => {
    const url = PATH.USER
    return axiosClient.post(url, payload)
  },
  postEmailAuth: (payload: TPostEmailAuthPayloadApi): Promise<any> => {
    const url = PATH.EMAIL_AUTH
    return axiosClient.post(url, payload)
  },
  postUploadAvatar: (payload: TPostUploadAvatarPayloadApi): Promise<any> => {
    const { avatar } = payload
    const url = PATH.USER_UPLOAD
    return axiosClient.post(url, { avatar })
  },
}

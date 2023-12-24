import {
  TPostEmailAuthPayloadApi,
  TPostRefreshPayloadApi,
  TPostSignInPayloadApi,
  TPostSignUpPayloadApi,
  TPostUploadAvatarPayloadApi,
} from "~/type"
import { axiosClient } from "./axiosClient"
import { PATH } from "./PATH"
import { AxiosResponse } from "axios"

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
  getSendEmailChangePassword: (): Promise<AxiosResponse<{ message: string; data: Array<string> }>> => {
    const url = PATH.SEND_EMAIL_CHANGE_PASSOWRD
    return axiosClient.get(url)
  },
  postChangePassword: <T extends { code_digit: string; password: string }>(
    payload: T,
  ): Promise<AxiosResponse<{ message: string; data: Array<string> }>> => {
    const url = PATH.CHANGE_PASSWORD
    return axiosClient.post(url, payload)
  },
}

import { axiosClient } from "./axiosClient"
import { PATH } from "./PATH"

export const authApi = {
  getProfile: (): Promise<any> => {
    const url = PATH.USER_PROFILE
    return axiosClient.get(url)
  },
  postSignIn: <T extends { email: string; password: string }>(payload: T): Promise<any> => {
    const url = PATH.SIGN_IN
    return axiosClient.post(url, payload)
  },
  postSignUp: <T extends { email: string; password: string; code_digit: string }>(payload: T): Promise<any> => {
    const url = PATH.SIGN_UP
    return axiosClient.post(url, payload)
  },
  postRefresh: <T extends { refresh: string }>(payload: T) => {
    const url = PATH.USER
    return axiosClient.post(url, payload)
  },
  postEmailAuth: <T extends { email: string }>(payload: T): Promise<any> => {
    const url = PATH.EMAIL_AUTH
    return axiosClient.post(url, payload)
  },
  postUploadAvatar: <T extends { avatar: string }>(payload: T): Promise<any> => {
    const { avatar } = payload
    const url = PATH.USER_UPLOAD
    return axiosClient.post(url, { avatar })
  },
}

import { axiosClient } from "./axiosClient"
import { PATH } from "./PATH"
import { TFindOriginUserPayloadApi, TFindOriginUserResApi, TGetMeResApi } from "../utilities/type"
import { AxiosError, AxiosResponse } from "axios"

export const userApi = {
  getMe: (): Promise<TGetMeResApi> => {
    const url = PATH.GET_ME
    return axiosClient.get(url)
  },
  findOriginUser: (payload: TFindOriginUserPayloadApi): Promise<TFindOriginUserResApi> => {
    const url = PATH.ORIGIN_USER
    return axiosClient.post(url, payload)
  },
  postUploadAvatar: <T extends { avatar: string }>(
    payload: T,
  ): Promise<AxiosResponse<{ message: string; data: Array<{}> }>> => {
    const url = PATH.UPLOAD_AVATAR
    return axiosClient.post(url, payload)
  },
  postLove: <T extends { post_id: string }>(
    payload: T,
  ): Promise<AxiosResponse<{ message: string; data: Array<{}> }>> => {
    const url = PATH.POST_LOVES
    return axiosClient.post(url, payload)
  },
  postFollow: <T extends { unFollow: string | null; follow: string | null }>(
    payload: T,
  ): Promise<
    AxiosResponse<{
      message: string
      data: Array<{}>
    }>
  > => {
    const url = PATH.POST_FOLLOW
    return axiosClient.post(url, payload)
  },
  postUpload: <T extends { name: string | null; username: string | null; bio: string | null; gender: string | null }>(
    payload: T,
  ): Promise<AxiosResponse<{ message: string; data: Array<{}> }>> => {
    const url = PATH.USER_UPLOAD
    return axiosClient.post(url, payload)
  },
  postUploadStory: <T extends { image: string }>(
    payload: T,
  ): Promise<AxiosResponse<{ message: string; data: Array<{}> }>> => {
    const url = PATH.UPLOAD_STORY
    return axiosClient.post(url, payload)
  },
}

import { AxiosResponse } from "axios"
import { PATH } from "./PATH"
import { axiosClient } from "./axiosClient"

export const postApi = {
  postUpload: <T extends { title: string; images: string[] }>(
    payload: T,
  ): Promise<AxiosResponse<{ message: string; data: [] }>> => {
    const url = PATH.POST_UPLOAD
    return axiosClient.post(url, payload)
  },
  postPostList: <T extends { limit: string; offset: string }>(
    payload: T,
  ): Promise<AxiosResponse<{ message: string; data: { id: string; images: Array<string> }[] }>> => {
    const url = PATH.POST_LIST
    return axiosClient.post(url, payload)
  },
}

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
  postOriginPost: <T extends { post_id: string }>(
    payload: T,
  ): Promise<
    AxiosResponse<{
      message: string
      data: Array<{
        id: string
        title: string
        images: Array<string>
        loves: number
        comments: number
        create_at: Date
        author_id: string
        avatar: string | null
        email: string
        comment: {
          author_id: string
          avatar: string | null
          email: string
          context: string
          loves: 0
          create_at: Date
        } | null
      }>
    }>
  > => {
    const url = PATH.POST_ORIGIN
    return axiosClient.post(url, payload)
  },
}

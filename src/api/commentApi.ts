import { AxiosResponse } from "axios"
import { PATH } from "./PATH"
import { axiosClient } from "./axiosClient"

export const commentApi = {
  getListComment: <T extends { post_id: string }>(
    payload: T,
  ): Promise<
    AxiosResponse<{
      message: string
      data: Array<{
        comment: {
          id: string
          context: string
          create_at: string
        }
        author: {
          id: string
          username: string
          avatar: string | null
        }
      }>
    }>
  > => {
    const url = PATH.GET_LIST_COMMENT
    return axiosClient.post(url, payload)
  },
  postComment: <T extends { post_id: string; comment: string }>(
    payload: T,
  ): Promise<
    AxiosResponse<{
      message: string
      data: Array<{}>
    }>
  > => {
    const url = PATH.POST_COMMENT
    return axiosClient.post(url, payload)
  },
}

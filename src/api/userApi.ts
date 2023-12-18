import { AxiosResponse } from "axios"
import { axiosClient } from "./axiosClient"
import { PATH } from "./PATH"

export const userApi = {
  getMe: (): Promise<
    AxiosResponse<{
      message: string
      data: [
        {
          user: {
            user_id: string
            avatar: string
            email: string
            username: string
            bio: string | null
            follows: {
              follows: number
              following: number
              following_id: string | null
            }
          }
          posts: [
            {
              post_id: string
              images: Array<string>
              create_at: string
            },
          ]
        },
      ]
    }>
  > => {
    const url = PATH.GET_ME
    return axiosClient.get(url)
  },
  findOriginUser: <T extends { user_id: string }>(
    payload: T,
  ): Promise<
    AxiosResponse<{
      message: string
      data: [
        {
          user: {
            user_id: string
            avatar: string
            email: string
            username: string
            bio: string | null
            follows: number
            following: number
          }
          posts: [
            {
              post_id: string
              images: Array<string>
              create_at: string
            },
          ]
        },
      ]
    }>
  > => {
    const url = PATH.ORIGIN_USER
    return axiosClient.post(url, payload)
  },
}

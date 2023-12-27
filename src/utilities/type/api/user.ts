import { AxiosResponse } from "axios"
type TFindOriginUserPayloadApi = {
  user_id: string
}
type TGetMeResApi = AxiosResponse<{
  message: string
  data: [
    {
      user: {
        user_id: string
        avatar: string
        email: string
        username: string
        bio: string | null
        post_loves: Array<string>
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
      stories: [
        {
          id: string
          image: string
          create_at: string
        },
      ]
    },
  ]
}>
type TFindOriginUserResApi = AxiosResponse<{
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
export { TFindOriginUserPayloadApi, TFindOriginUserResApi, TGetMeResApi }

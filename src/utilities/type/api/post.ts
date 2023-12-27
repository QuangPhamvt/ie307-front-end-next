import { AxiosResponse } from "axios"

type TPostUploadPayloadApi = {
  title: string
  images: string[]
}
type TPostListPayloadApi = {
  limit: string
  offset: string
}
type TPostOriginPostPayloadApi = {
  post_id: string
}
type TPostUploadResApi = AxiosResponse<{ message: string; data: [] }>
type TPostListResApi = AxiosResponse<{ message: string; data: { id: string; images: Array<string> }[] }>
type TPostOriginPostResApi = AxiosResponse<{
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
    stories: [
      {
        id: string
        image: string
        create_at: string
      },
    ]
  }>
}>
export {
  TPostUploadPayloadApi,
  TPostUploadResApi,
  TPostListPayloadApi,
  TPostListResApi,
  TPostOriginPostPayloadApi,
  TPostOriginPostResApi,
}

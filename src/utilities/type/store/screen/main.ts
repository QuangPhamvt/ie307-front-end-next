import { TState } from "~/src/utilities/constant"

type TShowCommentModalState = {
  isOpen: boolean
}
type TShowModalSettingState = {
  isOpen: boolean
}
type TUserDetailState = {
  state: TState
  message: string | null
  contents: {
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
  } | null
}
type TToggleSearchInputState = {
  isFocus: boolean
}
type TShowCommentPostDetailState = {
  isOpen: boolean
}
type TGetOriginListPostState = {
  state: TState
  message: string | null
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
}
type TGetPostListMainState = {
  state: TState
  message: string | null
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
}
type TListPostSearchState = {
  state: TState
  message: string | null
  data: Array<{
    amountPosts: number
    direction: string
    data: Array<{
      id: string
      images: Array<string>
    }>
  }>
  offset: string
  limit: string
}
export {
  TShowCommentModalState,
  TShowModalSettingState,
  TUserDetailState,
  TToggleSearchInputState,
  TShowCommentPostDetailState,
  TGetOriginListPostState,
  TGetPostListMainState,
  TListPostSearchState,
}

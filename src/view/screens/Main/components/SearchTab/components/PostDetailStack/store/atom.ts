import { atom } from "recoil"
import { TState } from "~/src/utilities"
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
  }>
}
export const showCommentPostDetailState = atom<TShowCommentPostDetailState>({
  key: "showCommentPostDetailStateAtom",
  default: {
    isOpen: false,
  },
})
export const getOriginListPostState = atom<TGetOriginListPostState>({
  key: "getOriginListPostStateAtom",
  default: {
    state: "idle",
    message: null,
    data: [],
  },
})

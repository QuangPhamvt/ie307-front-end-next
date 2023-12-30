import { atom } from "recoil"
import { TState } from "~/src/utilities"
import { TGetOriginListPostState, TShowCommentPostDetailState } from "~/src/utilities/type"
export const showCommentPostDetailState = atom<TShowCommentPostDetailState>({
  key: "showCommentPostDetailStateAtom",
  default: {
    isOpen: false,
  },
})
export const postLoveState = atom<{ state: TState; message: string | null }>({
  key: "postLoveStateAtom",
  default: {
    state: "idle",
    message: null,
  },
})
export const listCommentState = atom<{
  state: TState
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
}>({
  key: "listCommentStateAtom",
  default: {
    state: "idle",
    data: [],
  },
})
export const postIdToGetListCommentState = atom<string | null>({
  key: "postIdToGetListCommentStateAtom",
  default: null,
})
export const getListCommentState = atom<{ state: TState; message: string | null }>({
  key: "getListCommentStateAtom",
  default: {
    state: "idle",
    message: null,
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
export const commentFormState = atom<string | null>({
  key: "commentFormStateAtom",
  default: null,
})
export const postCommentState = atom<TState>({
  key: "postCommentStateAtom",
})

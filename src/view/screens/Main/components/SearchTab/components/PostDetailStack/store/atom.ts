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
export const getOriginListPostState = atom<TGetOriginListPostState>({
  key: "getOriginListPostStateAtom",
  default: {
    state: "idle",
    message: null,
    data: [],
  },
})

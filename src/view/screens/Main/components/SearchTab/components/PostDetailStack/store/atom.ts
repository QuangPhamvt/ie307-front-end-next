import { atom } from "recoil"
import { TGetOriginListPostState, TShowCommentPostDetailState } from "~/src/utilities/type"
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

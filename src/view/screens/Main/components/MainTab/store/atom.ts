import { atom } from "recoil"
import { TState } from "~/src/utilities"
import { TGetPostListMainState, TShowCommentModalState, TUserDetailState } from "~/src/utilities/type"

export const showCommentModalState = atom<TShowCommentModalState>({
  key: "showCommentModalStateAtom",
  default: {
    isOpen: false,
  },
})

export const postListMainLoveState = atom<{ state: TState; message: string | null }>({
  key: "postListMainLoveStateAtom",
  default: {
    state: "idle",
    message: null,
  },
})
export const getPostListMainState = atom<TGetPostListMainState>({
  key: "getPostListMainStateAtom",
  default: {
    state: "idle",
    message: null,
    data: [],
  },
})

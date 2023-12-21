import { atom } from "recoil"
import { TShowCommentModalState } from "~/src/utilities/type"

export const showCommentModalState = atom<TShowCommentModalState>({
  key: "showCommentModalStateAtom",
  default: {
    isOpen: false,
  },
})

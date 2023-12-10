import { atom } from "recoil"

type TShowCommentModalState = {
  isOpen: boolean
}
export const showCommentModalState = atom<TShowCommentModalState>({
  key: "showCommentModalStateAtom",
  default: {
    isOpen: false,
  },
})

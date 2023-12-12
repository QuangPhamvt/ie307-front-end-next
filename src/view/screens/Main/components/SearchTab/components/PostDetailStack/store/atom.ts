import { atom } from "recoil"
type TShowCommentPostDetailState = {
  isOpen: boolean
}
export const showCommentPostDetailState = atom<TShowCommentPostDetailState>({
  key: "showCommentPostDetailStateAtom",
  default: {
    isOpen: false,
  },
})

import { atom } from "recoil"

export const modalCaptionState = atom<boolean>({
  key: "modalCaptionStateAtom",
  default: false,
})

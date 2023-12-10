import { atom } from "recoil"

type TToggleSearchInputState = {
  isFocus: boolean
}
export const toggleSearchInputState = atom<TToggleSearchInputState>({
  key: "toggleSearchInputStateAtom",
  default: {
    isFocus: false,
  },
})

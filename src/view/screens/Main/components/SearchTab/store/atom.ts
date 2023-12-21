import { atom } from "recoil"
import { TToggleSearchInputState, TUserDetailState } from "~/src/utilities/type"

export const toggleSearchInputState = atom<TToggleSearchInputState>({
  key: "toggleSearchInputStateAtom",
  default: {
    isFocus: false,
  },
})
export const userDetailState = atom<TUserDetailState>({
  key: "userDetailStateAtom",
  default: {
    state: "idle",
    message: null,
    contents: null,
  },
})

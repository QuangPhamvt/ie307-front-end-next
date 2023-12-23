import { atom } from "recoil"
import { TState } from "~/src/utilities"
import { TToggleSearchInputState, TUserDetailState } from "~/src/utilities/type"

export const toggleSearchInputState = atom<TToggleSearchInputState>({
  key: "toggleSearchInputStateAtom",
  default: {
    isFocus: false,
  },
})
export const postFollowState = atom<{ state: TState; message: string | null }>({
  key: "postFollowStateAtom",
  default: {
    state: "idle",
    message: null,
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

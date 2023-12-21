import { atom } from "recoil"
import { TAuthState, TUserState } from "~/type"

export const authState = atom<TAuthState>({
  key: "authStateAtom",
  default: {
    state: "idle",
    message: null,
    contents: null,
  },
})
export const userState = atom<TUserState>({
  key: "userStateAtom",
  default: {
    state: "idle",
    message: null,
    contents: null,
  },
})

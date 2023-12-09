import { atom } from "recoil"
import { TState } from "../utilities"

type TAuthState = {
  state: TState
  message: string | null
  contents: {
    id: string
    username: string
    avatar: string
  } | null
}
export const authState = atom<TAuthState>({
  key: "authStateAtom",
  default: {
    state: "idle",
    message: null,
    contents: null,
  },
})

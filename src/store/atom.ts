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
type TUserState = {
  state: TState
  message: string | null
  contents: {
    user: {
      user_id: string
      avatar: string
      email: string
      username: string
      bio: string | null
      follows: {
        follows: number
        following: number
        following_id: Array<string> | null
      }
    }
    posts: [
      {
        post_id: string
        images: Array<string>
        create_at: string
      },
    ]
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
export const userState = atom<TUserState>({
  key: "userStateAtom",
  default: {
    state: "idle",
    message: null,
    contents: null,
  },
})

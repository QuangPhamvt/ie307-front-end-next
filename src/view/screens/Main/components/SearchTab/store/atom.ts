import { atom } from "recoil"
import { TState } from "~/src/utilities"

type TUserDetailState = {
  state: TState
  message: string | null
  contents: {
    user: {
      user_id: string
      avatar: string
      email: string
      username: string
      bio: string | null
      follows: number
      following: number
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
type TToggleSearchInputState = {
  isFocus: boolean
}
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

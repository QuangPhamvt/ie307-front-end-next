import { TState } from "../../constant"
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
      post_loves: Array<string>
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
export { TAuthState, TUserState }

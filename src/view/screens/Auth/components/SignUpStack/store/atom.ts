import { atom } from "recoil"
import { TState } from "~/src/utilities"

type TSignUpFormState = {
  email: string | null
  code_digit: string | null
  password: string | null
}
type TSentEmailVerifyState = {
  state: TState
  message: string | null
}
export const signUpFormState = atom<TSignUpFormState>({
  key: "signUpFormStateAtom",
  default: {
    email: null,
    code_digit: null,
    password: null,
  },
})
export const sentEmailVerifyState = atom<TSentEmailVerifyState>({
  key: "sentEmailVerifyState",
  default: {
    state: "idle",
    message: null,
  },
})

import { atom } from "recoil"

type TLogInFormState = {
  email: string | null
  password: string | null
}
export const logInFormState = atom<TLogInFormState>({
  key: "logInFormState",
  default: {
    email: null,
    password: null,
  },
})

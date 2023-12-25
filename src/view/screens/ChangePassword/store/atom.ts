import { atom } from "recoil"
import { TState } from "~/src/utilities"

export const sendChangePasswordFormState = atom<{ code_digit: string; password: string }>({
  key: "sendChangePasswordFormStateAtom",
  default: {
    code_digit: "",
    password: "",
  },
})
export const sendEmailChangePasswordState = atom<{ state: TState; message: string | null }>({
  key: "sendEmailChangePasswordStateAtom",
  default: {
    state: "idle",
    message: null,
  },
})
export const sendChangePasswordState = atom<{ state: TState; message: string | null }>({
  key: "sendChangePasswordStateAtom",
  default: {
    state: "idle",
    message: null,
  },
})

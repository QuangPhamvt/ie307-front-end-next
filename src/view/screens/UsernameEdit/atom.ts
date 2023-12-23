import { atom } from "recoil"
import { TState } from "~/src/utilities"
export const uploadUsernameState = atom<string>({
  key: "uploadUsernameStateAtom",
  default: "",
})
export const postUploadUsernameState = atom<{ message: string | null; state: TState }>({
  key: "postUploadUserStateAtom",
  default: {
    state: "idle",
    message: null,
  },
})

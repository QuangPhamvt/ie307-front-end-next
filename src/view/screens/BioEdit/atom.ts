import { atom } from "recoil"
import { TState } from "~/src/utilities"
export const uploadBioState = atom<string>({
  key: "uploadBioStateAtom",
  default: "",
})
export const postUploadBioState = atom<{ message: string | null; state: TState }>({
  key: "postUploadBioStateAtom",
  default: {
    state: "idle",
    message: null,
  },
})

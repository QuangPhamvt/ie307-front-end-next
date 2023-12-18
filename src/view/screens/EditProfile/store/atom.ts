import { atom } from "recoil"
import { TState } from "~/src/utilities"

type TImageUploadPayloadState = {
  state: TState
  contents: {
    uri: string | null
  }
}
type TShowModalEditAvatarState = {
  isOpen: boolean
}
type TUploadAvatarState = {
  state: TState
  message: string | null
}
export const showModalEditAvatarState = atom<TShowModalEditAvatarState>({
  key: "showModalEditAvatarStateAtom",
  default: {
    isOpen: false,
  },
})
export const imageUploadPayloadState = atom<TImageUploadPayloadState>({
  key: "imageUploadPayloadStateAtom",
  default: {
    state: "idle",
    contents: {
      uri: null,
    },
  },
})
export const modalUploadAvatarState = atom<boolean>({
  key: "modalUploadAvatarStateAtom",
  default: false,
})
export const uploadAvatarState = atom<TUploadAvatarState>({
  key: "uploadAvatarStateAtom",
  default: {
    state: "idle",
    message: null,
  },
})

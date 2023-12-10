import { atom } from "recoil"

type TShowModalEditAvatarState = {
  isOpen: boolean
}
export const showModalEditAvatarState = atom<TShowModalEditAvatarState>({
  key: "showModalEditAvatarStateAtom",
  default: {
    isOpen: false,
  },
})

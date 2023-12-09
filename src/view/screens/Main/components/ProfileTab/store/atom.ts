import { atom } from "recoil"

type TShowModalSettingState = {
  isOpen: boolean
}
export const showModalSettingState = atom<TShowModalSettingState>({
  key: "showModalSettingStateAtom",
  default: {
    isOpen: false,
  },
})

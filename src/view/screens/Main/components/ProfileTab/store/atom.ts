import { atom } from "recoil"
import { TShowModalSettingState } from "~/src/utilities/type"

export const showModalSettingState = atom<TShowModalSettingState>({
  key: "showModalSettingStateAtom",
  default: {
    isOpen: false,
  },
})

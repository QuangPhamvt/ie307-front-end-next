import { atom } from "recoil"
import { TListPostSearchState } from "~/src/utilities/type"

export const listPostSearchState = atom<TListPostSearchState>({
  key: "listPostSearchStateAtom",
  default: {
    state: "idle",
    message: null,
    offset: "0",
    limit: "3",
    data: [],
  },
})
export const openSearchState = atom<boolean>({
  key: "openSearchStateAtom",
  default: false,
})

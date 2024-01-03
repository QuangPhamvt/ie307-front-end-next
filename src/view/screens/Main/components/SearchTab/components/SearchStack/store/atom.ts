import { atom } from "recoil"
import { TState } from "~/src/utilities"
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

export const inputSearchState = atom<string>({
  key: "inputSearchStateAtom",
  default: "",
})
export const getUserInfoBySearchState = atom<{
  state: TState
  data: Array<{
    id: string
    avatar: string | null
    username: string
    bio: string
  }>
}>({
  key: "getUserInfoBySearchStateAtom",
  default: {
    state: "idle",
    data: [],
  },
})

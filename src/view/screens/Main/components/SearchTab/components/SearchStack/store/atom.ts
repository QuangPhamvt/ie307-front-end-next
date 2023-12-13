import { atom } from "recoil"
import { TState } from "~/src/utilities"

type TListPostSearchState = {
  state: TState
  message: string | null
  data: { id: string; images: Array<string> }[]
  offset: string
  limit: string
}
export const listPostSearchState = atom<TListPostSearchState>({
  key: "listPostSearchStateAtom",
  default: {
    state: "idle",
    message: null,
    offset: "0",
    limit: "5",
    data: [],
  },
})

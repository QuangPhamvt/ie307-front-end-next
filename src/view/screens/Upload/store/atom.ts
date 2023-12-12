import { atom } from "recoil"
import { TState } from "~/src/utilities"
type TOriginImageState = {
  data: {
    id: string
    uri: string
  } | null
}
type TListImageLibraryState = {
  state: TState
  data:
    | {
        id: string
        uri: string
      }[]
    | null
}
export const originImageState = atom<TOriginImageState>({
  key: "originImageStateAtom",
  default: {
    data: null,
  },
})
export const listImageLibraryState = atom<TListImageLibraryState>({
  key: "listImageLibraryStateAtom",
  default: {
    state: "idle",
    data: null,
  },
})

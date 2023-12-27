import { atom } from "recoil"
import { TState } from "~/src/utilities"
type TOriginImageStoryState = {
  data: {
    id: string
    uri: string
  } | null
}
type TListImageLibraryStoryState = {
  state: TState
  data:
    | {
        id: string
        uri: string
      }[]
    | null
}
type TUploadStoryState = {
  state: TState
  message: string | null
}
export const originImageStoryState = atom<TOriginImageStoryState>({
  key: "originImageStoryStateAtom",
  default: {
    data: null,
  },
})
export const uploadStoryState = atom<TUploadStoryState>({
  key: "uploadStoryStateAtom",
  default: {
    state: "idle",
    message: null,
  },
})
export const listImageLibraryStoryState = atom<TListImageLibraryStoryState>({
  key: "listImageLibraryStoryStateAtom",
  default: {
    state: "idle",
    data: null,
  },
})

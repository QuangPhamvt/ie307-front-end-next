import { atom } from "recoil"
import { TState } from "~/src/utilities"
type TMultiImagesState = boolean
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
type TUploadPostState = {
  state: TState
  title: string | null
  images: { id: string; image: string }[]
}
type TPostUploadPostState = {
  state: TState
  message: string | null
}
export const originImageState = atom<TOriginImageState>({
  key: "originImageStateAtom",
  default: {
    data: null,
  },
})
export const multiImageState = atom<TMultiImagesState>({
  key: "multiImageStateAtom",
  default: true,
})
export const listImageLibraryState = atom<TListImageLibraryState>({
  key: "listImageLibraryStateAtom",
  default: {
    state: "idle",
    data: null,
  },
})
export const uploadPostState = atom<TUploadPostState>({
  key: "uploadPostStateAtom",
  default: {
    state: "idle",
    title: null,
    images: [],
  },
})
export const postUploadPostState = atom<TPostUploadPostState>({
  key: "postUploadPostStateAtom",
  default: {
    state: "idle",
    message: null,
  },
})

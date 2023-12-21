import { atom } from "recoil"
import {
  TListImageLibraryState,
  TMultiImagesState,
  TOriginImageState,
  TPostUploadPostState,
  TUploadPostState,
} from "~/src/utilities/type"
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

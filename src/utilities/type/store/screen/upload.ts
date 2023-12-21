import { TState } from "~/src/utilities/constant"

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
export { TMultiImagesState, TOriginImageState, TListImageLibraryState, TUploadPostState, TPostUploadPostState }

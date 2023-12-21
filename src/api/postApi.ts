import { PATH } from "./PATH"
import { axiosClient } from "./axiosClient"
import {
  TPostListPayloadApi,
  TPostListResApi,
  TPostOriginPostPayloadApi,
  TPostOriginPostResApi,
  TPostUploadPayloadApi,
  TPostUploadResApi,
} from "~/type"

export const postApi = {
  postUpload: (payload: TPostUploadPayloadApi): Promise<TPostUploadResApi> => {
    const url = PATH.POST_UPLOAD
    return axiosClient.post(url, payload)
  },
  postPostList: (payload: TPostListPayloadApi): Promise<TPostListResApi> => {
    const url = PATH.POST_LIST
    return axiosClient.post(url, payload)
  },
  postOriginPost: (payload: TPostOriginPostPayloadApi): Promise<TPostOriginPostResApi> => {
    const url = PATH.POST_ORIGIN
    return axiosClient.post(url, payload)
  },
}

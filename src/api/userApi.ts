import { axiosClient } from "./axiosClient"
import { PATH } from "./PATH"
import { TFindOriginUserPayloadApi, TFindOriginUserResApi, TGetMeResApi } from "../utilities/type"

export const userApi = {
  getMe: (): Promise<TGetMeResApi> => {
    const url = PATH.GET_ME
    return axiosClient.get(url)
  },
  findOriginUser: (payload: TFindOriginUserPayloadApi): Promise<TFindOriginUserResApi> => {
    const url = PATH.ORIGIN_USER
    return axiosClient.post(url, payload)
  },
}

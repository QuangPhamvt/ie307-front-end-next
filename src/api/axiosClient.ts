import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios"
import * as SecureToken from "expo-secure-store"
import { Buffer } from "buffer"
import { LocalStorage } from "../utilities"

// Boot Instance
const axiosClient = axios.create({
  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: "https://ecs.customafk.com/",
})

// Setup Interceptors
// Interceptor Request
const onRequest = async (config: any) => {
  // const resetAuth = useResetRecoilState(authState)
  try {
    console.log("Axios Request: ", config.url)
    const accessToken = await SecureToken.getItemAsync("ie307_access_token")
    if (
      accessToken &&
      config.url !== "user/signIn" &&
      config.url !== "user/signUp" &&
      config.url !== "user/email-auth"
    ) {
      config.headers["Authorization"] = `Bearer ${accessToken}`
      const parts = accessToken
        .split(".")
        .map((part) => Buffer.from(part.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString())
      const { exp } = JSON.parse(parts[1])

      if (exp && exp < (Date.now() + 1) / 1000) {
        const refreshToken = await SecureToken.getItemAsync("ie307_refresh_token")
        console.log(refreshToken)
        if (refreshToken) {
          const { exp: Exp_rt } = JSON.parse(
            refreshToken
              .split(".")
              .map((part) => Buffer.from(part.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString())[1],
          )
          if (Exp_rt && Exp_rt < (Date.now() + 1) / 1000) {
            await LocalStorage.removeAccessTokenSecureStore()
            await LocalStorage.removeRefreshTokenSecureStore()
          }
        } else {
          config.headers["Authorization"] = await getRefreshToken(accessToken)
        }
      }
    }
    return config
  } catch (error: any) {
    console.log(error.response.status)
  }
}
const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.log(error.request?.status)

  return Promise.reject(error.request)
}
const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response
}
const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  // console.log(error.response?.headers)
  console.error(error.response?.status)
  return Promise.reject(error.response)
}
const setupInterceptors = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError)
  axiosInstance.interceptors.response.use(onResponse, onResponseError)
  return axiosInstance
}

setupInterceptors(axiosClient)
export { axiosClient }

const getRefreshToken = async (accessToken: string) => {
  let access_token
  const refreshToken = await SecureToken.getItemAsync("ie307_refresh_token")
  const response = await axios.post(`https://ecs.customafk.com/user/refresh`, { refresh: refreshToken })
  const { data } = response
  await SecureToken.setItemAsync("ie307_access_token", data.data[0].access_token)
  await SecureToken.setItemAsync("ie307_refresh_token", data.data[0].refresh_token)
  access_token = data.data[0].access_token
  return `Bearer ${accessToken}`
}

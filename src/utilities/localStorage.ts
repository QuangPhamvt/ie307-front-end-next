import * as SecureStore from "expo-secure-store"

const setAccessTokenSecureStore = async (token: string) => {
  await SecureStore.setItemAsync("ie307_access_token", token)
}
const setRefreshTokenSecureStore = async (token: string) => {
  await SecureStore.setItemAsync("ie307_refresh_token", token)
}
const getAccessTokenSecureStore = async () => {
  return await SecureStore.getItemAsync("ie307_access_token")
}
const getRefreshTokenSecureStore = async () => {
  return await SecureStore.getItemAsync("ie307_refresh_token")
}
const removeAccessTokenSecureStore = async () => {
  return await SecureStore.deleteItemAsync("ie307_access_token")
}
const removeRefreshTokenSecureStore = async () => {
  return await SecureStore.deleteItemAsync("ie307_refresh_token")
}
export const LocalStorage = {
  setAccessTokenSecureStore,
  setRefreshTokenSecureStore,
  getAccessTokenSecureStore,
  getRefreshTokenSecureStore,
  removeAccessTokenSecureStore,
  removeRefreshTokenSecureStore,
}

type TPostSignInPayloadApi = {
  email: string
  password: string
}
type TPostSignUpPayloadApi = {
  email: string
  password: string
  code_digit: string
}
type TPostRefreshPayloadApi = {
  refresh: string
}
type TPostEmailAuthPayloadApi = {
  email: string
}
type TPostUploadAvatarPayloadApi = {
  avatar: string
}
export {
  TPostSignInPayloadApi,
  TPostSignUpPayloadApi,
  TPostRefreshPayloadApi,
  TPostEmailAuthPayloadApi,
  TPostUploadAvatarPayloadApi,
}

import { Buffer } from "buffer"
import * as FileSystem from "expo-file-system"

const imageDirectory = FileSystem.documentDirectory + "IE307/"
const ensureDirectoryExits = async () => {
  const directoryInfo = await FileSystem.getInfoAsync(imageDirectory)
  if (!directoryInfo.exists) {
    await FileSystem.makeDirectoryAsync(imageDirectory, { intermediates: true })
  }
}
export const saveImage = async (uri: string) => {
  await ensureDirectoryExits()
  const fileName = new Date().getTime() + ".jpg"
  const destination = imageDirectory + fileName
  await FileSystem.copyAsync({ from: uri, to: destination })
  return destination
}

export function encodeJWT(token: string) {
  const part = token
    .split(".")
    .map((part) => Buffer.from(part.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString())
  return JSON.parse(part[1])
}

export function checkIsMail(mail: string) {
  const isMatch = mail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
  return !!isMatch
}
export async function imageToBase64(uri: string) {
  const base64String = await FileSystem.readAsStringAsync(uri, {
    encoding: "base64",
    length: 99999999999,
  })
  return "data:image/jpeg;base64," + base64String
}

export function isJsonString(str: string) {
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
}

import React from "react"
import { PermissionsAndroid, Text, View } from "react-native"
import CameraRoll from "@react-native-camera-roll/camera-roll"

const UploadTab: React.FC = () => {
  const checkPermission = async () => {
    const hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)
    if (hasPermission) {
      return true
    }
    const status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
      title: "Image gallery app",
      message: "Image gallery needs your permission to access your photos",
      buttonPositive: "Ok",
    })
    return status === "granted"
  }
  const getPhots = async () => {
    const photos = await CameraRoll.getPhotos({})
  }
  return (
    <View>
      <Text>Upload tab</Text>
    </View>
  )
}
export default UploadTab

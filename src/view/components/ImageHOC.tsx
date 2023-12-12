import React from "react"
import { TouchableOpacity, Image, ActivityIndicator, GestureResponderEvent, View } from "react-native"

type TImageHOC = {
  className?: string
  uri: string
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}
const ImageHoc: React.FC<TImageHOC> = (props) => {
  const { className, uri, onPress } = props
  const [imageError, setImageError] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  if (!uri) return null
  return (
    <View className="w-full h-full">
      <Image
        className={"h-full w-full"}
        source={{ uri }}
        onError={(e) => {
          setLoading(false)
          setImageError(true)
        }}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
      {loading && <ActivityIndicator className="absolute top-0 bottom-0 left-0 right-0 " animating={loading} />}
    </View>
  )
}

export default ImageHoc

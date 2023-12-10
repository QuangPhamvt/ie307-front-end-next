import React from "react"
import { View, Text, ScrollView } from "react-native"

const ItemPostComponent: React.FC = () => {
  const [status, setStatus] = React.useState<"ONE" | "TWO" | "FOUR" | null>(null)
  React.useEffect(() => {
    const random = Math.floor(Math.random() * 10 + 1)
    if (random < 7) setStatus("ONE")
    if (random >= 9 && random <= 10) setStatus("FOUR")
  }, [])
  if (!status) return status
  return (
    <View className={`${status !== "FOUR" ? "w-1/3" : "w-2/3"} border-[0.5px] border-solid border-gray-600`}>
      <View className="aspect-square">
        <Text>Image</Text>
      </View>
    </View>
  )
}
const ListPostComponent: React.FC = () => {
  return (
    <ScrollView>
      <View className="flex h-full w-full flex-row flex-wrap overflow-y-auto bg-gray-300">
        <ItemPostComponent />
        <ItemPostComponent />
        <ItemPostComponent />
        <ItemPostComponent />
        <ItemPostComponent />
        <ItemPostComponent />
        <ItemPostComponent />
        <ItemPostComponent />
        <ItemPostComponent />
        <ItemPostComponent />
        <ItemPostComponent />
        <ItemPostComponent />
        <ItemPostComponent />
        <ItemPostComponent />
        <ItemPostComponent />
        <ItemPostComponent />
        <ItemPostComponent />
        <ItemPostComponent />
      </View>
    </ScrollView>
  )
}
export default ListPostComponent

import React from "react"
import { ScrollView } from "react-native"
import ListPostComponent from "./components/ListPostComponent"
const PostDetailStack: React.FC = () => {
  return (
    <ScrollView className="flex w-full">
      <ListPostComponent />
    </ScrollView>
  )
}
export default PostDetailStack

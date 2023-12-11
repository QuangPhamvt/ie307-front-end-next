import React from "react"
import { View } from "react-native"
import HeaderComponent from "./components/HeaderComponent"
import InstaGrid from "./components/ListPostComponent"
const mockData = [
  {
    amountPosts: 5,
    direction: "left",
    data: [
      { uri: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-08/Pug1.jpg" },
      { uri: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-08/Pug1.jpg" },
      { uri: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-08/Pug1.jpg" },
      { uri: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-08/Pug1.jpg" },
      { uri: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-08/Pug1.jpg" },
    ],
  },
  {
    amountPosts: 5,
    direction: "right",
    data: [
      { uri: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-08/Pug1.jpg" },
      { uri: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-08/Pug1.jpg" },
      { uri: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-08/Pug1.jpg" },
      { uri: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-08/Pug1.jpg" },
      { uri: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-08/Pug1.jpg" },
    ],
  },
  {
    amountPosts: 3,
    direction: "left",
    data: [
      { uri: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-08/Pug1.jpg" },
      { uri: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-08/Pug1.jpg" },
      { uri: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-08/Pug1.jpg" },
    ],
  },
]
const SearchStack: React.FC = () => {
  return (
    <View className="flex w-full h-full bg-white">
      <HeaderComponent />
      <InstaGrid data={mockData} columns={3} loading={false} onEndReached={() => null} onEndReachedThreshold={400} />
    </View>
  )
}
export default SearchStack

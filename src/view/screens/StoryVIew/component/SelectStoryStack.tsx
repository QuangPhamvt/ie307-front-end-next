import { View, SafeAreaView } from "react-native"
import { default as HeaderStoryView } from "./HeaderComponent"
import { default as MainStoryView } from "./MainComponent"

const SelectStoryStack: React.FC = () => {
  return (
    <View className="h-full w-full bg-black">
      <HeaderStoryView />
      <MainStoryView />
    </View>
  )
}
export default SelectStoryStack

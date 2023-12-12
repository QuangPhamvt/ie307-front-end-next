import { View, Text, SafeAreaView } from "react-native"
import { default as HeaderStoryView } from "./component/HeaderComponent"
import { default as MainStoryView } from "./component/MainComponent"

const StoryView: React.FC = () => {
  return (
    <SafeAreaView className="">
      <View className="w-full h-full bg-black">
        <HeaderStoryView />
        <MainStoryView />
      </View>
    </SafeAreaView>
  )
}
export default StoryView

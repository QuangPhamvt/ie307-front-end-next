import { Text, View, SafeAreaView } from "react-native"
import HeaderComponent from "./components/HeaderComponent"
import MainComponent from "./components/MainComponent"

const UploadScreen: React.FC = () => {
  return (
    <SafeAreaView className="flex h-screen w-full bg-black">
      <HeaderComponent />
      <MainComponent />
    </SafeAreaView>
  )
}
export default UploadScreen

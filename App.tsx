import React from "react"
import { Text } from "react-native"
import "react-native-gesture-handler"
import { RecoilRoot } from "recoil"
import { NavigationContainer } from "@react-navigation/native"
import { Screens } from "./src"

export default function App() {
  return (
    <React.Suspense fallback={<Text>Loading...</Text>}>
      <RecoilRoot>
        <NavigationContainer>
          <Screens />
        </NavigationContainer>
      </RecoilRoot>
    </React.Suspense>
  )
}

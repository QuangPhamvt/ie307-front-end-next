import React from "react"
import { TouchableWithoutFeedback, Keyboard, View } from "react-native"

const DismissKeyboardHOC = (Comp: any) => {
  return ({ children, ...props }: any) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={true}>
      <Comp {...props}>{children}</Comp>
    </TouchableWithoutFeedback>
  )
}
const DismissKeyboardView = DismissKeyboardHOC(View)
export default DismissKeyboardView

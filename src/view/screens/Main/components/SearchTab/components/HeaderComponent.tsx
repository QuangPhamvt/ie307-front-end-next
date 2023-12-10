import { Octicons } from "@expo/vector-icons"
import React from "react"
import { Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useRecoilState } from "recoil"
import { toggleSearchInputState } from "../store/atom"
const HeaderComponent: React.FC = () => {
  const [toggleSearchInput, setToggleSearchInput] = useRecoilState(toggleSearchInputState)
  return (
    <View className="flex flex-row items-center space-x-2 bg-gray-300 px-4 py-2">
      <TouchableOpacity className="flex w-[80%] grow flex-row items-center space-x-2 rounded-lg border-[1px] border-solid border-gray-400 p-2">
        <Octicons name="search" size={14} />
        <TextInput
          onFocus={() => setToggleSearchInput({ isFocus: true })}
          className="w-[80%]"
          placeholder="Search"
          onBlur={() => setToggleSearchInput({ isFocus: false })}
        />
      </TouchableOpacity>
      {toggleSearchInput.isFocus && (
        <TouchableOpacity
          onPress={() => {
            Keyboard.dismiss()
            setToggleSearchInput({ isFocus: false })
          }}
        >
          <Text className="text-lg">Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
export default HeaderComponent

import React from "react"
import { Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useRecoilState, useSetRecoilState } from "recoil"
import { Octicons } from "@expo/vector-icons"
import { toggleSearchInputState } from "../../../store/atom"
import { inputSearchState, openSearchState } from "../store/atom"
import SearchStackAction from "../store/hook"
const HeaderComponent: React.FC = () => {
  const [toggleSearchInput, setToggleSearchInput] = useRecoilState(toggleSearchInputState)
  const [inputSearch, setInputSearch] = useRecoilState(inputSearchState)
  const { onSearchUsername } = SearchStackAction.useSearchUsername()
  const setOpenSearch = useSetRecoilState(openSearchState)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onSearchUsername()
    }, 500)
    return () => clearTimeout(timer)
  }, [inputSearch])
  return (
    <View className="relative flex flex-row items-center space-x-2 px-4 py-2">
      <View className="flex w-[80%] grow flex-row items-center space-x-2 rounded-lg border-[1px] border-solid border-gray-400 p-2">
        <Octicons name="search" size={14} />
        <TextInput
          onFocus={() => {
            setToggleSearchInput({ isFocus: true })
            setOpenSearch(true)
          }}
          value={inputSearch}
          onChangeText={(text) => setInputSearch(text)}
          className="grow"
          placeholder="Search"
          onBlur={() => {
            setToggleSearchInput({ isFocus: false })
            setOpenSearch(false)
          }}
        />
      </View>
      {toggleSearchInput.isFocus && (
        <TouchableOpacity
          onPress={() => {
            Keyboard.dismiss()
            setToggleSearchInput({ isFocus: false })
            setOpenSearch(false)
          }}
        >
          <Text className="text-lg">Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
export default HeaderComponent

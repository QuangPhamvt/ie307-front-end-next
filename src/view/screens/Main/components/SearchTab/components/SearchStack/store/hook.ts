import { useRecoilState, useResetRecoilState } from "recoil"
import { getUserInfoBySearchState, inputSearchState, listPostSearchState } from "./atom"
import { postApi } from "~/src/api/postApi"
import { userApi } from "~/src/api"
import { Alert } from "react-native"

const useSearchUsername = () => {
  const [inputSearch, setInputSearch] = useRecoilState(inputSearchState)
  const [getUserInfoBySearch, setGetUserInfoBySearch] = useRecoilState(getUserInfoBySearchState)
  const resetGetUser = useResetRecoilState(getUserInfoBySearchState)
  const alert = (message: string) => Alert.alert(message, undefined, [{ text: "Oke" }])
  const onSearchUsername = async () => {
    if (!inputSearch) return
    try {
      setGetUserInfoBySearch({ state: "loading", data: [] })
      const {
        data: { data },
      } = await userApi.postSearchUsername({ username: inputSearch })
      if (data.length === 0) {
        alert("Don't have user")
        setInputSearch("")
        resetGetUser()
        return
      }
      setGetUserInfoBySearch({ state: "hasValue", data })
    } catch (error: any) {
      alert(error.data.message)
    }
  }
  return { onSearchUsername }
}

const useGetListPost = () => {
  const [listPostSearch, setListPostSearch] = useRecoilState(listPostSearchState)
  const onGetListPost = async () => {
    const { limit, offset } = listPostSearch
    try {
      setListPostSearch((preState) => ({ ...preState, state: "loading" }))
      const { data } = await postApi.postPostList({ limit, offset })
      if (!data.data.length) {
        setListPostSearch((preState) => ({ ...preState, state: "hasValue" }))
        return
      }
      const newData = {
        amountPosts: +limit,
        direction: Math.floor(Math.random()) ? "left" : "right",
        data: [...data.data],
      }
      setListPostSearch((preState) => ({
        ...preState,
        state: "hasValue",
        limit: Math.floor(Math.random()) ? "3" : "5",
        offset: `${offset + limit}`,
        data: [...preState.data, newData],
      }))
    } catch (error) {
      console.log(error)
    }
  }
  return { onGetListPost }
}
const SearchStackAction = {
  useGetListPost,
  useSearchUsername,
}
export default SearchStackAction

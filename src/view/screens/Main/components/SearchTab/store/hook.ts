import { useSetRecoilState } from "recoil"
import { userDetailState } from "./atom"
import { userApi } from "~/src/api"

const useGetUserDetail = () => {
  const setUserDetail = useSetRecoilState(userDetailState)
  const onGetUserDetail = async (user_id: string) => {
    try {
      setUserDetail({ state: "loading", message: null, contents: null })
      const { data } = await userApi.findOriginUser({ user_id })
      setUserDetail({ state: "hasValue", message: data.message, contents: data.data[0] })
    } catch (error: any) {
      setUserDetail({ state: "hasError", message: error.data.message, contents: null })
    }
  }
  return { onGetUserDetail }
}
const SearchViewAction = {
  useGetUserDetail,
}
export default SearchViewAction

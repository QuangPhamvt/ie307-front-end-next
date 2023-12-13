import { useRecoilState } from "recoil"
import { listPostSearchState } from "./atom"
import { postApi } from "~/src/api/postApi"

const useGetListPost = () => {
  const [listPostSearch, setListPostSearch] = useRecoilState(listPostSearchState)
  const onGetListPost = async () => {
    const { limit, offset } = listPostSearch
    try {
      setListPostSearch((preState) => ({ ...preState, state: "loading" }))
      const { data } = await postApi.postPostList({ limit, offset })
      setListPostSearch((preState) => ({
        ...preState,
        state: "hasValue",
        limit: "5",
        offset: `${offset + limit}`,
        data: [...preState.data, ...data.data],
      }))
    } catch (error) {}
  }
  return { onGetListPost }
}
const SearchStackAction = {
  useGetListPost,
}
export default SearchStackAction

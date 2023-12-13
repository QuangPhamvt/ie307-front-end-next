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
    } catch (error) {}
  }
  return { onGetListPost }
}
const SearchStackAction = {
  useGetListPost,
}
export default SearchStackAction

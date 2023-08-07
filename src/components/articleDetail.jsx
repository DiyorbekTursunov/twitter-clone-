import { useParams } from "react-router-dom"
import ArticleServise from "../service/article"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getArticleDetailFail, getArticleDetailStart, getArticleDetailSuccess } from "../slice/article"
import ArticleDetailItems from "./articleDetailItems"
import ArticleLoader from "./articleLoader"
const ArticleDetail = () => {
  const {slug} = useParams()
  const dispatch = useDispatch()
  const {isLoading} = useSelector(state => state.article)
  const getArticleDetailHendel = async() => {
    dispatch(getArticleDetailStart())
    try {
      const response = await ArticleServise.getArticleDetail(slug)
      dispatch(getArticleDetailSuccess(response))
    } catch (error) {
      dispatch(getArticleDetailFail(error))
    }
  }

  useEffect(() => {
    getArticleDetailHendel()
  }, [slug])

  return (
    <div className="max-w-[1440px] mx-auto">
      {isLoading && <ArticleLoader/>}
      {isLoading || <ArticleDetailItems/>}
    </div>
  )
}

export default ArticleDetail
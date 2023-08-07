import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getArticleDetailFail, getArticleDetailStart, getArticleDetailSuccess, getArticleFail, getArticleStart, getArticleSuccess, postArticleFail, postArticleStart, postArticleSuccsess } from "../slice/article"
import ArticleServise from "../service/article"
import { useEffect } from "react"
import Form from "./form"
import CreateArticleLoader from "./createArticleLoader"
import ArticleErorr from "../validation/ArticleErorr"

const EditArticle = () => {
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const {isLoading , error } = useSelector(state => state.article)
  const [body, setbody] = useState('')
  const dispatch = useDispatch()
  const Navigate = useNavigate()
  const { slug } = useParams()
  console.log(slug);
  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticleDetailStart())
      try {
        const response = await ArticleServise.getArticleDetail(slug)
        settitle(response.article.title)
        setdescription(response.article.description)
        setbody(response.article.body)
        console.log(response.article);
        dispatch(getArticleDetailSuccess(response.articles))
      } catch (error) {
        dispatch(getArticleDetailFail(error))
      }
    }

    getArticleDetail()
  }, [])




  const formSubmit = async (e) => {
    e.preventDefault()
    const value = {
      title,
      description,
      body,
    }
    dispatch(postArticleStart())
    try {
      await ArticleServise.editArticle(slug, value)
      dispatch(postArticleSuccsess())
      Navigate('/')
    } catch (error) {
      dispatch(postArticleFail(error))
    }
  }
  return (
    <div className='max-w-[1440px] mx-auto'>
      <h1 className='text-center text-[23px] mt-3'>Edit Article</h1>
      <div className='max-w-[1400px] mx-auto mt-10'>
        {error && <ArticleErorr />}
        {isLoading ? <CreateArticleLoader /> :
          <Form title={title} settitle={settitle} setdescription={setdescription} description={description} setbody={setbody} body={body} formSubmit={formSubmit} />}
      </div>
    </div>
  )
}

export default EditArticle
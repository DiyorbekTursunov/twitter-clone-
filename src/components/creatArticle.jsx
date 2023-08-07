import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Form from "./form"
import ArticleServise from "../service/article"
import { useDispatch, useSelector } from "react-redux"
import {  postArticleFail, postArticleStart, postArticleSuccsess } from "../slice/article"
import CreateArticleLoader from "./createArticleLoader"
import ArticleErorr from "../validation/ArticleErorr"
const CreatArticle = () => {
    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [body, setbody] = useState('')
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const {isLoading , error } = useSelector(state => state.article)
    const value = {
        title ,
        description,
        body,
    }
    const formSubmit = async (e) => {
        e.preventDefault()
        dispatch(postArticleStart())
        try {
            await ArticleServise.postcreateArticle(value)
            dispatch(postArticleSuccsess())
            Navigate('/')
        } catch (error) {
            dispatch(postArticleFail(error))
        }
    }
    return (
        <div className='max-w-[1400px] mx-auto mt-10'>
            {error && <ArticleErorr/>}
            {isLoading ? <CreateArticleLoader/> :
            <Form title={title} settitle={settitle} setdescription={setdescription} description={description} setbody={setbody} body={body} formSubmit={formSubmit}/>}
        </div>
    )
}

export default CreatArticle
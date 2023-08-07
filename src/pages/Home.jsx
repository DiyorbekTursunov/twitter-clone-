import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeItems from '../components/homeItems'
import Loader from "../components/loader"
import { getArticleFail, getArticleStart, getArticleSuccess } from '../slice/article'
import ArticleServise from '../service/article'
const Home = () => {
  const {articls , isLoading} = useSelector(state => state.article)
  const dispatch = useDispatch()


  const getArticle = async() => {
    dispatch(getArticleStart())
    try {
      const response = await ArticleServise.getArticle()
      dispatch(getArticleSuccess(response.articles))
    } catch (error) {
      dispatch(getArticleFail(error))
    }
  }

  const deleteHendel = async slug => {
    try {
      await ArticleServise.deleteArticle(slug)
      getArticle()
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getArticle()
  }, [])
  
  return (
    <div className='max-w-[1440px] mx-auto px-5 grid grid-cols-4 gap-6 mt-10'>
      {isLoading && 
          <>
            <Loader/>
            <Loader/>
            <Loader/>
            <Loader/>
          </>
      }
      {articls.map((item , i) => {
        return (
          <>
            <HomeItems {...item} deleteHendel={deleteHendel} key={i} />
          </>

        )
      })}
    </div>
  )
}

export default Home
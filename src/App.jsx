import { Route , Routes } from "react-router-dom"
import Home from "./pages/Home"
import LogIn from "./pages/LogIn"
import Register from "./pages/Register"
import Navbar from "./components/navbar"
import Authservise from "./service/auth"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { singSuccesss } from "./slice/auth"
import { getItem } from "./helpers/local-storage"
import ArticleServise from "./service/article"
import { getArticleFail, getArticleStart, getArticleSuccess } from "./slice/article"
function App() {
  const dispatch = useDispatch()

  const getUser = async () => {
    try {
      const response = await Authservise.getUser()
      dispatch(singSuccesss(response.user))
    } catch (error) {
      console.log("Error getUser");
    }
  }

  const getArticle = async() => {
    dispatch(getArticleStart())
    try {
      const response = await ArticleServise.getArticle()
      dispatch(getArticleSuccess(response.articles))
    } catch (error) {
      dispatch(getArticleFail(error))
    }
  }

  useEffect(() => {
    const token = getItem('token')
    if (token) {
      getUser() 
    }
    getArticle()
  }, [])
  
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App

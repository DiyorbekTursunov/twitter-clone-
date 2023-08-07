import { Route , Routes } from "react-router-dom"
import Home from "./pages/Home"
import LogIn from "./pages/LogIn"
import Register from "./pages/Register"
import Navbar from "./components/navbar"
import ArticleDetail from "./components/articleDetail"
import Authservise from "./service/auth"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { singSuccesss } from "./slice/auth"
import { getItem } from "./helpers/local-storage"
import ArticleServise from "./service/article"
import { getArticleFail, getArticleStart, getArticleSuccess } from "./slice/article"
import CreatArticle from "./components/creatArticle"
import EditArticle from "./components/editArticle"
import UserPage from "./components/userPage"
import UserPageChange from "./components/userPageChange"
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


  useEffect(() => {
    const token = getItem('token')
    if (token) {
      getUser() 
    }

  }, [])
  
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/article/:slug" element={<ArticleDetail/>}/>
        <Route path="/creatArticle" element={<CreatArticle/>}/>
        <Route path="/edit-article/:slug" element={<EditArticle/>}/>
        <Route path="/user/:user" element={<UserPage/>}/>
        <Route path="/user-change/:user" element={<UserPageChange/>}/>
      </Routes>
    </div>
  )
}

export default App

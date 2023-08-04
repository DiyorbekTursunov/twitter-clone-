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
function App() {
  const dispatch = useDispatch()

  const getUser = async () => {
    try {
      const response = await Authservise.getUser()
      console.log(response);
      dispatch(singSuccesss(response.user))
    } catch (error) {
      console.log("Error getUser");
    }
  }
  useEffect(() => {
    const token = getItem('token')
    console.log(token);
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
      </Routes>
    </div>
  )
}

export default App

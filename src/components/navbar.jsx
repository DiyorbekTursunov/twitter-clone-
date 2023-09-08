import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeItem } from "../helpers/local-storage";
import { logout } from "../slice/auth";
import NavModal from "./navModal";
const Navbar = () => {
  const { loggetIn, user } = useSelector(state => state.auth)
  const { isLoading } = useSelector(state => state.article)
  const [isOpen, setisOpen] = useState(false)
  const Navigate = useNavigate()
  const dispatch = useDispatch()

  const logoutHandel = () => {
    alert('Are you shour this')
    dispatch(logout())
    removeItem('token')
    Navigate('/login')
  }
  return (
    <div className="bg-[#69c0fe] ">
      <div className="flex justify-between items-center h-[80px]  max-w-[1440px] mx-auto px-5">
      <button className="absolute right-3  hidden max-sm:block" onClick={() => setisOpen(!isOpen)}>
              <i className="fa-solid fa-bars text-2xl"></i>
      </button>
        <div className="flex items-center gap-[9px]">
          <Link to={loggetIn == true ? "/" : 'login'}>
            <h2 className="uppercase text-[20px] font-bold text-[#a114ff] mr-[30px]">
              Article
            </h2>
          </Link>
        </div>
        <NavModal loggetIn={loggetIn} logoutHandel={logoutHandel} user={user} isOpen={isOpen} setisOpen={setisOpen}/>
        <div className="flex items-center gap-4 max-sm:hidden">
          {loggetIn ?
            <>
              <div className="flex items-center gap-2">
                <img src={user.image} alt="" className="w-[40px] rounded-[50%]" />
                <Link to={`/user/${user.username}`}>
                  <p className="font-semibold text-[#ff2bd5]">{user.username}</p>
                </Link>
              </div>
              <button className="px-2 py-1.5 bg-[#6e8dff] hover:bg-[#4d73ff] text-[#e2e2e2] rounded-[10px] " >
                <Link to={"/creatArticle"} className="font-semibold text-[#61ff7b]">
                  Creat article
                </Link>
              </button>
              <button className="px-2 py-1.5 text-[#e2e2e2] rounded-[10px] bg-red-400 hover:bg-red-600" onClick={logoutHandel}>logout</button>
            </>
            :
            <>
              <Link to={"/login"} className="font-semibold text-[#ff2bd5]">
                Login
              </Link>
              <Link to={"/Register"} className="font-semibold text-[#882eff]">
                Register
              </Link>
            </>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import LoginImg from "../components/images/LoginImg.png";
import { Link } from "react-router-dom";
import GoogleLogo from "../components/images/google.png";
import FaceboolLogo from "../components/images/Facebook.png";
import AppleLogo from "../components/images/apple.png";
import LoginAsDb from "../DB/LoginAsDb";
import Loginaslist from "../components/loginaslist";
import Inputs from "../components/inputs";
import { useDispatch, useSelector } from "react-redux";
import Authservise from "../service/auth";
import { singFail, singStart, singSuccesss } from "../slice/auth";
const LogIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const loginHendel = async (e) => {
    e.preventDefault()
    dispatch(singStart())
    const user = {
      email , 
      password ,
    }
    try {
      const response = await Authservise.userLogin(user)
      console.log(response , user);
      dispatch(singSuccesss(response.user))
    } catch (error) {
      dispatch(singFail(error.response.data.errors))
    }
  }
  return (
    <>
      <div className="">
      <div className="w-full bg-[#43b1ff] ">
        <div className="max-w-[1440px] mx-auto h-[458px]  flex justify-between px-5">
          <div className="flex items-center">
            <div className="h-[458px] flex items-center">
              <div className="w-[311px] justify-center flex flex-col gap-[22px] text-[#fff]">
                <div className="">
                  <h2 className="text-[34px] font-semibold">Login to </h2>
                  <h2 className="uppercase text-[20px] font-bold  mr-[30px]">
                    Online Chat
                  </h2>
                </div>
                <div className="">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src={LoginImg} alt="" />
            </div>
          </div>
          <div className="w-[539px] h-[741px] bg-[#fff] rounded-[40px] p-[44px] mt-[79px] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ">
            <div className="flex items-start justify-between">
              <div>
                <span className="flex items-center gap-1 ">
                  <h2 className="uppercase text-[16px] font-bold">
                    Welcome to
                  </h2>
                  <h2 className="uppercase text-[16px] font-bold text-[#a114ff] mr-[30px]">
                    Online Chat
                  </h2>
                </span>
                <h2 className="text-[55px] font-medium mt-2">Login</h2>
              </div>
              <div>
                <p className="text-[#8D8D8D]">No Account ?</p>
                <Link
                  to={"/register"}
                  className="text-[#0089ED] hover:opacity-70"
                >
                  register
                </Link>
              </div>
            </div>
            <div className="flex gap-[20px] mt-[43px]">
              <button className="flex items-center justify-center gap-[21px] rounded-[9px] w-[298px] h-[55px] bg-[#E9F1FF] hover:opacity-70">
                <img src={GoogleLogo} alt="" />
                <span className="text-[16px] text-[#4285F4] hover:opacity-70">
                  Login with Google
                </span>
              </button>
              <button className="flex items-center justify-center rounded-[9px] bg-[#F6F6F6] w-[60px] h-[55px] hover:opacity-70">
                <img src={FaceboolLogo} alt="" />
              </button>
              <button className="flex items-center justify-center rounded-[9px] bg-[#F6F6F6] w-[60px] h-[55px] hover:opacity-70">
                <img src={AppleLogo} alt="" />
              </button>
            </div>
            <form className="flex flex-col gap-[38px] mt-[52px]">
              <Inputs
                label={"Email address"}
                type={"email"}
                value={email}
                setValue={setemail}
              />
              <Inputs
                label={"Email password"}
                type={"password"}
                value={password}
                setValue={setpassword}
              />

              <button onClick={loginHendel} className={`bg-[#0089ED] text-[#fff] ${isLoading ? "cursor-wait" : 'cursor-pointer'} rounded-[10px] text-[16px] font-medium w-[451px] h-[54px] hover:opacity-60`}>
                {isLoading ? "Loading..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-5">
        <h3 className="mt-[54px] text-[16px]">Login as</h3>
        <div className="flex gap-[31px] mt-[26px]">
          {LoginAsDb.map((item) => {
            return <Loginaslist item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
    </>
  );
};

export default LogIn;

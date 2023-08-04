import React, { useEffect, useState } from "react";
import LoginImg from "../components/images/LoginImg.png";
import { Link } from "react-router-dom";
import LoginAsDb from "../DB/LoginAsDb";
import Loginaslist from "../components/loginaslist";
import Inputs from "../components/inputs";
import { useDispatch, useSelector } from "react-redux";
import Authservise from "../service/auth";
import { singFail, singStart, singSuccesss} from "../slice/auth";
import ValidationError from "../validation/validationError";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Register = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const Navigate = useNavigate()
  const dispatch = useDispatch();
  const { isLoading , loggetIn } = useSelector((state) => state.auth);

  const RegisterHendel = async (e) => {
    e.preventDefault()
    dispatch(singStart())
    const user = {
      username: name , 
      email ,
      password,
    }
    try {
      const response = await Authservise.userRegister(user)
      dispatch(singSuccesss(response.user))
      Navigate('/')
    } catch (error) {
      dispatch(singFail(error.response.data.errors))
    }
  }
  useEffect(() => {
    if (loggetIn) {
      useNavigate('/')
    }
  }, [])
  return (
    <div className="">
      <div className="w-full bg-[#43b1ff] ">
        <div className="max-w-[1440px] mx-auto h-[458px]  flex justify-between px-5">
          <div className="flex items-center">
            <div className="h-[458px] flex items-center">
              <div className="w-[311px] justify-center flex flex-col gap-[22px] text-[#fff]">
                <div className="">
                  <h2 className="text-[34px] font-semibold">Register to </h2>
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
                <h2 className="text-[55px] font-medium mt-2">Register</h2>
              </div>
              <div>
                <p className="text-[#8D8D8D]">Have an Account ?</p>
                <Link to={"/login"} className="text-[#0089ED] hover:opacity-70">
                login
                </Link>
              </div>
            </div>
            <form className="flex flex-col gap-[38px] mt-[45px] ">
              <ValidationError/>
              <Inputs label={'Email address'} type={'email'} value={email} setValue={setemail}/>
              <Inputs label={'Email password'} type={'password'} value={password} setValue={setpassword}/>
              <Inputs label={'Email username'} type={'text'} vlaue={name} setValue={setname}/>
              <button onClick={RegisterHendel} className={`bg-[#0089ED] text-[#fff] ${isLoading ? "cursor-wait" : 'cursor-pointer'} rounded-[10px] text-[16px] font-medium w-[451px] h-[54px] hover:opacity-60`}>
                {isLoading ? "Loading..." : "Register"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-5">
        <h3 className="mt-[54px] text-[16px]">Login as</h3>
        <div className="flex gap-[31px] mt-[26px]">
          {LoginAsDb.map(item => {
            return(
              <Loginaslist item={item} key={item.id}/>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Register;

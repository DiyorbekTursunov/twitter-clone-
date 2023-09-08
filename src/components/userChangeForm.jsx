import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserFail, getUserStart, getUserSuccsess } from '../slice/user'
import CangeUser from '../service/user'

const UserChangeForm = () => {
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const [username, setuserName] = useState('')
    const [email, setemail] = useState('')
    const [bio, setbio] = useState('')
    const user = {
        username,
        email,
        bio
    }
    console.log(user);
    const UserChangeHandel = async (e) => {
        e.preventDefault()
        dispatch(getUserStart())
        try {
            dispatch(getUserSuccsess(user))
            const response =  await CangeUser.putUserServise(user)
            Navigate('/')
            console.log(response);
        } catch (error) {
            Navigate('/')
            dispatch(getUserFail(error))
        }
    }
    return (
        <form className='mt-[50px]'>
            <div className="relative z-0 w-full mb-6 group">
                <input onChange={(e) => setuserName(e.target.value)} value={username} type="text" name="floating_email"  id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter userName</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input onChange={(e) => setemail(e.target.value)} value={email} type="text" name="floating_password"  id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Email</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input onChange={(e) => setbio(e.target.value)} value={bio} type="text" name="floating_password"  id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter bio</label>
            </div> 
            <div className='flex gap-4'>
                <button type="submit" onClick={(e) => UserChangeHandel(e)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                <button type="button" onClick={() => Navigate('/')} className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Canchel</button>
            </div>
        </form>
    )
}

export default UserChangeForm
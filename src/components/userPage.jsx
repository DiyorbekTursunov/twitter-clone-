import React, { useEffect } from 'react'
import CangeUser from '../service/user'
import { useDispatch, useSelector } from 'react-redux'
import { getUserFail, getUserStart, getUserSuccsess } from '../slice/user'
import UserPageItem from './userPageItem'
import ArticleLoader from './articleLoader'
const UserPage = () => {
    const { isLoading } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const GetUserHandel = async () => {
        dispatch(getUserStart())
        try {
            const response = await CangeUser.getUserServise()
            dispatch(getUserSuccsess(response.user))
            
        } catch (error) {
            dispatch(getUserFail(error))
        }
    }

    useEffect(() => {
        GetUserHandel()
    }, [])
    
  return (
    <div className='max-w-[1440px] mx-auto'>
        {isLoading ||<UserPageItem/>}
        {isLoading && <ArticleLoader/>}
    </div>
  )
}

export default UserPage
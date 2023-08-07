import React from 'react'
import Form from './form'
import UserChangeForm from './userChangeForm'
import { useSelector } from 'react-redux'
import ArticleLoader from './articleLoader'

const UserPageChange = () => {
  const {isLoading , error} = useSelector(state => state.user)
  return (
    <div className='max-w-[1440px] mx-auto '>
      {isLoading || <UserChangeForm/>}
      {isLoading && <ArticleLoader/>}
    </div>
  )
}

export default UserPageChange
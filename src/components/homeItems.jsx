import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HomeItems = ({ author, title, favoritesCount, description, slug, deleteHendel }) => {
    const naigate = useNavigate()
    const { articles, isloading } = useSelector(state => state.article)
    const { loggetIn, user } = useSelector(state => state.auth)
    return (
        <div className="max-w-xs container bg-white rounded-xl shadow-lg transform transition duration-500 hover:shadow-2xl flex flex-col justify-between">
            <div>
                <div className="flex items-center justify-center h-[219.994px] mb-4 bg-gray-300 rounded-t-xl dark:bg-gray-700">
                </div>
                <div className="flex p-3 justify-between">
                    <div className="flex items-center space-x-2">
                        <img className="w-10 rounded-full" src={author.image} alt="sara" />
                        <h2 className="text-gray-800 font-bold cursor-pointer">{author.username}</h2>
                    </div>
                    <div className="flex space-x-2">
                        <div className="flex space-x-1 items-center">
                            <span>{favoritesCount} views</span>
                        </div>
                    </div>
                </div>
                <hr className='h-3' />
                <div className='flex flex-col '>
                    <h2 className=" ml-4 font-bold text-gray-700 cursor-pointer hover:text-gray-900 transition duration-100">{title}</h2>
                    <h2 className="text-[14px] mt-5 ml-4 font-bold text-gray-400 cursor-pointer hover:text-gray-600 transition duration-100">{description}</h2>
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
            <div className='p-3 pb-5 flex justify-evenly gap-1.5'>
                <button onClick={() => naigate(`article/${slug}`)} className='w-full h-[40px] border-[2px] border-[#74ff84] hover:bg-[#74ff84] rounded-lg'>View</button>
                {loggetIn && user.username == author.username &&
                    <>
                        <button onClick={() => naigate(`/edit-article/${slug}`)} className='w-full h-[40px] border-[2px] border-[#62bbff] hover:bg-[#62bbff] rounded-lg'>Edit</button>
                        <button onClick={() => deleteHendel(slug)} className='w-full h-[40px] border-[2px] border-[#ff74ef] hover:bg-[#ff74ef] rounded-lg'>Del</button>
                    </>}
            </div>
        </div>
    )
}

export default HomeItems
import React from 'react'
import article from '../slice/article'
import moment from 'moment/moment'

const HomeItems = ({ author, title, tagList, favoritesCount, updatedAt, description }) => {
    return (
        <div className="max-w-xs container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
            <div>
                <img className="w-full cursor-pointer rounded-t-xl" src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="" />
                <div className="flex p-3 justify-between ">
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
                    {tagList.slice(0, 1).map((item, i) => {
                        return <p className="ml-4 mt-1 mb-2 text-gray-400 hover:text-gray-600 hover:underline cursor-pointer">#{item}</p>
                    })}
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
            <div className='p-3 pb-5 flex justify-evenly gap-1.5'>
                <button className='w-full h-[40px] border-[2px] border-[#74ff84] hover:bg-[#74ff84] rounded-lg'>View</button>
                <button className='w-full h-[40px] border-[2px] border-[#62bbff] hover:bg-[#62bbff] rounded-lg'>Edit</button>
                <button className='w-full h-[40px] border-[2px] border-[#ff74ef] hover:bg-[#ff74ef] rounded-lg'>Del</button>
            </div>
        </div>
    )
}

export default HomeItems
import React from 'react'

const ArticleLoader = () => {
    return (
        <div className="p-4 mt-10 border border-gray-200  rounded-xl shadow-lg animate-pulse dark:border-gray-700 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="rounded-lg p-6 text-neutral-700 shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:shadow-black/30">
                <h2 className="w-[1060px] h-7 mb-5 bg-gray-200  dark:bg-gray-700 "></h2>
                <p className="mb-5 w-[1260px] h-3  bg-gray-200  dark:bg-gray-700 "></p>
                <hr className="my-6 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-30" />
                <div>
                    <p className="mb-2 w-[1260px] h-3  bg-gray-200  dark:bg-gray-700 "></p>
                    <p className="mb-2 w-[1260px] h-3  bg-gray-200  dark:bg-gray-700 "></p>
                    <p className="mb-2 w-[1260px] h-3  bg-gray-200  dark:bg-gray-700 "></p>
                    <p className="mb-2 w-[1260px] h-3  bg-gray-200  dark:bg-gray-700 "></p>
                    <p className="mb-2 w-[1260px] h-3  bg-gray-200  dark:bg-gray-700 "></p>
                    <p className="mb-2 w-[1260px] h-3  bg-gray-200  dark:bg-gray-700 "></p>
                    <p className="mb-2 w-[1160px] h-3  bg-gray-200  dark:bg-gray-700 "></p>
                    <p className="mb-2 w-[1060px] h-3  bg-gray-200  dark:bg-gray-700 "></p>

                </div>
                <hr className="my-6 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-30" />
                <div className="flex gap-2 mb-4">
                    <p className='h-2  w-[260px] font-semibold opacity 80 bg-gray-200  dark:bg-gray-700 mb-2.5'><span className='font-black bg-gray-200  dark:bg-gray-700 mb-2.5'></span></p>
                </div>
                <div className="flex items-center justify-between mt-4 space-x-3 px-5">
                    <div className='flex flex-col gap-3'>
                        <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                        <div className="w-48 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleLoader
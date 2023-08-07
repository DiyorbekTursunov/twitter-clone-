const Loader = () => {
    return (
        <div role="status" className="max-w-sm border border-gray-200  rounded-xl shadow-lg animate-pulse dark:border-gray-700 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center h-[219.994px] mb-4 bg-gray-300 rounded-t-xl dark:bg-gray-700">
            </div>
            <div className="flex items-center justify-between mt-4 space-x-3 px-5">
                <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div className="flex flex-col items-end">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
            </div>
                <div className="mt-6 px-5">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-7"></div>


                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                </div>
                <div className='p-3 pb-5 flex justify-evenly gap-1.5 mt-[80px]'>
                    <button className='w-full h-[40px] bg-gray-200 rounded-lg dark:bg-gray-700 mb-2.5'></button>
                    <button className='w-full h-[40px] bg-gray-200 rounded-lg dark:bg-gray-700 mb-2.5'></button>
                    <button className='w-full h-[40px] bg-gray-200 rounded-lg dark:bg-gray-700 mb-2.5'></button>
                </div>
        </div>
    )
}

export default Loader
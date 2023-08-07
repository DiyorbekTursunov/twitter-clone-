import React from 'react'

const CreateArticleLoader = () => {
    return (
        <div className='w-full flex justify-center '>
            <div className="animate-spin inline-block w-[50px] h-[50px] border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading"></div>
        </div>
    )
}

export default CreateArticleLoader
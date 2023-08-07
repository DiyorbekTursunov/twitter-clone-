import React from 'react'
import { useSelector } from 'react-redux';
import moment from 'moment/moment';
const ArticleDetailItems = () => {
  const articlDetail = useSelector(state => state.article.articlDetail?.article)
  console.log(articlDetail);
  return (articlDetail &&
    <>
      {articlDetail &&
        <div className="p-4 border-gray-200 mt-10 rounded-xl shadow-lg  dark:border-gray-700 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="rounded-lg p-6 text-neutral-700 shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:shadow-black/30">
            <h2 className="mb-5 text-3xl font-semibold">{articlDetail.title}</h2>
            <p>{articlDetail.description}</p>
            <hr className="my-6 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-30" />
            <div>
              <p className='font-semibold opacity 80'>{articlDetail.body}</p>
            </div>
            <hr className="my-6 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-30" />
            <div className="flex items-center justify-between mt-4 space-x-3 px-5">
            <div className="flex flex-col gap-2 mb-4">
              <img src={articlDetail.author.image} alt="" className='w-[50px] rounded-[50%]'/>
              <p className='font-semibold opacity 80'><span className='font-black'>Created at: </span>{moment(articlDetail.createdAt).format("DD MMM , YYYY")}</p>
            </div>
                <div className="flex flex-col items-end">
                    <div className="mb-2">{articlDetail.author.username}</div>
                    <div className="">{articlDetail.favoritesCount} Views</div>
                </div>
            </div>
          </div>
        </div>}
    </>
  )
}

export default ArticleDetailItems
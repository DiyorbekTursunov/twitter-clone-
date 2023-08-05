import React from 'react'
import { useSelector } from 'react-redux'
import HomeItems from '../components/homeItems'
const Home = () => {
  const cards = useSelector(state => state.article.articls)
  return (
    <div className='max-w-[1440px] mx-auto px-5 grid grid-cols-4 gap-6 mt-10'>
      {cards.map((item , i) => {
        console.log(item);
        return(
          <HomeItems {...item} key={i}/>
        )
      })}
    </div>
  )
}

export default Home
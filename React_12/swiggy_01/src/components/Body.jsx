import React from 'react'
import RestaruarntCards from './RestaruarntCards'

function Body() {
  return (
    <div>
        <h1 className='font-bold text-2xl m-8'>Restaurants with online food delivery in Chhindwara</h1>
        <button className='border rounded w-1/12 ml-28 p-2 text-xl'>Rating 4.4+</button>
        <button className='border rounded w-1/12 ml-20 p-2 text-xl'>Reset</button>

        <div className='flex flex-wrap w-10/12 mx-auto'>
            <RestaruarntCards />
            <RestaruarntCards />
            <RestaruarntCards />
            <RestaruarntCards />
            <RestaruarntCards />
            <RestaruarntCards />
            <RestaruarntCards />
        </div>
    </div>
  )
}

export default Body
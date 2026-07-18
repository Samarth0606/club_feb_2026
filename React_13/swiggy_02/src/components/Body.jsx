import React, { useEffect, useState } from 'react'
import RestaruarntCards from './RestaruarntCards'
import ApiCalling from './ApiCalling'
import Search from './Search';

function Body() {
  let restArray = ApiCalling()
  let [allRestArr,setAllRestaurantArr] = useState(restArray);

  useEffect(()=>{
    if(restArray && restArray.length){
      setAllRestaurantArr(restArray)
    }
  } , [restArray])

  function handleFilter(restArray){
    setAllRestaurantArr( restArray.filter((rest)=>rest.info.avgRating>=4.5) )
  }
  function handleReset(restArray){
    setAllRestaurantArr( restArray )
  }
  return (
    <div>
        <h1 className='font-bold text-2xl m-8'>Restaurants with online food delivery in Chhindwara</h1>
        <button onClick={()=>handleFilter(restArray)} className='border rounded w-1/12 ml-28 p-2 text-xl'>Rating 4.5+</button>
        <button onClick={()=>handleReset(restArray)} className='border rounded w-1/12 ml-20 p-2 text-xl'>Reset</button>
      
        <Search restArray={restArray} setAllRestaurantArr={setAllRestaurantArr} />
      
        <div className='flex flex-wrap w-10/12 mx-auto'>
            <RestaruarntCards restArray={allRestArr} />
        </div>
    </div>
  )
}

export default Body
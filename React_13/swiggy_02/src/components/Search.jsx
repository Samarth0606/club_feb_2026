import React from 'react'

function Search({restArray, setAllRestaurantArr}) {
    function handleSearch(searchedText){
        setAllRestaurantArr( restArray.filter((rest)=>rest.info.name.toLowerCase().includes(searchedText.toLowerCase())) )
    }
  return (
    <input onChange={(e)=>handleSearch(e.target.value)} className='border p-2 ml-6 m-2' type="text" placeholder='Search here...' />
  )
}

export default Search
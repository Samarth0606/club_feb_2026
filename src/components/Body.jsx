import React, { useState, useEffect } from 'react';
import RestaruarntCards from './RestaruarntCards';
import axios from 'axios';

function Body() {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const API = "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.17010&lng=79.95700&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
      const resp = await axios.get(API);
      
      const data = resp?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      
      if (data) {
        setListOfRestaurants(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className='body'>
      <div className='flex flex-wrap m-8'>
        {listOfRestaurants.map((restaurant) => (
          <RestaruarntCards key={restaurant.info.id} info={restaurant.info} />
        ))}
      </div>
    </div>
  );
}

export default Body;
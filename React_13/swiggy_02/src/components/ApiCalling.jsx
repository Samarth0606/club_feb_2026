import axios from 'axios'
import { useEffect, useState } from 'react'

function ApiCalling() {
    const [allRestaurantArr,setAllRestaurantArr] = useState([])
    useEffect(()=>{
        async function calling(){
            const API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.17010&lng=79.95700&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            let resp = await axios.get(API);
            setAllRestaurantArr(resp.data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        }
        calling()
    } , [])
  return allRestaurantArr;
}

export default ApiCalling
import React, { useEffect, useState } from 'react'

function Apii() {
    const [todos , setTodos] = useState([])

    useEffect(()=>{
        let api = "https://jsonplaceholder.typicode.com/todos";
        fetch(api)
        .then((resp)=>{
            return resp.json()
        })
        .then((data)=>{
            console.log(data);
            setTodos(data)
        })
        .catch((err)=>{
            console.log(err);
        })
    } , [])

  return (
    <div>
        {
            todos.map((item,index)=>{return(
                <div>
                    <h1>Title: {item.title}</h1>
                </div>
            )})
        }
    </div>
  )
}

export default Apii
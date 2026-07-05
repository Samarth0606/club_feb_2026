import React, { useEffect, useState } from 'react'
import axios from 'axios';


function Apii() {

    const [todos,setTodos] = useState([]);

    useEffect(()=>{
        async function calling(){
            const API = "https://jsonplaceholder.typicode.com/todos"
            // const resp = await axios.get(API)
            axios.get(API)
            .then((resp)=>{
                setTodos(resp.data)
            })
        }
        calling()
    } , [])

  return (
    <div>
        <h1>API CALLING</h1>
        {
            todos.map((item)=>{
                return(
                    <div>
                        <h1>Title:{item.title} </h1>
                        <h1>isCompleted:{JSON.stringify(item.completed)} </h1>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Apii



// function Apii() {

//     const [todos,setTodos] = useState([]);

//     useEffect(()=>{
//         async function calling(){
//             const API = "https://jsonplaceholder.typicode.com/todos"
//             const resp = await fetch(API)
//             const data = await resp.json();
//             // console.log(data);
//             setTodos(data)
//         }
//         calling()
//     } , [])

//   return (
//     <div>
//         <h1>API CALLING</h1>
//         {
//             todos.map((item)=>{
//                 return(
//                     <div>
//                         <h1>Title:{item.title} </h1>
//                         <h1>isCompleted:{JSON.stringify(item.completed)} </h1>
//                     </div>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default Apii


// import React, { useEffect, useState } from 'react'

// function Apii() {

//     const [todos,setTodos] = useState([]);

//     useEffect(()=>{
//         function calling(){
//             const API = "https://jsonplaceholder.typicode.com/todos"
//             fetch(API)
//             .then((data)=>{
//                 return data.json()
//             })
//             .then((resp)=>{
//                 console.log(resp);
//                 setTodos(resp)
//             })
//             .catch((err)=>{
//                 console.log(err);
//             })
//         }
//         calling()
//     } , [])

//   return (
//     <div>
//         <h1>API CALLING</h1>
//         {
//             todos.map((item)=>{
//                 return(
//                     <div>
//                         <h1>Title:{item.title} </h1>
//                         <h1>isCompleted:{JSON.stringify(item.completed)} </h1>
//                     </div>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default Apii
import React, { useState } from 'react'

function Person( {name} ) {
    const [user,setUser] = useState(name);
    function changeName(){
        setUser("anonymous")
    } //anonymous

  return (
    <div>
        <h1>Name: {user}</h1>
        <button onClick={changeName} >Logout</button>
    </div>
  )
}

export default Person



// import React from 'react'

// function Person( {name} ) {
//     let user = name;
//     function changeName(){
//         console.log(user,"before");
//         user = "anonymous"
//         console.log(user,"after");
//     } //anonymous

//   return (
//     <div>
//         <h1>Name: {user}</h1>
//         <button onClick={changeName} >Logout</button>
//     </div>
//   )
// }

// export default Person
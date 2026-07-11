import React, { memo, useCallback, useState } from 'react'

function UseCallback() {
    const [count,setCount] = useState(0);
    // let a = 10;
    let a = useCallback( function(){ console.log("hello") } , [])
  return (
    <div>
        <Chotu username={a}  />
        <button onClick={()=>setCount(count+1)} >inc</button>
        <Chotu username="Mav" />
        <Chotu username="Tom" />
    </div>
  )
}

const Chotu = memo( function ({username}){
    return(
        <div>
            <h1>Hello from : {username}</h1>
        </div>
    )
} )



export default UseCallback
import React, { useState } from 'react'

function Ques() {

    const [count , setCount] = useState(5);
    function handleInc(){
        setCount(count+2) // 7
        setCount((count)=>count+4) // 11
        setCount(count+5) // 10
    }
    
  return (
    <div>
        <button onClick={handleInc}>+</button>
        <h1>{count}</h1>

    </div>
  )
}

export default Ques
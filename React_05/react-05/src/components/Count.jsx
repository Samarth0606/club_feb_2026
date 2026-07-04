import React, { useState } from 'react'

function Count() {

    const [count , setCount] = useState(0);
    function handleInc(){
        setCount((count)=>count+1) // prev value hold  // 1
        setCount((count)=>count+1) // setState is async in  // 2
        setCount((count)=>count+1) // 0+1 // dominating //
    }
    function handleDec(){
        setCount(count-1)
        setCount(count-1)
        setCount(count-1)
    }
  return (
    <div>
        <button onClick={handleInc}>+</button>
        <h1>{count}</h1>
        <button onClick={handleDec}>-</button>
    </div>
  )
}

export default Count
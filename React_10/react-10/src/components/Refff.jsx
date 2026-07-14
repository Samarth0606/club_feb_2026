import React, { useRef, useState } from 'react'

function Refff() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    function handleReff(){
        countRef.current++;
    }

  return (
    <div>
        <button onClick={handleReff} >Inc ref - {countRef.current}</button>
        {/* <h1>Count: {count}</h1> */}
        <button onClick={()=>setCount(count+1)}> Inc: {count} </button>
    </div>
  )
}

export default Refff
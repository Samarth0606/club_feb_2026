import React, { useEffect, useRef } from 'react'

function Reff() {

    // let salary = 4000000;
    let spanEl = useRef(4000000);
    console.log(spanEl , "spanEl");
    
    // 2000
    useEffect(()=>{
        setTimeout(()=>{
            spanEl.current.innerHTML = "20000"
        } , 3000)
    } , [])

  return (
    <div>
        salary is <span ref={spanEl}>{spanEl.current}</span>
    </div>
  )
}

export default Reff
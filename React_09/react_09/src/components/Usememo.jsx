import React, { useMemo, useState } from 'react'

function Usememo() {
    const [count,setCount] = useState(0);
    const [inp,setInp] = useState(0);

    function handleInp(e){
        setInp(e.target.value)
    }

    let finalAns = useMemo(()=>{
        let ans = 0;
        for(let i=1;i<=inp;i++){
            console.log("hello");
            ans = ans+i
        }
        return ans;
    } , [inp])

  return (
    <div>
        <input onChange={(e)=>handleInp(e)} type="number" value={inp} />
        <h1>SUM: {finalAns}</h1>
        <button onClick={()=>setCount(count+1)} >Inc = {count}</button>
    </div>
  )
}

export default Usememo
import React, { memo, useState } from 'react'

function Memoo() {
    const [user,setUser] = useState("Sam")
    function handleClick(){
        setUser(Math.floor(Math.random()*10))
    }
  return (
    <div>
        <Chotu username={user} />
        <button onClick={handleClick} >Change Name</button>
        <Chotu username="Mav" />
        <Chotu username="Tom" />
    </div>
  )
}

const Chotu = memo(function({username}){
    return(
        <div>
            <h1>Hello from : {username}</h1>
        </div>
    )
})

export default Memoo
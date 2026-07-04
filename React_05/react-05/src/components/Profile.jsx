import React from 'react'

function Profile() {

    function handleBtn(){
        console.log("hello");
    }
    function handleSam(x , y){
        console.log("Code Baithak" , x , y);
    }

  return (
    <div>
        <button onClick={handleBtn}>Click me</button>
        <br />
        <button onClick={()=>handleSam(10 , 20)}>Click me 2</button>
    </div>
  )
}

export default Profile
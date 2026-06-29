
function Student( {naam , studList} ) {
    console.log(studList);
    
  return (
    <div>
        <h1>Mentor: {naam}</h1>
        {
            studList.map((item)=>{
                return(
                    <ul>
                        <li>{item}</li>
                    </ul>
                )
            })
        }
    </div>
  )
}

export default Student
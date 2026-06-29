// function Person( props ){
//     console.log(props);
function Person( {name,age,color,gender} ){
    
    // let naam = "Samarth Vohra";
    // let umar = 99;
    // let color = "Blue";
    // let gender = true;


    return(
        <div style={{border:"3px solid black", margin:"5px", padding:"5px"}} >
            <h2>Name: {name} </h2>
            <h2>Age: {age}</h2>
            <h2>FavColor: {color}</h2>
            <h2>isMale: {JSON.stringify(gender)}</h2>
        </div>
    )
}

export default Person;
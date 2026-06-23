function Person(){

    let naam = "Samarth Vohra"
    let umar = 1020;
    let salary = 10000;
    let isMale = true;
    // let isMale = undefined;
    // null , true , undefined , false


    return(
        <div>
            <h1>Name: {naam}</h1>
            <h1>Age: {umar} </h1>
            <h1>Ismale: { JSON.stringify(isMale) }</h1>
            <h1>Salary: {salary}</h1>
        </div>
    )
}

export default Person;


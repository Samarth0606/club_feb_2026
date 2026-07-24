const fs = require('fs') //already in nodejs
// console.log(fs);

// create
// let data = "I am Samarth Vohra"
// fs.writeFileSync('sam.txt' , data , {})

// fs.writeFile('tom.txt' , "i am tom", {} , (err)=>{
//     if(err) throw err
//     else console.log("data written successfully");
// })
// ---------------
// read
// let data = fs.readFileSync('sam.txt' , {encoding:'utf-8'})

// console.log(data.toString());
// console.log(data);



// fs.readFile('tom.txt' , {encoding:'utf-8'} , (err,data)=>{
//     if(err) throw err;
//     // else console.log(data.toString());
//     else console.log(data);
// })


// ---------------
// update

// fs.appendFileSync('sam.txt' , '\nhello frnds 2' , {})

// fs.appendFile('tom.txt' , '\nhello frnds of tom' , {} , (err)=>{
//     if(err) throw err;
//     else console.log("edited succesfully");
// })

// ---------------
// delete

// fs.unlinkSync('tom.txt')
fs.unlink('sam.txt' , (err)=>{
     if(err) throw err;
    else console.log("deleted succesfully");
})

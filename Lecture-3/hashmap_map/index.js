// user defined
// class Animal{
//     constructor(){
        
//     }
// }

// let o1 = new Animal();
// console.log(o1)


// predefined

// const map1 = new Map(); //predefined/inbuilt DS
// console.log(map1)

// ---------------------------------------------

// const map = new Map();

// console.log( map.get(10) ); //undefined
// map.set(10 , "Samarth Vohra");
// map.set(20 , true);
// map.set(30 , 99);
 
// // console.log(map.size); //property
// // map.clear() //removes everything from map
// console.log(map)
// // console.log( map.has(30) ); //t

// map.delete(30)
// // console.log( map.has(30) ); //f

// console.log( map.get(30) ); // undefined
// console.log( map.get(10) ); // 


// ---------------------------------------------
//keys are unique || ordered in nature
// const map = new Map();
// map.set(10 , true)
// map.set(20 , "vohra")
// console.log( map.size );
// map.set(10 , "sam") //override
// console.log(map);

// console.log( map.size );


// ---------------------------------------------

// loop
const map = new Map();
map.set(10 , true)
map.set(20 , "vohra")

// for(let item of map){
//     console.log(item[0]);
//     console.log(item[1]);
// }

for(let [keyyy,valueeee] of map){
    console.log(keyyy , valueeee);
    // console.log(valueeee);
}

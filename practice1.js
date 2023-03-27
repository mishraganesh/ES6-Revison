//let and  const

//let and const are the block scoped means you can not access these variable outside the block
//while var is a functional scoped var keyword polute the code



var age=18;

// if(age>=18){
//     var driving =true
// }
// console.log(driving)
//here you can access the variable outside the block this is not right .
//this problem solved by let and const
var age=18;

if(age>=18){
    let driving =true
}
console.log(driving)
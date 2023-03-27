//let and  const

//let and const are the block scoped means you can not access these variable outside the block
//while var is a functional scoped var keyword polute the code

// if(age>=18){
//     var driving =true
// }
// console.log(driving)
//here you can access the variable outside the block this is not right .
//this problem solved by let and const
//block scope exaple-
// var age = 18;

// if (age >= 18) {
//   let driving = true;
//   console.log(driving)
// }
// console.log(driving);
//if you use let or const you can not override variable ex-
// let myName="ganesh";
// let myName="mishra";
// console.log(myName)
//Uncaught SyntaxError C:\Users\ganesh\Videos\ES6\blockscope.js:22
let product="camera"
product="laptop"
console.log(product)
//using let you can reassing the value of variable



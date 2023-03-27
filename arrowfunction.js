//normal function
function greet(){
    console.log("hello js")
}
greet()

//arrow function

const welcome=()=>{
    console.log("welcome to functionup")
}
welcome();
//clean code using arrow function
const addition=(a,b)=>console.log(a+b)

addition(4,5)
//arrow function does'nt have own context means this keyword they use parent context.
//Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
//Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.

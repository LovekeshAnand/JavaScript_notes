// Primitive
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scorevalaue = 100.3;

const isLoggedIn = false// example for boolean
const outsideTemp = null//example for null
let userEmail;//example for undefined

//We will study symbol later
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);//this will print false because Symbol give uniqueness

// Reference (Non-Primitive)
//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];//example of Array

//example of Object
let myObj = {
    name: "lovekesh",
    age: 18,

}

//example of function
const myFunction = function(){
    console.log("Hello World");
}

//All the non-primitive datatype is object like function is object function but if we find tpeof of function it will only rerturn function.
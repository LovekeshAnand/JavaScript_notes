const user = {
    username: "lovekesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website!`);
        console.log(this)//from "this" keyword we will get the current context printed and if there is any update, it will also be printed
    }//"this" keyword is used for current context
    
}

user.welcomeMessage()
user.username = "lovely"
user.welcomeMessage()

console.log(this);//in node.js, it will print an empty object
//but in javascript, it will print an window object containing some info about window which we will study about, in DOM 

function chai(){
    let username = "lovekesh"
    console.log(this.username);//we can't use "this" keyword in a function because it will print some different values.
}
chai()

const name = () => {
    let username = "lovekesh"
    console.log(username)
}//this is known as arrow function.
//in arrow function we don't have to write "function" keyword to declare a function we have to simply write an arrow "=>".
name()

//example of arrow function
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4));

const add = (num1, num2) => num1 + num2 //this is known as implicit way of declaring arrow function
console.log(addTwo(3, 4));
// if we use curly braces in arrow function, we have to write return keyword.
//but if we use paranthesis, there is no need to use return keyword

const objectreturn =() => ({username: "lovekesh"})//this is how we can return an object from a arrow function

console.log(objectreturn());
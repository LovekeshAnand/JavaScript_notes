function sayMyName(){
    console.log("LOVEKESH");
}//this is synatx of definition of a function
//This function prints "LOVEKESH"

sayMyName()//this is the execution of the function or function call 

function addTwoNumbers(num1, num2){//the values passed during the function definitions is known as parameters
    console.log(num1 + num2);
}
//this function add two numbers
addTwoNumbers(3, 4)
//the values passed during the function call is known as arguements

function subTwoNumbers(number1, number2){
    let result = number1 - number2
    return result
}
const result = subTwoNumbers(5, 4)
console.log("Result: ", result);
//this is another way to get the output from the function

function loginusermsg(username){
    return `${username} just logged in`
}

console.log(loginusermsg())//here empty brackets will print undefined just logged in but if we put a string inside the brackets the string will print alog with just logged in


function price(...num1){
    return num1
}//The three dots used are known as rest operator and it also known as spread operator, it can be differentiated on the basis of the use case.
//Here it's use case is rest operato, it used to mak ea bundle of the data entered and make an array. 

console.log(price(200, 400, 600));

function calprice(val1, val2, ...num2){// here val1 and val2 will not store in array and rest of it will store in a array and printed.
    return num2
}
console.log(calprice(200, 400, 500, 3000));

const user = 
{
    username: "lovekesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "lovely",
    price: 400
})// we can directly define object into the function while function calling

const mynewarr = [300, 400, 500, 600]

function returnvalue(mynewarr){
    return mynewarr[1]
}
console.log(returnvalue(mynewarr))
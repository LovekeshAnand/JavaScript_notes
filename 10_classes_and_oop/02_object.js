//Protoype
//Prototypes are the mechanism by which JavaScript objects inherit features from one another.
//Basically everything in JavaScript is Object.
//The properties inherited by object are also inherited by array, strings, etc.


//Function is basically function datatype but behind the scenes it is object.
function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);//this means we can access values by using . in functions.
console.log(multipleBy5.prototype);//this means the function datatype also inherited the properties of object.


function createUser(username, score){
    this.username = username //.this sets the current context
    this.score = score
}

createUser.prototype.increment = function (){
    this.score++ //here .this will work current context and this function will work for every call
}//this tell that javascript is basically a object behind the scene as we can use prototype methods on a function.

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}//here we are making a new protype method linked with the createUser function which will take the values of the current value and print them.
const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()
tea.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
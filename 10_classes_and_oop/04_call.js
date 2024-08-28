function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("Called");
    
}

function createUser(username, email, password){
    SetUsername.call(this, username)//without using .call with the function call while explicitly calling a function. The function will be called but we will not get any output. And with .call we will able to hold the reference of the function called, without using .call the function will removed from the call stack after being called.
    //By setting this, context inside the function call we are telling the explicit funtion to use the current context of the function from which it is being called.
    this.email = email,
    this.password = password
}

const chai = new createUser("lovekesh", "example@.com", "123")
console.log(chai);

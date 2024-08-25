//Object Literal
//Object literal means the literally the object is declared. Object literal is basically a collection of properties and methods.
const user = {
    username: 'Lovekesh',
    loginCount: 8,
    signedIN: true,
    
    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`username: ${this.username}`);//we have to 'this' keyword here to tell the function to use current context and take username from this context only. If we don't use 'this keyword here it will throw an error stating 'username is not defined'.
        console.log(this);// 'this' keyword will print the current context of the object and will print all the key-value pairs in the object.  
    }
}

console.log(user.username);
console.log(user.getUserDetails());
//In global context of .this keyword it will print an empty object as there is no global context right now, and on the other hand ife we console.log(this) in the browser we get the gloabal context of window objects.

//Constructor Function
//Contruuctor function basically gives new instance for use

//new keyword is also reffered as contructor function, as it is used to make a new context.

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this //there is no need to write this as it is already implicitly defined
}

const userOne = new User("lovekesh", 12, true)
const userTwo = new User("Lovekesh", 11, false)// userTwo will overwrite the values of userOne
//after using new keyword, a new context will be created and the values will not overwrite as new context is created for both of them.
console.log(userOne.constructor);//here will get the output as [Function (User)], as userOne.constructir is basically a reference to the User function.

console.log(userOne);
console.log(userTwo);

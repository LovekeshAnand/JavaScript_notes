//Object literals: a way to declare objects.

// Object.create  //This is a constructor way to declare objects

const mySym = Symbol("key1")

const user = {
    name: "Lovekesh",
    "Full name": "Lovekesh Anand",//This can only be accessed through square bracket syntax.
    age: 18,
    [mySym]: "myKey1",//this is how a symbol is used in a object
    location: "Delhi",
    email: "lovekeshanand@google.com",
    isLoggedIn: false,
    lastLoginDays: ["mon", "sat"]
}

console.log(user.email);//We will use dot syntax usually but in some special cases we will use square bracket format.
console.log(user["email"]);
console.log(user["Full name"]);
console.log(user[mySym]);//This is the syntax to access a symbol in a object.
//These are the two ways to acces objects.

user.email = "lovekeshanandchatgpt.com"//This is how we can overwrite a data inside a object
// Object.freeze(user)//This will freeze the object and we can not overwrite any data inside that object 
console.log(user);

user.greeting = function(){
    console.log("Hello User!");
}
 user.greetingtwo = function(){
    console.log(`Hello ${this.name}`);//"this" is used to refer the object to which function is associated
}

user.greeting();
user.greetingtwo();
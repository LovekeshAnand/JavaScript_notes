
// console.log(Math.PI);
// Math.PI = 5
// console.log(Maths.PI);
//This basically shows that we cannot overwrite the value of Math.PI

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")//this basically give a property of an object
console.log(descriptor);

const User = {
    name: "Lovekesh",
    price: 250,
    isAvailable: true,
    isLoggedin: function(){
        console.log("User present");
    }
}

console.log(Object.getOwnPropertyDescriptor(User, "name"));//this will print the properties of User where Name is the key

Object.defineProperty(User, 'name',{
    // writable: false,
    enumerable: false
})//we can also define properties of an object using Object.defineProperties
//when we logged without defining the properties of the object, the object was writable
//but when we defined the properties like writable and enumerable to false, no we cannot overwrite the object.
console.log(Object.getOwnPropertyDescriptor(User, "name"));

for (let [key, value] of Object.entries(User)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}
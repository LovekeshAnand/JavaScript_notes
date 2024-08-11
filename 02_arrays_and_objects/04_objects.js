const user = new Object() //this is singleton way to declare object
const newuser = {} //this is non-singleton way of declaring object.

newuser.id = "123abc"
newuser.name = "Lovekesh"
newuser.isLoggedIn = false //Here properties of a object is decalred after it's declaration

console.log(newuser);

const regularUser = {
    email: "lovekeshanandgoogle.com",
    full_name: {
        user_name: {
            first_name: "Lovekesh",
            last_name: "Anand"
        }
    }//this is the example for nested object we can use object as inside object as we can use array inside array.
}// here properties of a object are added direclty into the declaration

console.log(regularUser.full_name.user_name.first_name);//this is how we can access properties of a nested object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {...obj1, ...obj2}//with the spread operator we used to join arrays, we can also use it to join objects.
//we will use this syntax usually
//const obj3 = Object.assign({}, obj1, obj2);//this will add the objects entered in the brackets and make a new object, which contains the properties of the objects entered.
//we can use empty bracket with objects in the bracket because it will assure that it will join and we get an object as a result.
//the first object we enter inside .assign() will become the target and other object will become the source.
//it means the source will be stored inside the target or we can say sources will join with target, which results in forming new object
//which contains the properties of all the sources into the target
console.log(obj3);

const anotheruser = [
    {
        id: "1234",
        email: "lovekeshanand"
    },
    {
        id: "1234",
        email: "lovekeshanand"
    },
    {
        id: "1234",
        email: "lovekeshanand"
    }
]//thid how we can store objects in a array

console.log(anotheruser[1].email);//this is how we can access object properties inside a array.

console.log(Object.keys(newuser));//this is how we can get the keys of a object.
// the keys will print in the format of array
console.log(Object.values(newuser));//this is how we can get the values of a object.
// the values will print in the format of array
console.log(Object.entries(newuser));// from this we can get the key-value pairs of the object in format of array and each key-value pair is made in form of array.
//So there will be a large array which will store the arrays of key-value pairs.

console.log(newuser.hasOwnProperty('isLoggedIn'));//this is used to check if the entered property exists in the object or not.
//we will get answer in boolean (true or false).

const course = {
    course_name: "js in hindi",
    price: "999",
    courseInstructor: "lovekesh"
}

const {courseInstructor: instructor} = course //this is another way to access properties of an object, we can also change the name of the key to make it short.
//this is also known as destructuting of a object
console.log(instructor); 


//++++++++++++++++++++API+++++++++++++++++++//
//this is the format for JSON API
// {
//     "name": "lovekesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//Sometimes while calling API's we can get the data in the form of object format and sometimes in the array format.

[
    {},
    {},
    {}//this is the array format of the API
]

//full form of JSON is JavaScript Object Notation
//We can simpplify the data called by an API through JSON formattor which is available on google.
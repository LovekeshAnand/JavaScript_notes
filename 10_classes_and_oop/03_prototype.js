// let myName = "Lovekesh   ";

// console.log(myName.trueLength);//we have to create a method which finds the true length of the string without counting spaces.

let myHeroes = ["thor", "spiderman"]


let heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`);        
    }
}

Object.prototype.lovekesh = function(){
    console.log(`lovekesh is present in all objects`);
}//here we injected properties of prototype into objects and defined a new method named "lovekesh"

Array.prototype.heylovekesh = function(){
    console.log(`lovekesh says hi`);
    
}

myHeroes.lovekesh()
heroPower.lovekesh()
myHeroes.heylovekesh()//this will print output of the heylovekesh, because array has access to the prototype now so there is no need to go to the object datatype.
// heroPower.heylovekesh()//this will throw an error as we have given the properties of prototype into array, so now there is no need to go to the object datatype.


//Inheritance

const user = {
    name: 'lovekesh',
    mail: 'example@gmail.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport//here __proto__ is the method used in old to give access of one object to another
}

Teacher.__proto__ = user //here we can see that we can declare __proto__ outisde of the object

//Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)//this basically gives the access or we can say that injects the properties of TeachingSupport into Teacher

let anotherUsername = "lovekesh   "

String.prototype.trueLength = function(){
    console.log(`True length of ${this} is ${this.trim().length}`);
}

anotherUsername.trueLength()
"JavaScript  ".trueLength()
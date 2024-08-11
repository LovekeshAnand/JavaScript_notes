//*******************CONVERSIONS**********************
let score = "lovekesh"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// NaN => not a number
let isloggedin = 1

let booleanisloggedin = Boolean(isloggedin)
console.log(typeof(booleanisloggedin));

//1 => true
//0 => false
//" " => false
// "hitesh" => true

let somenumber = 33
let stringNumber = String(somenumber);
console.log(stringNumber);
console.log(typeof(stringNumber));

//****************************OPERATIONS****************************

let value = 3
let negValue = -value
console. log(negValue); //prints the negative value of value

console.log(2+2);//Addition
console.log(2-2);//Subtraction
console.log(2*2);//Mulitplication
console.log(2**2);//Power
console.log(2/2);//Division
console.log(2%2);//Remainder

//This program concatinates two strings
let str1 = "Hello"
let str2 = " Lovekesh"
let str3 = str1 + str2
console.log(str3);


console.log("1" + 2);//this will print 12
console.log(1 + "2");//this will also print 12
console.log(1 + 2 + "2");//this will print 32
//this are all wrong to code


console.log(+true);//this will print 1
console.log(+"");//this will print 0 as empty parenthesis describes dalse value
//these both are worng practices and should not be performed because it will make the code more complex


let gamecounter = 100;
gamecounter++;//this will increase the value of game counter by 1
console.log(gamecounter);
/*There are two types of increment and decrement which are
postfix and prefix 
In postfix the value is first taken into account and than it is increase (++a).
In prefix the value is first increased and than taken into account*/



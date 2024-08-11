const score = 100;
console.log(score);//This will automatically signify that it is a number

const balance = new Number(400);//This will dedicately print 400 as Number: 400 and signify that this is a number
console.log(balance);
//new keyword can also be used for other primitve datatype also.

console.log(balance.toString());//This will convert balance number to string datatype.
console.log(balance.toString().length);//As balance number is converted to string through we can check the length of the string.
console.log(balance.toFixed(2));//This will add decimals after the number, it helps to get the exact value. We can specify the number of digits we want after the decimal point.


const otherNumber = 123.670
console.log(otherNumber.toPrecision(3));//this round figures the value on the basis of the numbers after the decimal point and remove the decimal

const hundreds = 1000000
console.log(hundreds.toLocaleString());// this print the large numbers with commas for easier reading and good representation.
//with this, the commas are pplaced according to the US number system.

console.log(hundreds.toLocaleString('en-IN'));//With 'en-IN', commas are placed according to the Indian number system.

console.log(Number.MAX_VALUE); //This will print the MAX value of the Number datatype
console.log(Number.MIN_VALUE); //This will print the MIN value of the Number datatype
console.log(Number.MAX_SAFE_INTEGER); //This will print the safe maximum number till which we can use Number dataype 
console.log(Number.MIN_SAFE_INTEGER); //This will print the safe minimum number till which we can use Number datatype


//++++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++

console.log(Math);// We can see many functions of Maths library from the inspect console of browser.
console.log(Math.abs(-4));//This function changes the negative value to positive but the positive value remains positive.
console.log(Math.round(4.6));//This function gives the round figure of the entered decimal value.
console.log(Math.ceil(4.2));//This function gives the higher possible value in round figure of the entered decimal value.
console.log(Math.floor(4.9));//This function gives the lower possible value in round figure of the entered decimal value.
console.log(Math.min(4, 3, 5, 6));//This function give the minimum value of the arra.
console.log(Math.max(4, 3, 5, 6));//This function give the maximum value of the array

console.log(Math.random());//This function gives random value between 0 to 1.
console.log((Math.random()*10) +1);//Here random() function is multiplied to 10 because the values of the random() function comes between 0 to 1 and if we multiply 
//by 10 it will shift numbers by one decimal point and we will surely get a value increased by one decimal point which is 0 to not get 0 value we add the number 
//by plus 1. This whole will return a value between 1 to 9.
console.log(Math.floor(Math.random()*10) +1);//Here we wil get a lowest possible random value as decimal points will be removed from the random value.

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);//This whole program is to get a random number between the defined range. 
//This is basically a formula to get the random number between a defined range.
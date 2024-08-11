console.log(2 < 1);//smaller than
console.log(2 > 1);//greater than
console.log(2 <= 1);//smaller than or equal to
console.log(2 >= 1);//greater than or equal to 
console.log(2 == 1);//equal to 
console.log(2 != 1);//not euqal to

console.log("2" > 1);// this will also print true as string will be converted to number
console.log("02" > 1);//same for this

console.log(null > 0);//this will print false
console.log(null == 0);//this wil also print false
console.log(null >= 0);//this will print true which defines that null has some value 
//The reason is that an equality check == and comparison > < >= <= work differently
//Comparison convert null to a number, treating it as 0.
//That's why null >= 0 is true and null > 0 is false

console.log("2" === 2);// === compares and also check the datatypes of the parameters
//ARRAYS :- In javascript arrays enables storing a collection of multiple items under a single variable. Item can be of different datatypes.
//JavaScript array-copy operations create shallow copies.
//Shallow copiy: A shallow copy of an object is a copy whose properties share the same references to the original object.
//Deep copy: A deep copy of an object is a copy who does not share the same reference to the original object.

const myArr = [0, 1, 2, 3, 4]
const myHeroes = ["Ironman", "Hulk"]

const myArr2 = new Array(1, 2, 3, 4, 5)//here we declare it as array so it will automatically put square brackets around the array.

console.log(myArr[1]);//this will print the number at 1 index in myArr array.
//Indexig of the arrays starts from 0.

//ARRAY METHODS

myArr.push(6)//this will add 6 at the end of the array
myArr.push(7)//this will add 7 at the end of the array
myArr.pop()//this will remove the last item of the array
console.log(myArr);

myArr.unshift(9)//this will shift all the values to the right and add a number to starting of the array
console.log(myArr);
myArr.shift()//this will remove the first element from the array by shifting the array to left.
console.log(myArr);

console.log(myArr.includes(9));//this will check if the array contais the entered item or not and give answer in true or false.
console.log(myArr.indexOf(3));//this will print the index of the entered value in a array and if the value doesn't exit it will print -1.

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);// this will join two arrays together and print it in the form of string or we can say that .join() converts the joined array into string seperated by commas.

// SLICE, SPLICE

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);//This will slice the array from the given intervals but it will not include the ending index of slicing.
//this does not manipulate original array
console.log(myn1);

const myn2 = myArr.splice(1,3) //This will slice the array from the given intervals and it also includes the ending index of slicing.
//this manipulate original array.
console.log(myn2);
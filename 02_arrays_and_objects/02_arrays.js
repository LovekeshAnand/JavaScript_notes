const marvel_Heroes = ["ironman", "spiderman", "hulk"]
const dc_Heroes = ["batman", "superman", "flash"]
const all_Heroes = marvel_Heroes.concat(dc_Heroes)//This is used add two different string and make a new string which contains the element of both the string
console.log(all_Heroes);

//if we use push() for adding the arrays it will add an array like a element which look like a array into an another array.

const all_new_heroes = [...marvel_Heroes, ...dc_Heroes]//this will spread the elements of both the array and store it in a new array. we can do it with multiple arrays.
//This operator is known as spread operator.
console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
console.log(another_array.flat(Infinity));//this will get all the arrays and subarrays and make it into a simple new array, Infinity describes the depth of the array. 
//We have to use numbers for it, depth of the array is described as the number of subarrays in a array. We can use infinity to automatically detect the depth.

console.log(Array.isArray("Lovekesh"));//This will check if the data entered is array or not and give answer in true or false
console.log(Array.from("Lovekesh"));//This will convert the entered data into array.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//this will return a array with set of elements entered.
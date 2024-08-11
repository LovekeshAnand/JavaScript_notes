//MAPS
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(myNumbers.map( (num) => num + 10))

//CHAINING

const nums = myNumbers
                .map((num) => num* 10)
                .map((num) => num + 1)
                .filter((num) => num > 40)// we can use map after after and filter also this is known as chaining, it is mostly used when there are many conditions and operations needed
                //to be performed on a single data

console.log(nums);

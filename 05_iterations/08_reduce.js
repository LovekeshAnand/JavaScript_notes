//REDUCE
const myNums = [1, 2, 3]

// console.log(myNums.reduce((acc, currval) => (acc + currval), 0))//This is known as reduce function
//The 0 at the end is known ad initial value of the accumulator the current value of the array is added to initial value and stored in accumulator 
//This process occurs till the end of the array and the final value of accumulator is returned

//We can do this like
const initial_value = 0;

const myTotal  = myNums.reduce(function (accumulator, current_value) {
    console.log(`acc: ${accumulator} and currval: ${current_value}`);
    return accumulator + current_value
}, initial_value)

console.log(myTotal)
//This is the proper syntax of reduce
//This will return
// acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3
// 6


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
//this is a example which can be used in a project
//This examples can return grand total to pay.
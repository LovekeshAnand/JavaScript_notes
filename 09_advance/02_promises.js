//Promise is basically an object
//In ecmascript version 5, we do not have promise to use. Promises were only available inside libraries, one of the most popular library to use promises was bluebird. Later nodejs has introduced promises inside itself so that there is no need to install any library to use promises.
//promiseOne
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network 
    setTimeout(function(){
        console.log('Async Task is complete')
        resolve()//here resolved is directly connected to .then keyword, when the promiseone is resolved, then the promiseOne.then will tell us that the promis is consumed
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");   
})//this will display when the promise is consumed

//Here we can do the above two parts in a single part only by not storing the promise into a variable and usign .then keyword just after the promise
//promiseTwo
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()//here we use resolve() to send response to .then() to complete the execution after the promise is completed. when the promise is completed or resolved it send response to .then that promise is completed and it can execute the 
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})


//promiseThree
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({usename: "Chai", email: "chai@example.com"})//with this syntax we can send data through resolve to .then
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


//promiseFour
const promiseFour = new Promise(function(resolve, reject){
    setTimeout( function(){
        let error = false
        if(!error){
            resolve({username: "lovekesh", password: "123"})
        }
        else{
            reject('ERROR: something went wrong')
        }
    }, 1000)
})

//this is known as chaining.
promiseFour.then((user) => {
    console.log(user);
    return user.username

}).then((username) => {
    console.log(username); //to extrtact username from the data recieved, we used chaining of .then.  

}).catch(function(error){//here we used .catch to handle rejections through the promise
    console.log(error);

}).finally(function(){
    console.log("The promise is either resolved or rejected");//this is like a default condition. Either the promise or resolve or rejected, this will execute.
    
})


//promiseFive

const promiseFive = new Promise(function(resolve, reject){
    setTimeout( function(){
        let error = true
        if(!error){
            resolve({username: "JavaScript", password: "123"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
       try {
            const response = await promiseFive
            console.log(response);
       } catch (error) {
            console.log('ERROR')
       }
}
//if the error was true async await cannot directly handle the errors
//if we want to handle the error we can use try and catch error
consumePromiseFive()


// async function getAllUsers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/')
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log("E:", error);
//    }
    
// }
// getAllUsers()

//another way writing above code
fetch('https://jsonplaceholder.typicode.com/users/')
.then((response) => {
    return response.json()
})
.then((data) => {console.log(data)})
.catch((error) => {
    console.log(error)
})
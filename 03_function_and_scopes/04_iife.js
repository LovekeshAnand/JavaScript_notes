//Immediately Invoked Function Expressions (IIFE)

(function one(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

// (this is the function definition)()//this is the function execution
//thih is known as immediately invoked function expressions
//IIFE is used to reduce the pollution of gloabal scope.

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("Lovekesh");//this is how we can declare parameters into IIFE
//semicolon is needed to end a IIFE otherwise we will get an error
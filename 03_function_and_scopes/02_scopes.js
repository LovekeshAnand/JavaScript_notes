var c = 300

if(true){
    let a = 20 
    const b = 30
    var c = 40
}//everything in this is known as block scope
//and everything outside this is known as global scope

// console.log(a);
// console.log(b);
console.log(c);//here 40 will be printed and that is the problem because c has been declared two times
//but still the c is printed from the if condition

//That's why let is mostly used during programming.

function one(){
    const username = "lovekesh"

    function two(){
        const website = "youtube"
        console.log(username);// this will be executed because nested scope can access scope which is out it.
    }
    // console.log(website);//this will not execute because the scope cannot access nested scope which is in it.

    two()
}
one()



addone(5)//here it will not throw any error and execute
function addone(num){
    return num + 1
}

addtwo(6)//here it will throw an error and say that it cannot access addtwo before initialization
//one of the reason is, that the function is stored in a variable it is also known as expression
const addtwo = function(num){
    return num + 2
}
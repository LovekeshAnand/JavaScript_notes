// Stack memory is used in (Primitive datatype)
//In stack we get a copy of of our value to make changes
//Heap memory is used in (Non-primitive datatype)
//In heap we get a reference to the orignal value to make changes

let myname = "lovekeshanand"

let anothername = myname
anothername = "chaiorcode"

console.log(myname);
console.log(anothername);

//object example for heap data as it is non-primitive type and use heap
let userone = {
    email: "lovekeshanand06@gmail.com",
    upi: "user@upi"
}

let usertwo = userone

usertwo.email = "lovekeshanand09@gmail.com"//here we changed the email of userone which results in changining the email of userone too.

console.log(userone.email);
console.log(usertwo.email);// here the usertwo hase taken reference from the heap data of userone


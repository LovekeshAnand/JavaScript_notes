//ES6


// class User {
//     constructor(username, email, password) {
//         this.username = username,
//         this.email = email,
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const newUser = new User("Lovekesh", "example@.com", "lovekesh123")
// console.log(newUser.encryptPassword());

// console.log(newUser.changeUsername());


//Behind the scene
//making the same programe using prototype
function UserTwo(username, email, password){
    this.username = username,
    this.email = email,
    this.password = password
}

UserTwo.prototype.encryptPassword = function(password){
    return `${this.password}abc`
}

UserTwo.prototype.changeUsername = function(username){
    return `${this.username.toUpperCase()}`
}

const newUserTwo = new UserTwo("LovekeshAnand", "example123@.com", "lovekeshanand234")
console.log(newUserTwo.encryptPassword());
console.log(newUserTwo.changeUsername())


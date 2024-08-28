class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ //"static" keyword will stop this function to use
        return `123`
    }
}

const newUser = new User("Lovekesh")
// console.log(newUser.createId()) //this will print that "newUser.createId() is not a function" because we have put "static keyword with it"

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());
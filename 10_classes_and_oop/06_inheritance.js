class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{ //here "extends" keyword is similar to the __proto__ keyword. Here "extends" gives the access of another class to this class.
    constructor(username, email, password){
        super(username) //here "super" keyword will get access to the properties of the another class which is used by using "extends" keyword.
        this.email = email,
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const newUser = new Teacher("lovekesh", "example@.com", "lovekesh123")
newUser.addCourse()
newUser.logMe()//this shows that Teacher class also have the access to the functions of User class. 

const newUSerTwo = new User("LovekeshAnand")
newUSerTwo.logMe()//here we are using logMe() function which we declared inside the User class

console.log(newUser === newUSerTwo);
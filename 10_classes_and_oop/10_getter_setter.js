class User{
    constructor(email, password){
        this.email = email,
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }//using getter the value will be returned in upper case format
    set email(value){
        this._email = value
    }//using setter the value will be set in the database as entered

    get password(){
        return `${this._password}123`//the value we are returning to the user is this. 
    }

    set password(value){
        this._password = value// the value we are storing in out databse is the original value.
    }
}


const newUser = new User("example@.com", "abc")
console.log(newUser.password);
console.log(newUser.email);
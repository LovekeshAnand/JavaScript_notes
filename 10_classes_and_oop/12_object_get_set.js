const User = {
    _email: 'example@.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase() //this basically returns the value as per the need of the user.
    },

    set email(value){
        this._email = value//this basically locks the value in the memory
    }
}

const newUser = Object.create(User)
console.log(newUser.email);
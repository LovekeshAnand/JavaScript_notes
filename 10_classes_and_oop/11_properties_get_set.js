//this another way of using getters and setters
//using underscore before property defines that it's a private property and not for use of users

function User(email, password){
    this._email = email;
    this._password = password


    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(){
            this._email = value
        }

    })
      
    
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(){
            this._password = value
        }

    })
}

const newUser = new User("example@.com", "abc")
console.log(newUser.email);

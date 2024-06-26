class User {
    constructor(email,password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(val){
         this._email = val
    }

    get password(){
        return `${this._password}nikhil`
    }

    set password(val){
        this._password = val.toUpperCase()
    }
}

const nikhil = new User("nikhil@gmail.com","gfhdsjD") 
console.log(nikhil.password)
console.log(nikhil.email)
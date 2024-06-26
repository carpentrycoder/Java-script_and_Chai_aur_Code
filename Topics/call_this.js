function setUsername(username) {
    //complex calculation
    this.username = username
    console.log("fucntion is called");
}

function createUser(username, email, password) {
    setUsername.call(this,username) 

    //this.username = username
    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@gmail.com","12345")
console.log(chai);
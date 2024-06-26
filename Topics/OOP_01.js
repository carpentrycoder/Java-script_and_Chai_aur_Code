//JS and classes 

//OOP

const user = {
    username: "nikhil",
    logincount:8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("got user details");
        //console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

const user2 = {
    username: "sutar",
    logincount:10,
    signedIn: true,

    getUserDetails: function(){
        //console.log("got user details");
        //console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

function user3(username,logincount,isloggedIn){
    this.myusername = username;
    this.countlogin = logincount;
    this.isloggedIn_my = isloggedIn;

    return this;
}

const sutar = new user3("mahesh",4,false);

const nikhil =  new user3("nikhil",3,true);
console.log(nikhil);
console.log(sutar);
//console.log(user.username);
//console.log(user2.username);

//console.log(user.getUserDetails());
//console.log(this);
//let myName = "nikhil   "
//let mychannel = "codingdesk   "
//console.log(myName.truelength);

let myheros = ["thor", "spiderman", "ironman"]

let heroPower = {
    thor: "strombreaker",
    spiderman: "Web shooters",
    ironman: "Jarvis and Suit" ,
    gethero: function(){
        console.log(`power of spiderman is ${this.spiderman}`);
    }
}

Object.prototype.nikhil = function(){
    console.log(`nikhil is present in all objects`);
}

heroPower.nikhil()
// let's check for arrays
myheros.nikhil();


//inheritance

const User = {
    name: "mahesh",
    company: "google"
}

const Sutar = {
    makevideo: true
}

const Teachingsupport = {
    isAvailable: false
}

const TAsupport = {
    makeassignment :'JS assignment',
    fulltime: true,
    __prot__ : Teachingsupport
}

//modren syntax 

const mahesh = Object.setPrototypeOf(Sutar,Teachingsupport);
console.log(mahesh);

let oneuser = "nikhilsutar   "

String.prototype.truelength = function(){
    console.log(`${this.name}`);
    console.log(`true legth is ${this.trim().length}`);
}

oneuser.truelength()
"mahesh".truelength()
"shiv".truelength()

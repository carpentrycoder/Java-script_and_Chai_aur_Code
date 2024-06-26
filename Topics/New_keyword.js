//prototypal behaviour matlab haar nahi manana

function multiplyBy5(num){
    return num+5
}

multiplyBy5.power = 2

console.log(multiplyBy5(2));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increament = function(){
    this.score++
}
const tea = new createUser('mahesh',7);
console.log(tea);
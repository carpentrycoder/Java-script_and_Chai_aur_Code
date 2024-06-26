//first js promise 
const promiseOne =  new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log('async task is complete');

    },1000)
})

promiseOne.then(function(){
    console.log('promise consumed');
})

//2nd js promise 

const promisetwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({user:"nikhil",no:"7738544966"})
    },1000)
})

promisetwo.then(function(user){
    console.log('we are from promise two:' );
    console.log(user);
})

//promise three

const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"nikhil",pass:"12345"})
        } else{
            reject('erreo in code check it again');
        }
    },1000)
})

promisethree.then((user)=>{
    console.log(user);
    return user.username ; 
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("finally"));


// promise four

const promiseFive = new Promise(
    function(resolve,reject)
    {
        setTimeout(function()
        {
            let error = false;
            if(!error)
            {
                console.log("we are from 4 promise");
                resolve({username:"Mahesh Chaodhary", location:"badlapur"});
            } else {
                reject('error Js went wrong');
            }
        },1000)
    })

async function consumePromise(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromise();
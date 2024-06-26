/*
 * Closures JavaScript mein ek technique hoti hai jo function ko apne lexical scope yaad rakhne deti hai, 
 * even after the function execute ho chuki hoti hai. Basically, jab ek inner function apne outer function 
 * ke variables ko access karta hai, toh closure create hota hai.
 */

// Ek example se samjhte hain:

function outerFunction() {
    let outerVariable = "I am outside!"; // outerFunction ke scope mein ek variable

    function innerFunction() {
        console.log(outerVariable); // innerFunction outerVariable ko access kar raha hai
    }

    return innerFunction; // outerFunction innerFunction ko return kar raha hai
}

const myClosure = outerFunction(); // outerFunction call ho rahi hai aur innerFunction return ho raha hai
myClosure(); // Output: "I am outside!" // myClosure call hone par innerFunction execute ho raha hai

/*
 * Is example mein, outerFunction ek innerFunction return karta hai jo outerVariable ko access kar sakti hai, 
 * even after outerFunction execute ho chuka hai. Yahi closure ka magic hai!
 */

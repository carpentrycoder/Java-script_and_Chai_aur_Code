//filter 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evennums = 
numbers.filter(function(number){
    return number % 2 === 0 ;
});

console.log(evennums);

// map

const nums = numbers.map(num => num + 10);

console.log(nums); // Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// reduce

const mytotal = numbers.reduce(function(acc,currval){
    console.log(`acc: ${acc} and current value is : ${currval}`);
    return acc+currval
},3)

console.log(mytotal);
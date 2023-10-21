// try not run below in js, can you tell which of the following are showing true?
let a = 1
let b = 2
let c = 3

console.log(a > b);  //f
console.log(c < b * 2); //t

d = b + a * 2   // 4
console.log(d > c); //t

a = 10 
console.log( a % b == 0 );  //t
console.log("50" == (b + c) * a);  //f
// console.log(50 is (b + c) * a);     //????

// console.log(True or False)  //???

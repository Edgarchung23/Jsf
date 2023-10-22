// Day02

// - Function & arrow function
// - 1.create function - keyword NAME(variable) { })
// function add(first, second){
//     return first + second;
// }


// console.log("XXXXXXXX");
// if - else
// if (march_num + navy_num < 20) {
//     console.log("Condition 1: Bigger");
// } else if (march_num + (theta_num % 2) == 0) {
//     console.log("Condition 2: the sum is not even")
// } else {
//     console.log(" Condition: Small");
// }

let march_num = 10;
let edgar_num = 10;
const navy_num = 7;
let joz_num = 6;
let theta_num = null;
// function checkStudent() {
//     if (march_num + navy_num < 10) {
//         console.log("Condition 1: Bigger");
//     } else if (march_num + (theta_num % 2) == 0) {
//         console.log("Condition 2: the sum is not even")
//     } else {
//         console.log(" Condition: Small");
//     }
// }
// checkStudent();

// function aaa (){
//     const a = 10
//     console.log("aaaa" + a);
//     console.log("123321 in function", 11);
// }               //如在function內const的數值，在完成function後會影響，需重新定義

// aaa()
// console.log("11111 in global scope, 11");
// let a = 222
// console.log ("abc", a);

//traditional function

// function addHurdred(a) {
//     return a + 1;
// }
// console.log("joz new num", addHurdred(joz_num));
// let new_joz_num = addHurdred(joz_num);
// console.log("joz new num in variable", new_joz_num);

// Arrow function
// 1. remove keyword "function" 
// 2. (argument) => { body }

const isAdult = (age) => {return age > 18 ? "Adult" : "underage" }
console.log(isAdult(15));
console.log(isAdult(20));

// - assignment vs comparison

// - control flow
// - arrau & ovject
// - Ex5


// - group / individual review
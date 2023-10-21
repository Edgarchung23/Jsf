//Primitive Data Type

//Boolean
console.log(true);
console.log(false);

String, Number
let num = 12 
let fakeNum = "12"
let mytrueValue = true;

// Typeof = Type Checking
console.log(typeof num);    //Number
console.log(typeof fakeNum);    //String
console.log(typeof myTrueValue); //boolean

//Str, num.replace()
console.log(fakeNum.replace("2", "e")); //如用num的話會出錯，因不同類型

// ParseInt 可將string -> number
console.log(parseInt(fakeNum));
// console.log(parseInt(myTrueValue))  //NaN
console.log(parseInt(num).toFixed);
console.log(parseFloat(13.6666).toFixed(2)); 
let floatNum = 13.666666;
console.log(floatNum.toFixed(4)); //13.67

//Operator
// console.log((num) + fakeNum) //1212 - 會變成連接而不是加數
// console.log((num) + parseInt(fakeNum)); //需要parseint來轉為加數
// console.log(typeof(num + fakeNum));
console.log((num) == fakeNum);  // t
console.log((num) === fakeNum); // f
console.log((num) != fakeNum);  // f
console.log((num) !== fakeNum); // f
console.log((num) < floatNum);  // t

console.log(!!true);
console.log(1 + "1");

console.assert("~~~~~~~~~");
console.log(typeof null);   //object
console.log(typeof undefined);  // undefined
console.log(typeof Nan);    //number

console.log(1 + true + true);
console.log(1 + false);
let x;
console.log(x != null);
console.log(x !== null);
console.log(x / null);
console.log(x + "hihihi");
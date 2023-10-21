// const RegistrationNumber = (Math.floor(Math.random() 
//                           * Math.floor(70) +1 ))
// console.log ('RegistrationNumber: ' + RegistrationNumber)

// const Row = (Math.floor(Math.random() * Math.floor(10) +1 ) / 7)
// console.log ('Row: ' + Row)

// const Column = (Math.ceil(Math.random() * (Math.floor(70) +1 )))
// console.log ('Column: ' + Column)





const random = Math.floor(Math.random() * 70) + 1   //籌號，先用mathfloor將小數點整走，之後會出現0，在最後面加番 1
const row = Math.ceil(random / 7)   //排數，先除排數7，再用mathceil將小數點進位到7
const column = (((random -1)% 7) +1)    //座位，先將random數字－1（因7號座位％7後會顯示0，再％7之後才加番 1就不會出現7號座位變0

console.log('RegistrationNumber: ' + random)
console.log('Row; ' + row)
console.log('Column;' + column)
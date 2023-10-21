const all = 63
const second = 63 % 60
const min = (all - second) / 60

// console.log(min)
// console.log(second)
console.log( min + 'm' + second + 's')


const all2 = 27369
const second2 = 27369 % 60
const min2 = (all2 - second2) / 60
const hour2 = (min2 - min2 % 60) / 60 
// 唔明min － min ％ 60 呢個步驟

// console.log (hour2)
// console.log (min2)
// console.log (second2)
// 如果打完再用／／隱藏會否不太好睇？


console.log(hour2 + 'h' + min2 % 60 + 'm' + second2 + 's')  
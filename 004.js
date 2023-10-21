console.log ("Test")
//直接console.log是第一種function

const lastCharacter = "Test".substring(3) 
console.log (lastCharacter)
//依附在string身上的是第二種function，如substring
// function和method 相同

console.log (Math.max(1, 2, 3, 4, 5))
console.log (Math.min(1, 2, 3, 4, 5))

console.log (Math.floor(1.05))      //有小數點時不會進位,去除小數點
console.log (Math.ceil(1.05))       //有小數點時會進位 ＝ 2
console.log (Math.round(1.5))       //四捨五入
console.log (Math.round(27999 / 1000) * 1000)       // 先除1000變做小數點讓round進位，再乘1000

const all = 27369
console.log (Math.floor(all /60))       //可直接用mathFloor直接扣走小數點，不需另外計算扣除小數點

console.log(Math.random())  //不用打參數會出現小於1的隨機數字 
console.log(Math.floor(Math.random() * Math.floor(99)))   //出現0－4的數字，0－0.999 ， 先用mathfloor確保是整數


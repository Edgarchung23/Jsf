const employee = "Chan Tai Man"     //const不能重新定義參數

let x = 1   //在let之後可以重新定義參數，如數字則可重疊

// x = x + 1
// console.log(x)

// x = x + 1
// console.log(x)

while (x < 10) {  //不停重覆執行，按Control ＋ c 可暫停
    console.log(x)
    x = x + 1   //用while執行時會直到滿足條件才會暫停，即9時會停止執行
}

console.log('Done!')

let y = 2
// 2, 4, 6, 8, 10, ...20
while (y <= 20) {
    console.log(y)
    y = y + 2
}
//let x = 1     如到中間想重新定義x，不需要用let，直接x ＝ 1 就可重新定義1

x = 1

while (x<= 10) {
    console.log(x * 2)
    x = x + 1           //此指令仍會執行到10，但consolelog後出現的數字將會＊2
}

// x     : 0, 1, 2, 3, 4, 5
// output:0, 1, 0, 1, 0, 1

x = 0 

while (x<6) {
    x = x + 1
    console.log (x % 2)
}

//*
//**
//***
//**** 
//*****

let Star = '*'      //簡單做法
x = 0
while (x <5) {
    console.log(Star)
    Star = Star +'*'
    x = x + 1
}

x = 0
while (x <5) {
    star = '*'

    let y = 0
    while(y < x) {              //每當執行時y都會重置為0，而x每次都會＋1
        star = star + '*'
        y = y + 1
    }
    console.log(star)
    x = x + 1
}
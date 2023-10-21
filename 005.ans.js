const Price = 2100000

// if (Price <= 200000) {
//     console.log(Price * 0.015)
// }

// if (Price >= 2000000 && Price < 2176470) {
//     console.log((Price - 2000000) * 0.2 + 30000)
// }else if (Price >= 2176470) {    //加else的話可把兩組指令變成一組執行(6-9)
//     console.log(Price * 0.3)
// }

// if (Price >= 3000000) {
//     console.log((Price - 3000000) * 0.2 ) + 90000
// }

if (Price >= 2176470) {     //先將大銀碼放前，
    console.log(Price * 0.03)
} else if(Price >=2000000) {
    console.log(30000 + (Price - 2000000) * 0.2)
} else {
    console.log(Price * 0.015)      //將銀碼小於2百不大於2百萬的＊0.015
}

const randomList = []

let x = 0
while ( x < 10) {
    randomList.push(Math.floor(Math.random() * Math.floor(10) + 1))
    x = x + 1
}
console.log(randomList)
console.log(randomList.length)

const randomList2 = []

let y = 0
while ( y < 10) {
    const num = Math.floor(Math.random() * 10) + 1
    if (num % 2 ==0) {      //將random數除2拿餘數，如＝0則雙數，會放最後
    randomList2.push(num)

} else {        //單數則放最前
    randomList2.unshift(num)
}
    y = y + 1
}

console.log(randomList2)


let x = 10

while (x >= 0) {
    console.log(x)
    x = x - 1
}


// let star  = "*****"
// x = 0
// y = 5
// while (x < 5) {
//     console.log(star)  
//     x = x + 1
//     star = star - "*"
   

let a = 0           //不太明白
while (a < 5) {
    let star = ''

    // let c = 0       
    // while (c < a) {
    //     star = star + ' '
    //     c = c + 1
    // }
    let b = 5 - a
   while (b > 0) { 
        star = star + '*'
        b = b - 1
     }

     console.log(star)
     a = a + 1
}


let arr = [4, 7, [], ["name", ["excellent"]], [true], false]

console.log(arr[3])
console.log(arr[2])
console.log(arr[3][1][0])       
// Array 疊
// Pyhton List
// [] = 清單, 內容可以改動，students ＝ a4 紙，內容上可任意修改
const students = ["Alex", "Gordon", "Michael", "Chan Tai Man", "Jason", "Peter"]

// console.log(students[1])    //如果從Array內拿一個數值則不用打 ( . )
// console.log(students[0])
// // console.log(students[3])
// console.log(students[students.length - 1])      // - 1 ＊是因為由0開始數起＊  

// console.log(students.length)

// students[0] = students[0] + " Lau"  //可以選擇[]內任何一個參數作出改動
// students.push("Tracy")   //新增一個數值放到最尾
// students.pop("")  //移除最後一個數值
// students.unshift("Edgar")  //加一個數值在最前
// students.shift()    //移除最前的一個數值                         

// let x = 0
// while (x < students.length) {


//     console.log(students[x])
// x = x + 1
// }

// create an array [0, 1, 2, 3, 4, 5, 6]
let y = 0
let numLists = []
while (y < 7) {
    numLists.push(y)
    y = y + 1
}
console.log(numLists)

// create an arry (6, 5, 4, 3, 2, 1, 0)
// let x = 6
// let Lists = []
// while (x >= 0 ) {
//     Lists.push(x)
//     x = x - 1
// }
// console.log(Lists) 

let z = 0
let numLists2 = []
while (z < 7) {
    numLists2.unshift(z)
    z = z + 1   
}
console.log(numLists2)      //為何會出現空白在[  ]
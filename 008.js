// Object

const alex = {           //在{}內的必會定義為object
    "name": "Alex",     //object之間需要加 , 以作分隔或日後再修改
    "gender": "M",
    "height": 170,      //Key不能重覆
    "living-place": "Hong Kong",
}

console.log(alex["height"])
console.log(alex.height)    //如使用.則不用加[]

//console.log(alex.living-place)如定義時有 - 之類的符號在consolelog後會示為math的減，將不能運行
console.log(alex["living-place"])     //如有符號或空白在內的話必需要用[""]去作顯示

const students = [      //運用Array可在｛} 內放object
    {"name": "Alex", "height": 170,},   //object內的string可偷懶不用打"",但加上""可立即看到string
    {"name": "Gordon", height: 180},       
]

students[0].height = 172        //如該值需經常改動可作定義
students[1]["living-place"] = "Hong Kong"  //可以在ojbect上再加
delete students[1]["living-place"]  //可直接(Delete)
console.log(students[0]["height"])
console.log(students[0].height)
console.log(students)

const checkDuplicate = {}       //{}代表是object
const chars = ["a", "b","a", "c", "d", "e", "d"]    //object內重覆的不會計算在內
let x = 0

while (x < chars.length) {
    if (checkDuplicate[chars[x]] == true) {
        console.log(chars[x] + " is duplicated")
    }
    checkDuplicate[chars[x]] = true
    console.log(checkDuplicate)
    x = x + 1
}

console.log(checkDuplicate)

// let x = 0                       //可顯示各字母出現了多少次
// while (x < chars.length) {
//     if (checkDuplicate[chars[x]] == null) {  //null = 無
//         checkDuplicate[chars[x]] = 0
//     }
//     checkDuplicate[chars[x]] = checkDuplicate[chars[x]] + 1
//     console.log(checkDuplicate)
//     x = x + 1
// }

console.log(checkDuplicate)
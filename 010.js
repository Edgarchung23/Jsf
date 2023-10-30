//Array2

// const students = ["Gordon", "Alex", "Michael", "Edgar", "Peter"];
// // students.splice(1, 1)   //Splice抽走array其中一個數值，後面的(1)代表抽走多少個數值
// students.sort()     //順abc次序排列,只適用於簡單array內,如(1),當處於(14)時將沒效
// students.reverse()  //將sort的次序調轉排列，如不先運行sort直接reverse，將不會依abc次序倒轉排列
//                     //會顯示P-E-M-A-G
//                     //如先運行sort將顯示P-M-G-E
// console.log(students.indexOf("Michael"))//=1    //會顯示為Michael，因Alex被splice所以michael ＝ 1
// console.log(students.indexOf("Alex")) //=4
// console.log(students)



const students = [
    {"name": "Gordon", "age": 30},
    {"name": "Alex", "age": 31},
    {"name": "Michael", "age": 32}
]   
// Mutation     //可改變
// array.push, array.pop, array.shift, array.unshift 
// students.sort(function(studentA, studentB){
//     if (studentA.name > studentB.name) {
//         return 1

//     }else if (studentA.name < studentB.name) { //留意一下大細階，經常打錯
//         return -1
//     }else{
//         return 0
//     }
// }) 
// console.log(students)

// Immutation 
// console.log(students.findIndex(function(student) {  //findInxde = 需要放function讓array執行
//  if (student.name == "Alex") {
//     return true;
//     }else{
//     return false;
// }
// }))

console.log(students.some(function(student){
    if (student.age > 30) {
        return true
    }
}))
// console.log(students.find(function(student) {
//     if (student.name == "Alex") {
//         return true
//     }else {
//         return false;x   
//     }
// }).age)     //可以在find-function()結束後加上.age ETC


// // .map, .filter, .reduce   
// console.log(students.map(function(student) {    //.map  N input N output
//     return student.name     
// }))

// console.log(students.filter(function(student) {
//     return (student.age <= 30 )
//     }
// ))

// let x = 0
// let qualifiedStudents = [];
// while (x < students.length) {
//     if (students[x].age <= 30) {
//         qualifiedStudents.push(students[x])
//     }
//     x++;
// }
// console.log(qualifiedStudents)
// console.log(students)

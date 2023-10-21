// console.log ("I am Edgar Nice to meet you")
//let vs const
//let - mutable || const - inmutable

// let a = 5;
// const b = 6;
// console.log (a,b)

// a = 7
// // b = 7
// a = 3
// console.log (a,b)

// Here is an example of the function rnaTranscription in action.
// rnaTranscription("GCTAGCT") > "CGAUCGA";
// create a function named rnaTranscription
//logic : G->c, C->G, T->A, A->U

// function rnaTranscription(string){
//     console.log(String)
// }

// function greeting(name) {
//     console.log(`i am ${name}`)
// }
// function greetingall(name,name2,name3) {
//     console.log(`i am ${name},they are xxxxx`)
// }  

// rnaTranscription("eweewew")

// greetingall("March,Edgar")
// // greeting("March", "Lyn")
// // greeting("March", "Edgar")
// // greeting("Theta")

let lyn_cohort = 16;
function greeting() {
    let march_cohort = 29;  //march_cohort is defined in scope
    lyn_cohort = 19; //value changed
    console.log("line42", march_cohort); //29
    console.log("line43", lyn_cohort); //19

}
// greeting()
let march_cohort = greeting()
console.log("line47", lyn_cohort); //16
console.log("line48", march_cohort);



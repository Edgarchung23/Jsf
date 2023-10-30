// function  Range(num) {
//     // if(num <= 5)
//     // return [0, 1, 2, 3, 4]

// //     // else (num = 10)
// //     // return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// // }
// // console.log (Range(5))

// function range(num) {
//     let x = 0
//     let arr = []
//     while (x < num) {
//         arr.push(x)
//         x = x + 1
//     }
//     return(arr)

// }
// console.log(range(10))
// console.log(range(5))


// const Staff = [
//     {"Name": "Alex", "Yearsofwork":6, "Performance":"Poor", "Monthlysalary":10000},
//     {"Name": "Gordon", "Yearsofwork":5.5, "Performance":"Good", "Monthlysalary":40000},
//     {"Name": "Micheael", "Yearsofwork":3, "Performance":"Good", "Monthlysalary":80000},
//     {"Name": "Jason", "Yearsofwork":7, "Performance":"Good", "Monthlysalary":70000},
//     {"Name": "Brian", "Yearsofwork":0.5, "Performance":"Good", "Monthlysalary":20000},
// // ]
// function StaffBonus() {
//     if (Yearsofwork >= 1) {
//         return (Monthlysalary * 1)
//     }
//         else if (Yearsofwork >5) {
//             return (Monthlysalary * 2)

//         }
//     }

function bonusCalculator(year, performance, salary) {
        //year >=1, ans: 1x salary
        //year >=5 + performance is good, anss: 2x salary

        if (year >=5 && performance) {
            return salary * 2;
        }

        if (year >=1) {
            return salary * 1;
        }
        return 0;       //如果兩個條件都沒有滿足需要return 0，否則consolelog後會出現NAN
}
console.log(bonusCalculator(6,false, 10000))
console.log(bonusCalculator(5.5,true, 40000))
console.log(bonusCalculator(3,true, 80000))
console.log(bonusCalculator(7,true, 70000))
console.log(bonusCalculator(0.5,true, 20000))

// console.log(
//     bonusCalculator(6,false, 10000) + 
//     bonusCalculator(5.5,true, 40000) + 
//     bonusCalculator(3,true, 80000) +
//     bonusCalculator(7,true, 70000) +
//     bonusCalculator(0.5,true, 20000))

    
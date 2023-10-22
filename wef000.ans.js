// Exercise 6: Mark Six Checker
// Create a function checkMarkSix() that allow you to determine the prizes of Mark Six. For simplicity, we assume only two numbers are required for a bid and only one prize (win or lose).
// The function usage should be as follow:

// checkMarkSix([1, 3, 5, 7, 9, 11], [1, 3]); // returns: true
// checkMarkSix([1, 3, 5, 7, 9, 11], [2, 3]); // returns: false
// checkMarkSix([2, 4, 10, 15, 14, 19], [2, 19]); // returns: true
// The first parameter is the mark six result. The second parameter is the bid.

// The function should return true if the bid is contained in the result or otherwise false.
    // console.log(arr1);
    // console.log(num);

function checkArrNum(array, num) {

    for (let i = 0; i < array.length; i++) {
        // console.log(`Index ${i} value is :${array[i]}`);
        if (num === array[i]) {
            console.log(`You Win At ${i + 1} turn, Bingo :${num}`);
        return;
        }
    }
    console.log("You Lose");
}

checkArrNum([2, 4, 1, 3, 4, 5, 8, 7], 3);
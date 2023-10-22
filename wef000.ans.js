// Exercise 6: Mark Six Checker
// Create a function checkMarkSix() that allow you to determine the prizes of Mark Six. For simplicity, we assume only two numbers are required for a bid and only one prize (win or lose).
// The function usage should be as follow:

// checkMarkSix([1, 3, 5, 7, 9, 11], [1, 3]); // returns: true
// checkMarkSix([1, 3, 5, 7, 9, 11], [2, 3]); // returns: false
// checkMarkSix([2, 4, 10, 15, 14, 19], [2, 19]); // returns: true
// The first parameter is the mark six result. The second parameter is the bid.

// The function should return true if the bid is contained in the result or otherwise false.
// Function -> Comparison of two arrays (result, bids)
// -> for of loop, includes
// comparison of two arrays

function checkMarkSix(result, bids) {
  for (let bid of bids) {
    if (!result.includes(bid)) {
      //True 才會出現
      return false;
    }
  }
  return true;
}

// console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [1, 3]))
// console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [2, 3]))
// console.log(checkMarkSix([2, 4, 10, 15, 14, 19], [2, 19]))

// Bonus 1
// Create another function quickPicks() that may quickly pick several bids randomly and check against one single result.
// quickPicks([1, 3, 5, 7, 9, 11], 1); // returns: [{"bid": [1, 3], "win": true}]
// quickPicks([1, 3, 5, 7, 9, 11], 3); // returns: [{"bid": [2, 4], "win": false}, {"bid": [2, 5], "win": false}, {"bid": [7, 9], "win": true}]
// The first parameter is the mark six result. The second parameter is the number of bids.
// The function should return an array of the result object with the bid generated and the result from checkMarkSix().
// quickPicks([1, 3, 5, 7, 9, 11], 1)
// quickPicks([1, 3, 5, 7, 9, 11], 3)

function quickPicks(result, timeOfbid) {
  let summary = [];
  for (i = 0; i < timeOfbid; i++) {
    // console.log(timeOfbid)
    let bid = [getRandomInt(), getRandomInt()];
    summary.push({ bid: bid, "win:": checkMarkSix(result, bid) });
  }
  return summary;
}
function getRandomInt() {
  return Math.floor(Math.random() * 20);
}
console.log(quickPicks([1, 7, 3, 5, 9, 11], 1));
console.log(quickPicks([1, 3, 5, 7, 9, 11], 15));

// Bonus2
// genPicks
// Continued with the Quick Pick function, do not return the result immediately. Instead, print the result one by one with one second interval.

// function checkArrNum(array, num) {   //************************************
// console.log(arr1);
// console.log(num);

//     for (let i = 0; i < array.length; i++) {
//         // console.log(`Index ${i} value is :${array[i]}`);
//         if (num === array[i]) {
//             console.log(`You Win At ${i + 1} turn, Bingo :${num}`);
//         return;
//         }
//     }
//     console.log("You Lose");
// // }

// checkArrNum([2, 4, 1, 3, 4, 5, 8, 7], 3);

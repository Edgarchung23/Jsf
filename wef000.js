// Exercise 6: Mark Six Checker
// Create a function checkMarkSix() that allow you to determine the prizes of Mark Six. For simplicity, we assume only two numbers are required for a bid and only one prize (win or lose).
// The function usage should be as follow:

// checkMarkSix([1, 3, 5, 7, 9, 11], [1, 3]); // returns: true
// checkMarkSix([1, 3, 5, 7, 9, 11], [2, 3]); // returns: false
// checkMarkSix([2, 4, 10, 15, 14, 19], [2, 19]); // returns: true
// The first parameter is the mark six result. The second parameter is the bid.

// The function should return true if the bid is contained in the result or otherwise false.

function checkMarkSix(numList, bid) {
  
const number = bid;
    if (numList.includes(number)) {
      return true;
    }else{
      return false;
}}
  const numList = [1, 3, 5, 7, 9, 11];
  const bid = [1, 3];
  console.log(checkMarkSix(numList, bid)); 
  
  const bid2 = [2, 3];
  console.log(checkMarkSix(numList, bid2)); 
  
  const numList2 = [2, 4, 10, 15, 14, 19];
  const bid3 = [2, 19];
  console.log(checkMarkSix(numList2, bid3)); 

  // Bonus 1
  //Create another function quickPicks() that may quickly pick several bids randomly and check against one single result.
  //quickPicks([1, 3, 5, 7, 9, 11], 1); // returns: [{"bid": [1, 3], "win": true}]
  //quickPicks([1, 3, 5, 7, 9, 11], 3); // returns: [{"bid": [2, 4], "win": false}, {"bid": [2, 5], "win": false}, {"bid": [7, 9], "win": true}]
  //The first parameter is the mark six result. The second parameter is the number of bids.
  //The function should return an array of the result object with the bid generated and the result from checkMarkSix().
  //  quickPicks([1, 3, 5, 7, 9, 11], 1)
  //quickPicks([1, 3, 5, 7, 9, 11], 3) 


//   function quickPicks(numList, bid) {
//     const numer = bid;
//     if

//   }

  
// Exercise 1: Your first program

// var sum = 1 + 1;
// let sum2 = 1 - 1;
// const sum3 = (10 * 2 / (2 % 5))
// console.log(sum, sum2, sum3);

// // par2
// let PTS = 20; 
// let REB = 8; 
// let AST = 5; 
// let STL = 2; 
// let BLK = 1; 
// let missedFg = 3;
// let missedFt = 1;
// let T0 = 1;
// let GP = 2;
// let efficiency = ((PTS + REB + AST + STL + BLK) - missedFg - missedFt - T0) / GP

// console.log("value of players: " + efficiency);

// ------------------------------------------------------------------------------------------
// Exercise 2 : Leap Year



























// Exercise 6: Mark Six Checker
// Create a function checkMarkSix() that allow you to determine the prizes of Mark Six. For simplicity, we assume only two numbers are required for a bid and only one prize (win or lose).
// The function usage should be as follow:

// checkMarkSix([1, 3, 5, 7, 9, 11], [1, 3]); // returns: true
// checkMarkSix([1, 3, 5, 7, 9, 11], [2, 3]); // returns: false
// checkMarkSix([2, 4, 10, 15, 14, 19], [2, 19]); // returns: true
// The first parameter is the mark six result. The second parameter is the bid.

// The function should return true if the bid is contained in the result or otherwise false.


function checkMarkSix(numList,numList2) {
  
const number = bid;
  // console.log(numList);
    if (numList.includes(number)) {
    return true;
    }else if(numList2.includes(number)) 
      return true;
    else{
      return false;
    }
  }
  const numList = [1, 3, 5, 7, 9, 11];
  const bid = [1, 3]
  console.log(checkMarkSix(numList, bid)); 
  
  const bid2 = [2, 3];
  console.log(checkMarkSix(numList, bid2)); 
  
  const numList2 = [2, 4, 10, 15, 14, 19];
  const bid3 = [2, 19];
  console.log(checkMarkSix(numList, bid3)); 

  checkMarkSix([1, 3, 5, 7, 9, 11], [1, 3]); // returns: true
  checkMarkSix([1, 3, 5, 7, 9, 11], [2, 3]); // returns: false
  checkMarkSix([2, 4, 10, 15, 14, 19], [2, 19]) // returns: true

  // Bonus 1
  // Create another function quickPicks() that may quickly pick several bids randomly and check against one single result.
  // quickPicks([1, 3, 5, 7, 9, 11], 1); // returns: [{"bid": [1, 3], "win": true}]
  // quickPicks([1, 3, 5, 7, 9, 11], 3); // returns: [{"bid": [2, 4], "win": false}, {"bid": [2, 5], "win": false}, {"bid": [7, 9], "win": true}]
  // The first parameter is the mark six result. The second parameter is the number of bids.
  // The function should return an array of the result object with the bid generated and the result from checkMarkSix().
  //  quickPicks([1, 3, 5, 7, 9, 11], 1)
  // quickPicks([1, 3, 5, 7, 9, 11], 3) 


  // function quickPicks(numList, bid) {
  //   const numer = bid;
  //   if

  
111

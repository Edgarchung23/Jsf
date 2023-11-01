// return 0 : Both card are same;
// >=1 : Former card ranking is higher;
// <= -1 : Former card ranking is lower;

function compareCard(cardA, cardB) {
    const ranks = [
        "2","3","4","5","6","7","8","9","10",
        "J","Q","K","A"
    ];

    const suits = ["Diamond", "Club", "Heart", "Spade"];

    const [suitA, rankA] = cardA;
    const [suitB, rankB] = cardB;

    const ranksDiff = ranks.indexOf(rankA) - ranks.indexOf(rankB);
    
    if (ranksDiff !== 0) {
        return ranksDiff;
    } else {
        return suits.indexOf(suitA) - suits.indexOf(suitB);
    }
}

const cards = [
    ["Spade", "A"],
    ["Diamond", "J"],
    ["Club", "3"],
    ["Heart", "6"],
    ["Spade", "K"],
    ["Club", "2"],
    ["Heart", "Q"],
    ["Spade", "6"],
    ["Heart", "J"],
    ["Spade", "10"],
    ["Club", "4"],
    ["Diamond", "Q"],
    ["Diamond", "3"],
    ["Heart", "4"],
    ["Club", "7"],
  ];

  const array1 = [1,2, 3,4,5]
  const aarray = array1.map((x) => {
    return x + 1
  })
  console.log(aarray);
 if (Array.isArray(array1)) {
    for (let key of aarray) {
console.log(key);
    }

 }
 
// Q1 : Count the number of card which is of suit Spade ♠️. (Hints: using reduce)
    


// --------------------------------------------------------------------------
function compareCard(cardA, cardB) {
    const ranks = [
        "2","3","4","5","6","7","8","9","10",
        "J","Q","K","A"
    ];

    const suits = ["Diamond", "Club", "Heart", "Spade"];

    const [suitA, rankA] = cardA;
    const [suitB, rankB] = cardB;

    const ranksDiff = ranks.indexOf(rankA) - ranks.indexOf(rankB);
    
    if (ranksDiff !== 0) {
        return ranksDiff;
    } else {
        return suits.indexOf(suitA) - suits.indexOf(suitB);
    }
}

// // Usage
// compareCard(["Diamond", "3"], ["Spade", "5"]);   // -2
// compareCard(["Diamond", "3"], ["Spade", "3"]);   // -3
// compareCard(["Diamond", "3"], ["Diamond", "2"]); // 1
// compareCard(["Diamond", "3"], ["Diamond", "3"]); // 0



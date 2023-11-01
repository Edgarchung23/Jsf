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

  
// const result = cards.reduce((acc,currentCard) =>{
//     // console.log(currentCard);
//     let cardValue = currentCard[1][0];
//     console.log([currentCard[0], cardValue])
//     if (cardValue < "3") {
//         return ;
//     }else{
//         return ;
//     } 
//  },0)
//   compareCard(['Club', '2'], ['club', '3'])
//  console.log("Remove", result)
    


// count the number of card which is of rank3
// const  result = cards.reduce((acc,currentCard)=>{

//     console.log(currentCard);
//     if(currentCard[1] == "3") {
//         return acc + 1;
//     }else{
//         return acc
//     }},0)
//     console.log("number of card rank 3:", result);

    
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



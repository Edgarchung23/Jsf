// Ex5
// logic -> G->C , C->G, T->A, A->U

// soloution 1 :switch
// Object {"key":"value", "key2": [value2, "3"]}
// DNA : RNA


// const map = {
//     G: "C",
//     C: "G",
//     T: "A",
//     A: "U",

// };

// console.log(map["U"]) //c      ********************
function rnaTranscription(str) {
    let result = "";
    //for of -string ok
    for (const char of str) {
        switch (char) {
        case "G":
            result = result + "C"
            break;
        case "C":
            result = result + "G"
            break;
        case "T":
            result = result + "A"
            break;
        case "A":
            result = result + "U"
            break;
            default:
        }
    }
        return result;    
      // console.log(str);
}
console.log(rnaTranscription("GCTAGCT"))
rnaTranscription("GCTAGCT");
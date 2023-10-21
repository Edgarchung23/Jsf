const sentence = 'Tecky Academy is the best coding school in Hong Kong'
console.log(sentence.substring(0, 5))
console.log(sentence.substring(6, 13))
console.log(sentence.substring(0, 42).toLowerCase() + sentence.substring(42,52).toUpperCase())
console.log(sentence.substring(0, 13).toLowerCase() + sentence.substring(13, 43) + sentence.substring(43).toUpperCase())

const sentence2 = 'Tecky Academy is the best coding school in HONG KONG'
console.log(sentence2.substring(0, 14) + sentence2.substring(14, 15).toUpperCase() + sentence2.substring(15, 16) + sentence2.substring(16, 18).toLocaleUpperCase()  + sentence2.substring(18,21 ) + sentence2.substring(21,22).toUpperCase() + sentence2.substring(22, 25 ) + sentence2.substring(25, 27).toUpperCase() + sentence2.substring(27, 33) + sentence2.substring(33, 34).toUpperCase() + sentence2.substring(34, 39) + sentence2.substring(39,41).toUpperCase() + sentence2.substring(41, 43) + sentence2.substring(43,44).toUpperCase() + sentence2.substring(44, 47).toLowerCase() + sentence2.substring(47,49) + sentence2.substring(49.52).toLowerCase())

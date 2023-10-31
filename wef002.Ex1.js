// function converFirstCharCapital(input){
//   let firstLetter = input.charAt(0).toUpperCase();
//   let body = input.slice(1);
//   return (firstLetter + body);
// }


// // key:value
// // value => string | array of string | array of number | array of object (object=> key:value(string))

// const data = [{
//   name: "Hong Kong",
//   topLevelDomain: [".hk"],
//   alpha2Code: "HK",
//   currencies: [
//       {
//         code: "HKD",
//         name: "Hong Kong dollar",
//         symbol: "$",
//       },
//     ],
//   }]

// const hk = data[0]

// for(let first_level_key in hk) {
//   console.log(converFirstCharCapital(first_level_key, ":", hk[first_level_key]))

    //before console.log
    // checkif the value of key-value pair is object
    // if is object, check if is aaray
    // if is array, use for ...of
    // else use for ...in
}

//-----------------------------------------------------------------------------------------------
const data = [
  {
    name: "Hong Kong",
    topLevelDomain: [".hk"],
    alpha2Code: "HK",
    alpha3Code: "HKG",
    callingCodes: ["852"],
    capital: "City of Victoria",
    altSpellings: ["HK", "香港"],
    region: "Asia",
    subregion: "Eastern Asia",
    population: 7324300,
    latlng: [22.25, 114.16666666],
    demonym: "Chinese",
    area: 1104.0,
    gini: 53.3,
    timezones: ["UTC+08:00"],
    borders: ["CHN"],
    nativeName: "香港",
    numericCode: "344",
    currencies: [
      {
        code: "HKD",
        name: "Hong Kong dollar",
        symbol: "$",
      },
    ],
    languages: [
      {
        iso639_1: "en",
        iso639_2: "eng",
        name: "English",
        nativeName: "English",
      },
      {
        iso639_1: "zh",
        iso639_2: "zho",
        name: "Chinese",
        nativeName: "中文 (Zhōngwén)",
      },
    ],
    translations: {
      de: "Hong Kong",
      es: "Hong Kong",
      fr: "Hong Kong",
      ja: "香港",
      it: "Hong Kong",
      br: "Hong Kong",
      pt: "Hong Kong",
      nl: "Hongkong",
      hr: "Hong Kong",
      fa: "هنگ‌کنگ",
    },
    flag: "https://flagcdn.com/hk.svg",
    regionalBlocs: [],
    cioc: "HKG",
  },
];

const hk = data[0];

for (let key in hk) {
    if (key == /* some key here*/) {

    } else {
        console.log(key + ": " + hk[key]);
    }
}
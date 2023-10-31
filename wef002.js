//Gigasecond

gigasecond (){}
const birthDate = new Date((2015, 1, 24, 10, 0, 0));
const copy = new Date();
copy.setTime(birthDate.getTime());
console.log(birthDate.toLocaleDateString());






// const peter = {
//     name: "Peter",
//     age: 50,
//     students: [
//       { name: "Andy", age: 20 },
//       { name: "Bob", age: 23 },
//       {
//         name: "Charlie",
//         age: 25,
//         exercises: [{ score: 60, date: new Date("2019-01-05") }],
//       },
//     ],
//   };
// //   for (let student of peter.students) {
// //     console.log(`Student ${student.name} is ${student.age} years old`);
// //   }

//   for (let student of peter.students) {
//     if (student.exercises) { // Is `student.exercises` exist on the target object
//       for (let exercise of student.exercises) {
//         console.log(
//           `Student ${student.name} has a exercise of score ${exercise.score} submitted on ${exercise.date}`
//         );
//       }
//     }
//   }


//   const data = [
//     {
//       name: "Hong Kong",
//       topLevelDomain: [".hk"],
//       alpha2Code: "HK",
//       alpha3Code: "HKG",
//       callingCodes: ["852"],
//       capital: "City of Victoria",
//       altSpellings: ["HK", "香港"],
//       region: "Asia",
//       subregion: "Eastern Asia",
//       population: 7324300,
//       latlng: [22.25, 114.16666666],
//       demonym: "Chinese",
//       area: 1104.0,
//       gini: 53.3,
//       timezones: ["UTC+08:00"],
//       borders: ["CHN"],
//       nativeName: "香港",
//       numericCode: "344",
//       currencies: [
//         {
//           code: "HKD",
//           name: "Hong Kong dollar",
//           symbol: "$",
//         },
//       ],
//       languages: [
//         {
//           iso639_1: "en",
//           iso639_2: "eng",
//           name: "English",
//           nativeName: "English",
//         },
//         {
//           iso639_1: "zh",
//           iso639_2: "zho",
//           name: "Chinese",
//           nativeName: "中文 (Zhōngwén)",
//         },
//       ],
//       translations: {
//         de: "Hong Kong",
//         es: "Hong Kong",
//         fr: "Hong Kong",
//         ja: "香港",
//         it: "Hong Kong",
//         br: "Hong Kong",
//         pt: "Hong Kong",
//         nl: "Hongkong",
//         hr: "Hong Kong",
//         fa: "هنگ‌کنگ",
//       },
//       flag: "https://flagcdn.com/hk.svg",
//       regionalBlocs: [],
//       cioc: "HKG",
//     },
//   ];

//   const newData = data;

// const hk = data[0];

// for (let key in hk) {
//     if (key == "Hong Kong") {

//     } else {
//         console.log(key + ": " + hk[key]);
//     }
// }
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
    }];

const hk = data[0];
function convertFirstCharCapital(input) {
  let firstLetter = input.charAt(0).toUpperCase()
  let body = input.slice(1)
  return firstLetter + body }

  for (let firstKey in hk) {
      const itemValue = hk[firstKey]
      if (Array.isArray(itemValue)) {
        if (!itemValue instanceof Object) {
          console.log(convertFirstCharCapital(firstKey) + ":" + itemValue.join(","))
    }else{
      for (let a of itemValue) {
        for (let key in a) {
          console.log(convertFirstCharCapital(firstKey) + "_" + key + ":" + a[key])
    
        }
      }
    }
    }else if (itemValue instanceof Object) {
      for (let key in itemValue) {
        console.log(convertFirstCharCapital(firstKey) + "_" + key + ":" + itemValue[key])
      }
    }else{
      console.log(convertFirstCharCapital(firstKey) + ":" + itemValue)
    }
    }
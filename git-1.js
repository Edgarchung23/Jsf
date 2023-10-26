const cities = [
    "Hong Kong","Tokyo","Seoul","Taipei",
    "Singapore","New York","Paris","London",
    "Madrid","Hanoi","Moscow","Stockholm",
    "Buenos Aires","San Francisco","Kuala Lumpur","Sydney"
  ];
  
for (let i = cities.length -1 ;i >=0 ;i = i - 2){
    console.log(`${i}.${cities[i]}`)
}  

for (let i in cities) {
    // forInLoopResults.push(`${i}.${cities[i]}`)
    console.log(`${i}`)
  }

for (let citi of cities){
    console.log(citi);
}
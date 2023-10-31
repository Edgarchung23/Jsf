function makeCalculator(){
    let sum = 0;
    function add(amount){
        sum = sum + amount;
        return sum;
    }
    return add;
}

function multiply(adder,multiplier) {
    let base = adder(0);
    let value = base;

    for(let i = 1; i < multiplier; i++) {
        value = adder(base);
    }
    return value;
}


let adder = makeCalculator()
console.log("initial adder:", adder);

console.log("add(10)", adder(10));
console.log("add(20)", adder(20));

console.log("multiply(2)",multiply(adder,2));
console.log("multiply(2)",multiply(adder,0.5));
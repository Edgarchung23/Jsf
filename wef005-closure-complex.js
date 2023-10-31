function makeCalculator() {
    let value = 0

    function add(amount) {
        value = value + amount;
        return value
    }
    function subtract(amount) {
        return add(-amount)
    }
    function multiply(multiplier) {
        value = value * multiplier
        return value
    }
    function divide(dividend) {
        return multiply(1 / dividend);

    }
    function getValue() {
        return value
    }
    return {
        add: add,
        sub: subtract,
        mul: multiply,
        div: divide,
        getValue
    }
}
let calculator = makeCalculator();
console.log('calculator:', calculator)

console.log('init value', calculator.getValue());

console.log('add(10)', calculator.add(10));
console.log('add(10)', calculator.add(10));
console.log('subtract(5)', calculator.sub(5));
console.log('multiply(2)', calculator.mul(2));
console.log('divide(2)', calculator.div(2));

console.log('after calculate', calculator.getValue());
// console.log('2 cal after calculate:', second_calculator.getValue());
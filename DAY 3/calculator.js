function calculate(operation, a, b) {
    return operation(a, b);
};

function add(a, b) {
    let sum = a + b
    return sum
};

function subtract(a, b) {
    let minus = a - b
    return minus
};

function multiply(a, b) {
    let times = a * b
    return times
};

function divide(a, b) {
    if (b === 0){
        return "cannot divide by 0"
    }
    let cut = a / b
    return cut
};

console.log(calculate(add, 5, 3));

console.log(calculate(divide, 10, 0));

console.log(calculate(subtract, 100, 2));

console.log(calculate(multiply, 10, 2));

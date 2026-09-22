function makeCounter() {
    let count = 0;

    return function counter(){
        count++;
        return count
    };
};

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

const counter2 = makeCounter();
console.log(counter2());
console.log(counter());

//count lives in funnction makeCounter(); so when u call counter it increments, but when u define a new counter it creates a new count copy and starts from the initial count, but doesn't overwrite counter2.

//CORRECTION
// count is declared inside makeCounter. Normally count would be discarded
// when makeCounter finishes, but the returned function still uses count,
// so JavaScript keeps it alive. Each call to makeCounter creates its own
// fresh count, so counter and counter2 have completely separate, private
// counts that never affect each other.
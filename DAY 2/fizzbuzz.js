function fizzbuzz(number) {

    if (number % 3 == 0 && number % 5 == 0) {
        return "FizzBuzz";
    }
    if (number % 3 == 0) {
        return "Fizz";
    }
    if (number % 5 == 0) {
        return "buzz";
    } else {
        return number;
    }
}

for (i = 1; i <= 100; i++) {
    console.log(fizzbuzz(i))
}

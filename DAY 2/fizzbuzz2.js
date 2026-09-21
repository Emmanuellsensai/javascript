function fizzbuzz(nums) {

    if (nums % 3 == 0 && nums % 5 == 0) {
        return "FizzBuzz"
    }
    if (nums % 3 == 0) {
        return "Fizz"
    }
    if (nums % 5 == 0) {
        return "Buzz"
    } else {
        return nums;
    }
}

// console.log(fizzbuzz(15));
for (i = 1; i <= 100; i++) {
    console.log(fizzbuzz(i));
}


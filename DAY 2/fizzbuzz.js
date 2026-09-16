let number = "";

if (number % 3 == 0) {
    console.log("fizz")
} else if (number % 5 == 0) {
    console.log("buzz")
} else if (number % 3 && number%5){
    console.log("fizzbuzz")
}
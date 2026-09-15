/*=====================================================
PART 2: THE MINI BUILD (converter.js), about 1 hour

Write a converter with three functions. No tutorial, no searching for "javascript converter". If you get stuck on a specific method, look up only that method on MDN.

Requirements:

nairaToUsd(amount) takes a number of naira and returns the USD value. Use a const at the top of the file for the exchange rate so it is not buried in the function.
celsiusToFahrenheit(celsius) returns the fahrenheit value. Formula: multiply by 9, divide by 5, add 32.
kgToPounds(kg) returns the pound value. 1 kg is approximately 2.20462 lb. Flagging that number: it is the standard conversion factor and I am confident in it to that precision, but verify if you ever need more decimal places.
Each function returns a value. It does not console.log inside itself. Call the functions at the bottom of the file and log the results there. This separation of "compute" and "display" is a habit worth forming on day one, and it is exactly what makes code testable later.
Format the output with template literals, not string concatenation. For example:
1000 naira is $0.65
Round the money output to 2 decimal places. Look up toFixed on MDN. Note what type toFixed returns, because it is not what most people expect, and that is a genuinely useful thing to discover today.

Starter skeleton, fill in the bodies yourself:

const NAIRA_PER_USD = 1500; // check a real rate and use it

function nairaToUsd(amount) {
// your code
}

function celsiusToFahrenheit(celsius) {
// your code
}

function kgToPounds(kg) {
// your code
}

console.log(...);
console.log(...);
console.log(...);

STRETCH, only if the above took under 45 minutes:

Add a fourth function that does the reverse, usdToNaira, and log a round trip: convert 5000 naira to USD and back to naira. See whether you get exactly 5000 back. If you do not, connect that to the 0.1 + 0.2 surprise from experiments.js. That connection is a real insight about how computers handle money, and it is why production systems store money as integers in the smallest unit (kobo, cents) rather than as decimals.*/


//Starter skeleton, fill in the bodies yourself:

const NAIRA_PER_USD = 1325;

function nairaToUsd(amount) {
    let result = amount / NAIRA_PER_USD
    return result
}

function usdToNaira(amount) {
    let result = amount * NAIRA_PER_USD
    return result
}

function celsiusToFahrenheit(celsius) {
    let result = celsius * 9 / 5 + 32
    return result
}

function kgToPounds(kg) {
    let result = kg * 2.20462
    return result
}

console.log(`5000 naira is $${nairaToUsd(50000).toFixed(2)}`);
console.log(`$20 is ${usdToNaira(20)} naira`);
console.log(`100 degree celcius is ${celsiusToFahrenheit(100)} fahrenheit`);
console.log(`100kg is ${kgToPounds(100).toFixed(2)} pounds`);
console.log(usdToNaira(nairaToUsd(5000===5000)))

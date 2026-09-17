// =====================================================
// MINI-BUILD: NUMBER GUESSING GAME

// Make two files in day2:

// guess.html
// guess.js

// In guess.html:

// <!DOCTYPE html> <html> <head><title>Guessing Game</title></head> <body> <h1>Guessing game, check the console</h1> <script src="guess.js"></script> </body> </html>

// Use the browser for this one, not Node. The reason is prompt(), a browser function that pops up an input box and pauses until the user answers. Node has no equivalent that is simple at your current level, readline is callback-based and that is day 8 material. Do not fight that today.

// Open it with Live Server and keep devtools open.

// Requirements:

// Generate a secret number between 1 and 100. Use Math.floor(Math.random() * 100) + 1. Look up both Math.random and Math.floor on MDN and work out why the multiply, the floor, and the plus one are each needed. Do not just paste it.
// Loop, asking the user to guess. On each guess, tell them "too high", "too low", or "correct".
// Stop when they get it right, and tell them how many guesses it took.
// Give them a maximum of 7 attempts. If they run out, reveal the answer.

// Things you will run into, and should solve yourself:

// prompt() returns a string, always. "50" is not 50. Comparing a string to a number with < will sometimes appear to work because of coercion, but it will bite you. Convert it with Number(). This is yesterday's lesson showing up in real code.

// You need a loop whose length is not known in advance, so a while loop fits better than a for loop. Though a for loop with a break also works, since you have a hard cap of 7. Either is fine, pick one and be able to explain why.

// What if they type letters instead of a number? Number("abc") gives NaN. Decide whether to handle that. If you do, isNaN() is the check.

// What if they press cancel? prompt() returns null. Another edge case worth knowing exists.

// Stretch, only if you finish early: track their guesses in an array and print the full history at the end. That gives you a reason to use arrays before day 4 formally introduces them.


function guess() {
    let secret = Math.floor(Math.random() * 100) + 1;
    let attempt = 0;
    let maxAttempt = 7;
    let win = false

    while (attempt < maxAttempt) {

        let input = prompt("Hey there, pick a number from 1 to 100");

        if (input === null) {
            console.log("YOU QUIT")
            return
        }
        let guessedNumber = Number(input);

        if (!guessedNumber) {
            console.log("Enter a valid number and try again");
            continue
        }
        attempt++;
        if (guessedNumber === secret) {
            win = true
            console.log(`You are correct, ${secret} is the right number`);
            break
        } else if (guessedNumber < secret) {
            console.log(`Wrong, ${guessedNumber} is lower than the Expected number, Try again... You have used ${attempt} Attempts.`);
        } else {
            console.log(`Wrong, ${guessedNumber} is higher than the Expected number, Try again... You have used ${attempt} Attempts.`)
        }
    }
    if (!win) {
        console.log("GAME OVER!!!, You have run out of Attempts")
    }
}
guess();
//FOR LOOP

// for (let i = 0; i < 5; i++) {
//     console.log("in loop:", i)
// }
// console.log("The loop is finished")

// const names = ["Emmanuel","Ryzen","Bryan"];
// for (let i = 0; i < names.length; i++) {
//     console.log(i)
//     console.log(names[i])
// }


//WHILE LOOP
// let i = 0;

// while (i < 5) {
//     console.log("in loop:", i);
//     i++;
// }

// const names = ["Emmanuel","Ryzen","Bryan"]
// let i = 0;
// while (i < names.length) {
//     console.log(names[i])
//     i++;
// }


//DO WHILE LOOPS
// let i = 5

// do {
//     console.log("value is:", i);
//     i++;
// }while (i < 5);


//IF STATEMENTS (CONDITIONALS)
// const age = 25;

// if (age > 20){
//     console.log("you are over 20years old")
// }

// const ninjas = ["Emmanuel","Ryzen","Bryan","David"]

// if (ninjas.length > 3) {
//     console.log("That's alot of ninjas")
// }

const password = "password1234";

// if (password.length >= 12) {
//     console.log("Password is strong enough")
// }else if (password.length >= 8) {
//     console.log("That password moderate in strength")
// } else {
//     console.log(`password is ${password.length} characters too short.`)
// }


//LOGICAL OPERATORS (OR - || / AND - &&)

// const password = "p@sswo";

// if (password.length >= 12 && password.includes("@")) {
//     console.log("Password is strong enough")
// }else if (password.length >= 8 || password.includes("@") && password.length >= 5) {
//     console.log("That password moderate in strength")
// } else {
//     console.log(`password is ${password.length} characters too weak.`)
// }

//LOGICAL NOT (!)

// let user = false;

// if (!user) {
//     console.log("You must be logged in to continue")
// }

//BREAK AND CONTINUE 

//CONTINUE Skips the condition or iteration and goes on to the next while BREAK stops the loops completely when a particular condition is met.

// const scores = [50, 25, 0 , 30, 100, 20, 10]

// for (let i = 0; i < scores.length; i++) {

//     if (scores[i] === 0) {
//         continue;
//     }

//     console.log("Your score:", scores[i])

//     if (scores[i] === 100) {
//         console.log("Congrats you got the top score")
//         break
//     }
// }



//SWITCH STATEMENTS 

// let grade = "E" || "e";

// switch(grade){
//     case "A":
//         console.log("You got An: A");
//         break;
//     case "B":
//         console.log("You got A: B");
//         break;
//     case "C":
//         console.log("You got A: C");
//         break;
//     case "D":
//         console.log("You got A: D");
//         break;
//     case "E":
//         console.log("You got An: E");
//         break;
//     case "F":
//         console.log("You got A: F");
//         break;
//     default:
//         console.log("This is not a valid grade")
// }


//VARIABLE AND BLOCK SCOPE

//When u declare a global scope variable outside a code block... 1. you cannot redeclare it in the global scope again. 
//When you declare a variable inside a code block you can redeclare it even if the variable is in the global scope and you can overwrite(not redeclare) the global scope value in the code block too but it is just for the code block.

//if you define or declare in a code block u can only access it in a code block. 

if(true){
    let age = 50;
    console.log("")
}
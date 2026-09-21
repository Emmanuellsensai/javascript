//FUNCTIONS
//Functions creates little blocks of codes that can be reusable when called

//FUNCTION DECLARATION
// function greet(){
//     console.log("Hello world");
// }


// const greet = () => "hello world";

// const result = greet();

// console.log(greet());


//FUNCTION EXPRESSION
//Store a function in a varible, the code block ends with ;
// const speak = function(){
//     console.log("Good day!!!")
// };

// speak();

//ARGUMENTS AND PARAMETERS
// const speak = function(time="Evening",name="Ryzen"){
//     console.log(`Good ${time} ${name}`)
// }
// speak("Morning","Emmanuel");


// const calcArea = function(radius){
//     let area = 3.14 * radius ** 2;
//     return area
// };

// const a = calcArea(5);
// console.log(a)


// const bill = function (products, tax) {

//     let total = 0

//     for (let i = 0; i < products.length; i++) {
//         total = + products[i] + products[i] * tax;
//     }
//     return total
// }

// console.log(bill([15, 20, 30], 0.2));



//ARROW FUNCTIONS
// const calcArea = (radius) => {
//     const area = 3.14 * radius ** 2;
//     return area
// } 


// const calcArea = (radius) => 3.14 * radius ** 2;

// const area = (calcArea(5))
// console.log("The area of the circle is:", area)


// const bill = (products, tax) => {
//     let total = 0

//     for (let i = 0; i < products.length; i++) {
//         total = + products[i] + products[i] * tax;
//     }
//     return total
// };

// console.log(bill([50,80,130],0.5));


//FUNCTIONS AND METHODS
// const greet = () => "Hello";

// let resultOne = greet();
// console.log(resultOne);



// const name = "emmanuel"

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);


//CALLBACKS AND FOREACH
// const myFunc = (callbackFunc) => {

//     let value = 50;

//     callbackFunc(value);

// };

// myFunc(value => {

//     console.log(value);

// });


let people = ["emmanuel","ryzen","bryan","daniel","david"]

const logPerson = (person,index) => {
    console.log(`${index} - hello ${person}`)
};

people.forEach(logPerson);


// people.forEach ((person,index) => {

//     console.log(index,person)

// })


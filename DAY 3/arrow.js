//declarative
function add(a,b){
    return a + b
};
console.log(add(5,2));

//expressive
const add2 = function(a,b) {
    return a + b
};
console.log(add2(5,2));

//arrow
const add3 = (a,b) => a + b;
console.log(add3(5,2));



function greet(name = "friend") {
    return `Hello ${name}`
}

const name = "Mary"
console.log(greet(name));

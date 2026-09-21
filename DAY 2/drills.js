const values = [0, 1, -1, "", "hello", "0", null, undefined, NaN, [], {}]

for (const v of values) {
    if (v) {
        console.log("v is truthy")
    } else {
        console.log("v is falsy")
    }
}

//false,0,"",null,undefined,NaN.

console.log(""&&"world");

//ternary

const age = 40;


const status = age >= 18 ? "adult" : "minor";
console.log(status)

// v is falsy
// v is truthy
// v is truthy
// v is falsy
// v is truthy
// v is truthy
// v is falsy
// v is falsy
// v is falsy
// v is truthy
// v is truthy

// console.log(true&&false);
// console.log(true||false);
// console.log(!true);

// console.log("hello"&&"world");
// console.log(""||"fallback");
// console.log(null??"default");
// console.log(0||"default");
// console.log(0??"default");

// false
// true
// false

// world
// fallback
// default
// default
// 0

// const age = 20;
// const personstat = age >= 18 ? "adult" : "minor";
// console.log(personstat)
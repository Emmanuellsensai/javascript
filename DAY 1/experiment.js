console.log("5"+3); //should print NaN BUT printed 53
console.log("5"-3); //should print NaN BUT printed 2
console.log("5"*"2"); //should print 10
console.log(5+true); //should print true BUT printed 6
console.log(5+null); //should print 5
console.log(5+undefined); //should print 5 BUT printed NaN
console.log(""+0); //should print 0
console.log([]+[]); //should print nothing 
console.log([]+{}); //should print nothing BUT printed [object Object]

console.log(null==undefined); //should print true
console.log(null===undefined); //should print false
console.log(0==""); //should print true
console.log(0===""); //should print false
console.log(0==false); //should print true
console.log("0"==false); //should print true
console.log(NaN==NaN); //should print false

console.log(typeof 42); //should print number
console.log(typeof "hello") //should print string
console.log(typeof true) //should print boolean
console.log(typeof undefined) //should print undefined
console.log(typeof null); //should print null BUT printed object
console.log(typeof []); //should print array BUT printed object

// const x = 5;
// x = 10;
//this should not work because it is a constant variable not let... TypeError.

const person = {
    name: "Emmanuel"
};
person.name = "Usang"
console.log(person)

const name = "Emmanuel";
const age = 24;
console.log("Name: "+name+" Age: "+age);
console.log(`Name: ${name}, Age: ${age}`);
console.log(`Next year: ${age + 1}`);

console.log(0.1+0.2);
console.log(0.1+0.2==0.3)











console.log("5")
//ARRAY AND ARRAY METHODS
//Using Arrow Function is the conventional way.

// const names = (parameter) => {
//     //code
//     return "something" + parameter
// };

//OR 

// const names = (parameter) => "Something" + parameter;

// const years = (year) => {
//     if (year % 4 == 0 && year % 400 == 0) {
//         return year
//     } else if (!year && year % 100 == 0) {
//         return "This is not a leap year"
//     }
// }
// console.log(year(2004))


const vals = [1, 2, 3, 4, 5, "a", "b", "c", "a", "d", "e"]


//FOR EACH METHOD - Loops through an array and logs each value per iteration.

// array.forEach(element);

vals.forEach((item) => {
    console.log(item)
})

//MAP METHOD - Loops through an array and returns a new array of new elements.
const firstNum = vals.map((items) => {
    return 1
})
console.log(firstNum)

const anyVal = vals.map((any) => {
    return any + any
})
console.log(anyVal)


//FILTER METHOD - loops through an array and returns a condition, it creates a new array with all the filtered elements.
//when comparing typeof converts the output to string, so you compare with the lowercase string
const nums = vals.filter((item) => {
    if (typeof item === "number") {
        return item
    }
})
const letters = vals.filter((item) => {
    if (typeof item === "string") {
        return item
    }
})
console.log(letters)
console.log(nums)


//CONCAT METHOD - Concatenates or merges 2 Arrays together, you can also concatenate an Array with a value. It creates a new array
const nums1 = [1, 2, 3, 4, 5]
const letters1 = ["a", "b", "c", "d", "e"]

const vals1 = nums1.concat(letters1);
console.log(vals1)


//FIND METHOD - find an item based on its property... uing a condition
//if the condition is not satisfied find will return undefined
const Number2 = vals.find((item) => {
    if (item === 2) {
        return item
    }
})
console.log(Number2)


//FINDINDEX METHOD - FindIndex return the index of a particular element in an Array.
//if the condition is not satisfied find will return -1
const IndexOfA = vals.findIndex((item) => {
    if (item === "a") {
        return item
    }
})
console.log(IndexOfA)


//INDEXOF METHOD- index of doesn't need a callback function and let's you take in a 2nd parameter which is a StartIndex...

const letterA = vals.indexOf("a");
console.log(letterA);

//LASTINDEXOF METHOD- This gets the index of the last instance of an item in an array
const letterA2 = vals.lastIndexOf("a");
console.log(letterA2)


//SOME METHOD - sum returns true if 1 of the element in an array satisfies a condition, else it returns false.
const hasC = vals.some((item) => {
    if (item === "c") {
        return item
    }
})

console.log(hasC);


//EVERY METHOD - Every returns true if every item in an array satisfies a condition else returns false.
const everyIs = vals.every((item)=>{
    if(typeof item==="number"||"string"){
        return item
    }
})
console.log(everyIs);


//INCLUDES METHOD - Includes
//  returns true if an array includes an element else returns false without a callback function
const has5 = vals.includes(5)
console.log(has5)


//PUSH METHOD - Push is used to append or add an element to the end of an array and assigning to a new var returns the length.
const newVal = vals.push(6);
console.log(vals)
console.log(newVal);


//UNSHIFT METHOD - Unshift adds or appends the element to the start of the array and assigning to a new var returns the length.
const newVal2 = vals.unshift(9);
console.log(vals)
console.log(newVal2);


//POP METHOD - Pop removes the last item in an array and assigning to a new variable logs the removed item.
const removeditem = vals.pop()
console.log(vals)
console.log(removeditem)


//SHIFT METHOD - Shift removes the first item in an array and assigning to a new variable logs the removed item.
const removeditem2 = vals.shift()
console.log(vals)
console.log(removeditem2)


//TO STRING METHOD - converts an array to a string
const stringVal = vals.toString()
console.log(stringVal)


//JOIN METHOD - converts an array to a string but you can choose the separator
const withcomma = vals.join();
const withhyphen = vals.join("-");
const withspace = vals.join(" ")

console.log(withcomma)
console.log(withhyphen)
console.log(withspace)


//FILL METHOD - This replaces all the items in an array with a specific item and can take 3 parameters including a start and stop index
vals.fill(1)
vals.fill(3,4,7)
console.log(vals)
console.log(vals)
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


const vals = [1, 2, 3, 4, 5, "a", "b", "c", "d", "e"]


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
const nums1 = [1,2,3,4,5]
const letters1 = ["a","b","c","d","e"]

const vals1 = nums1.concat(letters1);
console.log(vals1)


//FIND METHOD - find an item based on its property... uing a condition
//if the condition is not satisfied find will return undefined
const Number2 = vals.find((item)=>{
    if (item === 2){
        return item
    }
})
console.log(Number2)


//FINDINDEX METHOD - FindIndex return the index of a particular element in an Array.
//if the condition is not satisfied find will return -1
const IndexOfA = vals.findIndex((item)=>{
    if(item === "a") {
        return item
    }
})
console.log(IndexOfA)


//
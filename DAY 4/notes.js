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


let vals = [1, 2, 3, 4, 5, "a", "b", "c", "a", "d", "e"]


//FOR EACH METHOD - Loops through an array and logs each value per iteration.

// array.forEach(element);

vals.forEach((item) => {
    console.log(item)
})

//MAP METHOD - Loops through an array and returns a new array of new elements.
const firstNum = vals.map((items) => {
    return 1
})
console.log(firstNum);

const anyVal = vals.map((any) => {
    return any + any
})
console.log(anyVal);


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
console.log(letters);
console.log(nums);


//CONCAT METHOD - Concatenates or merges 2 Arrays together, you can also concatenate an Array with a value. It creates a new array
const nums1 = [1, 2, 3, 4, 5]
const letters1 = ["a", "b", "c", "d", "e"]

const vals1 = nums1.concat(letters1);
console.log(vals1);


//FIND METHOD - find an item based on its property... uing a condition
//if the condition is not satisfied find will return undefined
const Number2 = vals.find((item) => {
    if (item === 2) {
        return item
    }
})
console.log(Number2);


//FINDINDEX METHOD - FindIndex return the index of a particular element in an Array.
//if the condition is not satisfied find will return -1
const IndexOfA = vals.findIndex((item) => {
    if (item === "a") {
        return item
    }
})
console.log(IndexOfA);


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
const everyIs = vals.every((item) => {
    if (typeof item === "number" || "string") {
        return item
    }
})
console.log(everyIs);


//INCLUDES METHOD - Includes
//  returns true if an array includes an element else returns false without a callback function
const has5 = vals.includes(5)
console.log(has5);


//PUSH METHOD - Push is used to append or add an element to the end of an array and assigning to a new var returns the length.
const newVal = vals.push(6);
console.log(vals);
console.log(newVal);


//UNSHIFT METHOD - Unshift adds or appends the element to the start of the array and assigning to a new var returns the length.
const newVal2 = vals.unshift(9);
console.log(vals);
console.log(newVal2);


//POP METHOD - Pop removes the last item in an array and assigning to a new variable logs the removed item.
const removeditem = vals.pop()
console.log(vals);
console.log(removeditem);


//SHIFT METHOD - Shift removes the first item in an array and assigning to a new variable logs the removed item.
const removeditem2 = vals.shift()
console.log(vals);
console.log(removeditem2);


//TO STRING METHOD - converts an array to a string
const stringVal = vals.toString()
console.log(stringVal);


//JOIN METHOD - converts an array to a string but you can choose the separator
const withcomma = vals.join();
const withhyphen = vals.join("-");
const withspace = vals.join(" ")

console.log(withcomma);
console.log(withhyphen);
console.log(withspace);


//FILL METHOD - This replaces all the items in an array with a specific item and can take 3 parameters including a start and stop index
vals.fill(1)
vals.fill(3, 4, 7);
console.log(vals);
console.log(vals);



vals = [1, 2, 3, 4, 5, "a", "b", "c", "a", "d", "e"]


//COPY THAT METHOD - Takes in the position of where u want to copy your element to (targetindex)... it takes in 3 parameters -(targetindex,startindex,endindex)
vals.copyWithin(2);
vals.copyWithin(1, 7, 11);
console.log(vals);


//SLICE METHOD - Takes a slice of an array (startindex,endindex), the endindex not included it does not modify the original array.
const sliced = vals.slice(2, 4);
//if you specify the endindex it stops at the length of array
const resliced = vals.slice(3);

console.log(sliced);
console.log(resliced);


//SPLICE METHOD - removes and replaces element(s) in an array, takes in 3+ parameters (startindex,deletecount,items)
const months = ["jan", "febuary", "march", "april"];

months.splice(0, 2, "january", "september");
const month1 = months.splice(0, 1, "december")

console.log(months);
console.log(month1);
console.log(months);


//SORT METHOD - This arranges elements in an array in acsending order, it tales in a parameter (a,b) for comparison... it compares numbers in UTF-16 Code unit order by defaullt, "return a-b for ascending order & return b-a for descending order"
alpha = ["f", "a", "i", "j", "u", "e"]
digits = [10, 27, 17, 69, 82, 5]


alpha.sort();
digits.sort((a, b) => {
    return a - b
});
console.log(alpha);
console.log(digits);


//REVERSE METHOD - Reverses the array
normDigits = [10, 27, 17, 69, 82, 5]
normAlpha = ["f", "a", "i", "j", "u", "e"]

normDigits.reverse();
normAlpha.reverse();

console.log(normDigits);
console.log(normAlpha);


//FROM METHOD- Converts an array like object or string to an array.
const str = "1234"

const numz = Array.from(str);
console.log(numz);

//To get the array a numbers we can use the map function, where the method collects 2 parameters.
const Actualnumz = Array.from(str, (elements) => {
    return Number(elements)

});
console.log(Actualnumz);


//ISARRAY METHOD - returns true when a value is an array 
const str1 = "1234"
console.log(Array.isArray(str1));

const obj1 = {foo:123}
console.log(Array.isArray(obj1));

let vals10 = [1, 2, 3, 4, 5, "a", "b", "c", "a", "d", "e"]
console.log(Array.isArray(vals10));


//VALUEOF METHOD - Takes in a parameter and returns a copy of the array with no changes.
const val11 = vals10.valueOf();
console.log(val11);


//ENTRIES METHOD - Is used in an Array to get the entries that returns a new iterator Array that contains the key: value pairs for each elements in the array.
vals10 = [1, 2, 3, 4, 5, "a", "b", "c", "a", "d", "e"]

const eachEl = vals10.entries();
for (let element of eachEl) {
    console.log(element);
};


//KEYS METHOD - returns a new iterator Array that logs the keys of an Array.
const eachKey = vals10.keys();
for (let key of eachKey) {
    console.log(key);
};


//VALUES METHODS - returns a new iterator Array that logs the values of an Array.
const eachVal = vals10.values();
for(let val of eachVal) {
    console.log(val)
}


//REDUCE METHOD - Is used to reduce the array elements into 1 single value by adding them.

const reducer = (previousValue,currentValue) => {
    return previousValue + currentValue
}

const sum = normDigits.reduce(reducer);
console.log(sum)


//
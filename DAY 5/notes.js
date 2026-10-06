//OBJECTS

//Objects have properties and things they can do.
//User Objects can have properties like (email, username, gender) and methods like (login, logout).
//Blog objects can have properties like (title, content, author) and methods like (publish,unpublish,delete).

//OBJECT LITERALS
let user = {
    name: "Emmanuel",
    age: 20,
    email: "emmanuelusang60@gmail.com",
    location: "Lagos, Nigeria.",
    blogs: ["How to get started on github", "Why your ubuntu system keeps lagging"],

    login: function () {
        console.log("The User Logged In.")
    },
    logout: function () {
        console.log("The User Logged Out.")
    },

    logBlocks: function () {
        this.blogs
        console.log("This user has written the following blogs:");
        this.blogs.forEach((blogs => {
            console.log(blogs)
        }))
    }
};
user.age = 22;
user["name"] = "Emmanuell";


console.log(user)
console.log(user.age)
console.log(user["name"])
const newloc = "location"
console.log(user[newloc]);
console.log(typeof user);

//METHODS
user.login();
user.logout();


//THIS KEYWORD- Is a context object that represents the context in which a code is executed 
user.logBlocks();


//MATH OBJECTS
console.log(Math)
console.log(Math.PI)
console.log(Math.E)

const area = 7.5
console.log(Math.round(area)) //Rounds up or down to the nearest whole number
console.log(Math.floor(area)) //Rounds down to the nearest whole number
console.log(Math.ceil(area)) //Rounds up to the nearest whole number
console.log(Math.trunc(area)) //takes away the decimal value

const random = Math.random();
console.log(random);
console.log(Math.round(random * 100));


//STACKS AND HEAPS

//STACK - small organized region of the memory used to store primitive types(bool,strings, numbers...) and function execution.
//HEAPS - large unorganized region of the memory used to store reference types(objects, arrays and functions).

//PRIMITIVE VALUES
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`score one: ${scoreOne}, score two: ${scoreTwo}`);

scoreOne = 100;
console.log(`score one: ${scoreOne}, score two: ${scoreTwo}`);


//REFERENCE VALUES
const userOne = { hisName: "Emmanuel", hisAge: 22 };
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.hisName = "Emmy";
console.log(userOne, userTwo);
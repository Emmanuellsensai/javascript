const user = {
    name: "Emmanuel",
    address: {
        city: "Lagos",
        country: "Nigeria"
    },
    orders: [
        {
            id: 1, total: 12000
        },
        {
            id: 2, total: 8500
        }
    ]
}

//TASK 1 - DESTRUCTURING 

//pull city out of the address
const {
    city
} = user.address;

console.log(city)

//pull the first order’s total - orders is an array, so reach the first order with user.orders[0]
const {
    total
} = user.orders[0]

console.log(total)

//TASK 2 - SPREAD COPY -TOP LEVEL

//copy the whole user with spread
const copy = {
    ...user
};

//change copy's name

copy.name = "usang";

console.log(user.name)
console.log(copy.name)

//TASK 3 - THE SHALLOW COPY TRAP
copy.address.city = "Abuja";
console.log(user.address.city)
console.log(copy.address.city)

//TASK 4 - OBJECTS TO ARRAYS
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
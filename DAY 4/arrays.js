const product = [{ name: "beans", price: 2000, category: "food" }, { name: "iphone 12 mini", price: 260000, category: "electronics" }, { name: "soap", price: 1800, category: "toiletries" }, { name: "rice", price: 150000, category: "food" }, { name: "garri", price: 2000, category: "food" }, { name: "sponge", price: 2500, category: "toiletries" }, { name: "asus", price: 690000, category: "electronics" }, { name: "groundnut-oil", price: 39000, category: "food" }]

//Q1
const Under5000 = product.filter((item) => item.price < 5000);
console.log(Under5000);

//Q2
const names = product.map((item) => {
    console.log(item.name)
});

//Q3
const electronicsTotal = product.filter((item) => item.category === "electronics").reduce((total, item) => total + item.price, 0);
console.log(electronicsTotal); // 950000

//Q4
const firstfood = product.find((item) => (item.category === "food"));
console.log(firstfood)

//Q5
const iofsoap = product.findIndex((item) => item.name === "soap");
console.log(iofsoap)

//Q6
const over500000 = product.some((item) => item.price > 500000);
console.log(over500000)

//Q7
const over500 = product.every((item) => item.price > 500);
console.log(over500)

//Q8
const sortedcopy = product.slice().sort((a, b) => {
    return (a.price) - (b.price)
})
console.log(sortedcopy)
console.log(product)

//Q9
const foodNames = product.filter((item) => item.category === "food").map((item) => item.name).sort();
console.log(foodNames)
console.log(product)


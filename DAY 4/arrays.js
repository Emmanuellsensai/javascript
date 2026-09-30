const product = [{ name: "beans", price: 2000, category: "food" }, { name: "iphone 12 mini", price: 260000, category: "electronics" }, { name: "soap", price: 1800, category: "toiletries" }, { name: "rice", price: 150000, category: "food" }, { name: "garri", price: 2000, category: "food" }, { name: "sponge", price: 2500, category: "toiletries" }, { name: "asus", price: 690000, category: "electronics" }, { name: "groundnut-oil", price: 39000, category: "food" }]

const Under5000 = product.filter((item) => {
    if (item.price < 5000) {
        return item
    }
});
console.log(Under5000);


const names = product.map((item) => {
    console.log(item.name)
});

const totalElect = product.filter((item) => item.price);
console.log(totalElect)

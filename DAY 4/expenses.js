const expenses = [
    { title: "transport", amount: 1000, category: "daily" },
    { title: "data", amount: 3500, category: "bills" },
    { title: "food", amount: 3000, category: "daily" },
    { title: "rent", amount: 70000, category: "monthly" },
    { title: "water", amount: 200, category: "hourly" },
    { title: "clothes", amount: 150000, category: "yearly" },
    { title: "miscellaneous", amount: 20000, category: "extra" }
]
const extraExpense = { title: "nepa", amount: 70000, category: "bills" };

//Q1 CONCAT
function addExpense(list, item) {
    return expenses.concat(extraExpense)
}

console.log(addExpense(expenses, extraExpense))
console.log(expenses)


//Q2 FILTER
function removeExpense(list, title) {
    return list.filter((item) => item.title !== title);
}
console.log(removeExpense(expenses, "data"))
console.log(expenses)


//Q3 REDUCE
function totalSpent(list) {
    const reducer = (previousValue, currentValue) => {
        return previousValue + currentValue
    }
    const sum = list.reduce((reducer)=>);
}
console.log(totalSpent(expenses))
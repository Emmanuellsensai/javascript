function indexOfValue(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}

const vals = [1, 2, 3, 4, 5]
console.log(indexOfValue(vals, 3))
console.log(indexOfValue(vals, 5))
console.log(indexOfValue(vals, 9))
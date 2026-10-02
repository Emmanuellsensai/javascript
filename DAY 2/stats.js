function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]
        }
    }
    return max
}

function findMax(numbers) {
    return numbers.reduce((max, n) => n > max ? n : max, 0)
}

// function findMin(numbers) {
//     let min = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] < min) {
//             min = numbers[i]
//         }
//     }
//     return min
// }

function findMin(numbers) {
    return numbers.reduce((min, n) => n < min ? n : min, 0)
}

// function findAverage(numbers) {
//     let total = 0

//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     }
//     return total / numbers.length
// }


function findAverage(numbers) {
    const total = numbers.reduce((sum, n) => sum + n, 0);
    return total / numbers.length
}

const nums = [12, 5, 88, 3, 45, 88, -7];
console.log(findMax(nums));
console.log(findMin(nums));
console.log(findAverage(nums).toFixed(2));
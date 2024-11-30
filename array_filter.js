// filter the array based on some conditions

function filter_array(arr, condition) {
    return arr.filter(condition);
}

const evenNumbers = filter_array([1, 4, 5, 9, 13, 18, 20, 4], num => num % 2 === 0);
console.log(evenNumbers);

const numbers = [12, 17, 3, 2, 9, 8, 90, 87, 37, 34];
const greaterThanFive = filter_array(numbers, num => num > 5);
console.log(greaterThanFive);
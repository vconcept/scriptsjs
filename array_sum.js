// Calculate the sum of the array
function array_sum(arr) {
    let sum = 0;
    return console.log(arr.reduce((accumulator, currentValue) => accumulator + currentValue, sum));
}

array_sum([3, 10, 17, 20]);
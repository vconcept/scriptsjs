// Introduce our array function
function minmax(arr) {
    return console.log(`The minimum number is ${Math.min(...arr)} and the maximum number is ${Math.max(...arr)}`);
}

// function minmax(arr) {
// //const arr = [];
// let maxNumber = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > maxNumber) {
//     maxNumber = arr[i];
//   }
// }
// console.log(maxNumber); // Output: 40
// }

minmax([2 , 3, 6, 9, 12, 19, 13]);
// Function to reverve a given string
function reverseString(text) {
    if (!text || 2 > text.length) {
        return text;
    } else {
        return text.split("").reverse().join("");
    }
}

console.log(reverseString("Lovingly"));
console.log(reverseString("obtain"));
console.log(reverseString("refer"));
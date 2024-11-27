function countChar(text) {
    if (text) {
    return text.length;
} else {
    return ("No input provided");
}
}

console.log(countChar("Thistext"));
console.log(countChar("This is a sentence"));
console.log(countChar());
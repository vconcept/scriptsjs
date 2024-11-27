function capitalizeWords(sentence) {
    if (!sentence) {
        return null;
    }
    return sentence
        .split(' ')                    
        .map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() 
        )
        .join(' ');                     
}

// Example usage:
console.log(capitalizeWords("this is a test sentence"));
console.log(capitalizeWords("jAVAsCript is AwEsoME"));
console.log(capitalizeWords());

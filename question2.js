// Write a JavaScript function that accepts two numbers to generate an array between them. 
// For example, if the two numbers are 4 and 7, the output should be [4, 5, 6, 7] and 
// -4 and 7 should return [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].
function generateNumbers(start, end) {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

console.log(generateNumbers(4, 7)); // Output: [4, 5, 6, 7]
console.log(generateNumbers(-4, 7)); // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]

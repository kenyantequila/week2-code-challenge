// Write a function that accepts a string as input and swaps the case of each character.
//  For example if you input 'The Quick Brown Fox'
//  the output should be 'tHE qUICK bROWN fOX'.
function swapCase(str) {
    let newStr = ''; 
    for (let i = 0; i < str.length; i++) { // Loop through each character in the string
        let char = str[i]; 
        if (char === char.toUpperCase()) { // If the character is uppercase
            newStr += char.toLowerCase(); // Convert it to lowercase and add it to the new string
        } else { // If the character is lowercase
            newStr += char.toUpperCase(); // Convert it to uppercase and add it to the new string
        }
    }
    return newStr; // Return the new string
}

console.log(swapCase('The Quick Brown Fox')); // Output: tHE qUICK bROWN fOX

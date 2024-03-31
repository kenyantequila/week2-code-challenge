


function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function filterPrimes(arr) {
    return arr.filter(isPrime);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterPrimes(numbers)); // Output: [2, 3, 5, 7]

const sum = (a, b) => {
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('parameters must be numbers')
    }
    return a + b;
}

const myRemove = (arr, item) => {
    return arr
}

function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
}

module.exports = {sum, myRemove, myFizzBuzz};
function capitalize (string) {
    if (string.length === 0) return string;

    let firstLetter = string.charAt(0).toUpperCase();
    let restOfString = string.slice(1);
    return `${firstLetter}${restOfString}`
}

function reverseString (string) {
    string = [...string];
    string.reverse();
    return string.join('');
}

const calculator = {
    add: function (x, y) {
        return x + y;
    },
    subtract: function (x, y) {
        return x - y;
    },
    divide: function (x, y) {
        if (y === 0) {
            throw new Error('Cannot divide by zero');
        } else {
            return x / y
        }
    },
    multiply: function (x, y) {
        x * y
    }
}

function caesarCipher (string, shiftFactor) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetBig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const stringArray = [...string];
    let newStringArray = [];
    stringArray.forEach((letter) => {
        if (letter === letter.toLowerCase()) {
            letter = alphabet.indexOf(letter + shiftFactor);
        } else {
            letter = alphabetBig.indexOf(letter + shiftFactor);
        }


        newStringArray.push(letter)
    });

    return newStringArray.join('');
      
}

function analyzeArray (array) {
    if (!Array.isArray(array) || array.length === 0) {
        throw new Error('Input must be a non-empty array of numbers.');
    }

    return {
        average: array.reduce((total, value) => total + value ,0) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
}


// Test capitalize function
console.log('Testing capitalize function...');

console.log('capitalize("hello"):');
console.log(capitalize('hello')); // Expected output: 'Hello'

console.log('capitalize("Hello"):');
console.log(capitalize('Hello')); // Expected output: 'Hello'

console.log('capitalize(""):');
console.log(capitalize('')); // Expected output: ''

console.log('capitalize("a"):');
console.log(capitalize('a')); // Expected output: 'A'

// Test reverseString function
console.log('Testing reverseString function...');

console.log('reverseString("hello"):');
console.log(reverseString('hello')); // Expected output: 'olleh'

console.log('reverseString("world"):');
console.log(reverseString('world')); // Expected output: 'dlrow'

console.log('reverseString(""):');
console.log(reverseString('')); // Expected output: ''

console.log('reverseString("a"):');
console.log(reverseString('a')); // Expected output: 'a'

// Test calculator object
console.log('Testing calculator object...');

console.log('Add:');
console.log('calculator.add(2, 3):');
console.log(calculator.add(2, 3)); // Expected output: 5

console.log('calculator.add(-1, 5):');
console.log(calculator.add(-1, 5)); // Expected output: 4

console.log('Subtract:');
console.log('calculator.subtract(10, 4):');
console.log(calculator.subtract(10, 4)); // Expected output: 6

console.log('calculator.subtract(2, 3):');
console.log(calculator.subtract(2, 3)); // Expected output: -1

console.log('Multiply:');
console.log('calculator.multiply(2, 3):');
console.log(calculator.multiply(2, 3)); // Expected output: 6

console.log('calculator.multiply(-1, 5):');
console.log(calculator.multiply(-1, 5)); // Expected output: -5

console.log('Divide:');
try {
    console.log('calculator.divide(10, 2):');
    console.log(calculator.divide(10, 2)); // Expected output: 5

    console.log('calculator.divide(10, 0):');
    console.log(calculator.divide(10, 0)); // Expected output: Error: Cannot divide by zero
} catch (error) {
    console.log(error.message);
}

// Test caesarCipher function
console.log('Testing caesarCipher function...');

console.log('caesarCipher("abc", 1):');
console.log(caesarCipher('abc', 1)); // Expected output: 'bcd'

console.log('caesarCipher("xyz", 3):');
console.log(caesarCipher('xyz', 3)); // Expected output: 'abc'

console.log('caesarCipher("ABC", 1):');
console.log(caesarCipher('ABC', 1)); // Expected output: 'BCD'

console.log('caesarCipher("XYZ", 3):');
console.log(caesarCipher('XYZ', 3)); // Expected output: 'ABC'

console.log('caesarCipher("abcXYZ", 1):');
console.log(caesarCipher('abcXYZ', 1)); // Expected output: 'bcdYZA'

// Test analyzeArray function
console.log('Testing analyzeArray function...');

console.log('analyzeArray([1, 2, 3, 4, 5]):');
console.log(analyzeArray([1, 2, 3, 4, 5])); 
// Expected output: { average: 3, min: 1, max: 5, length: 5 }

console.log('analyzeArray([10, -5, 2, 0, 3]):');
console.log(analyzeArray([10, -5, 2, 0, 3])); 
// Expected output: { average: 2, min: -5, max: 10, length: 5 }

console.log('analyzeArray([42]):');
console.log(analyzeArray([42])); 
// Expected output: { average: 42, min: 42, max: 42, length: 1 }

try {
    console.log('analyzeArray("not an array"):');
    console.log(analyzeArray('not an array')); 
} catch (error) {
    console.log(error.message); // Expected output: 'Input must be a non-empty array of numbers.'
}

try {
    console.log('analyzeArray([]):');
    console.log(analyzeArray([])); 
} catch (error) {
    console.log(error.message); // Expected output: 'Input must be a non-empty array of numbers.'
}
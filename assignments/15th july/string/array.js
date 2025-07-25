// Assignment Title: Practice with Strings and Arrays in JavaScript

// Objective:
// Strengthen your understanding of JavaScript string and array operations through hands-on problem solving.

// Instructions:
// - Use only vanilla JavaScript.
// - Write functions for each question.
// - Do not use external libraries (e.g., lodash).
// - Submit a `.js` file with all your solutions, clearly commented.

// 🧠 STRING QUESTIONS (5)

// 1. **Reverse a String**  
//    Write a function `reverseString(str)` that takes a string and returns it reversed.  
//    Example: `"hello" → "olleh"`
function reverseString(str){
    let arr=str.split('');
    arr.reverse();
    let rev=arr.join('')  
    return rev;

}
let result=reverseString("taniya");
console.log(result);

// 2. **Check Palindrome**  
//    Write a function `isPalindrome(str)` to check if a string is a palindrome (case-insensitive).  
//    Example: `"Madam" → true`
function isPalindrome(str) {
    const normalized = str.toLowerCase();
    const reversed = normalized.split('').reverse().join('');
    return normalized === reversed;
}
// Example usage:
// console.log(isPalindrome("Madam")); // true

// 3. **Count Vowels**  
//    Write a function `countVowels(str)` to count the number of vowels in the given string.  
//    Example: `"JavaScript" → 3`
function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}
// Example usage:
// console.log(countVowels("JavaScript")); // 3


// 4. **Capitalize First Letter of Each Word**  
//    Write a function `capitalizeWords(str)` that capitalizes the first letter of every word in a sentence.  
//    Example: `"hello world" → "Hello World"`
const prompt=require('prompt-sync')()
let str=prompt("enter a string")
function capitalizeWord(str){
    let str1=toUpperCase(str);
    console.log(str1);

}

// 5. **Character Frequency**  
//    Write a function `charFrequency(str)` that returns an object with the frequency of each character in the string.  
//    Example: `"aabbbc" → { a: 2, b: 3, c: 1 }`
function charFrequency(str) {
    const freq = {};
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}
// Example usage:
// console.log(charFrequency("aabbbc")); // { a: 2, b: 3, c: 1 }

// 🧠 ARRAY QUESTIONS (5)

// 1. **Remove Duplicates**  
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
// Example usage:
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]

// 2. **Flatten an Array**  
function flattenArray(arr) {
    return arr.flat();
}
// Example usage:
// console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]

// 3. **Find Max and Min**  
function findMaxMin(arr) {
    return {
        max: Math.max(...arr),
        min: Math.min(...arr)
    };
}
// Example usage:
// console.log(findMaxMin([4, 1, 9, -2])); // { max: 9, min: -2 }

// 4. **Sum of Even Numbers**  
function sumEven(arr) {
    return arr.filter(x => x % 2 === 0).reduce((sum, x) => sum + x, 0);
}
// Example usage:
// console.log(sumEven([1, 2, 3, 4, 5, 6])); // 12

// 5. **Group by Type**  
function groupByType(arr) {
    return arr.reduce((acc, val) => {
        const type = typeof val;
        if (!acc[type]) acc[type] = [];
        acc[type].push(val);
        return acc;
    }, {});
}
// Example usage:
// console.log(groupByType([1, 'a', true, 2, 'b'])); // { number: [1, 2], string: ['a', 'b'], boolean: [true] }
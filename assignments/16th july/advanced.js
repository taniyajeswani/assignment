// 1. Flatten a deeply nested array using recursion:
function flatten(arr) {
    return arr.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}
// Example: flatten([1, [2, [3, [4]], 5]]) // [1,2,3,4,5]

// 2. Remove duplicates without Set:
function removeDuplicates(arr) {
    const result = [];
    arr.forEach(item => {
        if (result.indexOf(item) === -1) result.push(item);
    });
    return result;
}

// 3. Output of:
// const a = [1, 2, 3];
// const b = a;
// b.push(4);
// console.log(a); // [1,2,3,4]
// Because b and a reference the same array.

// 4. Find second largest number without sorting:
function secondLargest(arr) {
    let max = -Infinity, second = -Infinity;
    arr.forEach(num => {
        if (num > max) {
            second = max;
            max = num;
        } else if (num > second && num < max) {
            second = num;
        }
    });
    return second;
}

// 5. Count occurrences of each element:
function countOccurrences(arr) {
    return arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}
// Example: countOccurrences([1,2,2,3,1,1]) // {1:3,2:2,3:1}

// 6. Custom .map() polyfill:
Array.prototype.myMap = function(callback) {
    const result = [];
    for(let i=0; i<this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}

// 7. Sort array of objects by multiple properties:
function multiSort(arr) {
    return arr.sort((a, b) => {
        if (a.name === b.name) return a.age - b.age;
        return a.name.localeCompare(b.name);
    });
}
// Example: multiSort([{name:"John",age:30},{name:"Alice",age:25},{name:"John",age:22}])

// 8. Filter prime numbers:
function isPrime(n) {
    if (n < 2) return false;
    for(let i=2; i<=Math.sqrt(n); i++) {
        if(n % i === 0) return false;
    }
    return true;
}
function filterPrimes(arr) {
    return arr.filter(isPrime);
}

// 9. Output of:
// const arr = [1,2,3];
// arr.length = 0;
// console.log(arr[0]); // undefined
// Because the array is emptied.

// 10. Difference between forEach and map:
// forEach executes a function for each element, returns undefined. map returns a new array with transformed elements.

// 11. Result of:
// const a = [1,2,3];
// const b = a.slice(0,2);
// b[0] = 100;
// console.log(a); // [1,2,3]
// Because slice returns a shallow copy.

// 12. Find all pairs whose sum equals target:
function findPairs(arr, target) {
    const pairs = [];
    const seen = new Set();
    arr.forEach(num => {
        const complement = target - num;
        if (seen.has(complement)) pairs.push([complement, num]);
        seen.add(num);
    });
    return pairs;
}

// 13. Chunk array into groups of N elements:
function chunk(arr, n) {
    const result = [];
    for(let i=0; i<arr.length; i+=n) {
        result.push(arr.slice(i, i+n));
    }
    return result;
}

// 14. Reduce expression explanation:
// [1,2,3,4].reduce((acc, curr) => acc + curr, 0)
// Sums all elements, starting from 0. Returns 10.

// 15. Time complexity of splice():
// O(n) in worst case, because elements after the splice point may need to be shifted.
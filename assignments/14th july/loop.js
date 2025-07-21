
// Print numbers from 1 to 10 using a for loop.
for(let i=1;i<=10;i++){
    console.log(i);
}

// Print numbers from 10 down to 1 using a while loop.
let i=10;
while(i>=1){
    console.log(i);
    i--;
}


// Print numbers from 1 to 5 using a do...while loop.
let j=1;
do{
    console.log(j);
    j++;
}
while(j<=5);

//  2. Even, Odd, Multiples
// Print all even numbers from 1 to 50.
let e
for(e=1;e<=50;e++){
if(e%2==0){
    console.log(e);
}
}

// Print all odd numbers between 20 and 50.
for(let i=20;i<50;i++){
    if(i%2==1){
        console.log(i);
    }
}

// Print all numbers divisible by 3 from 1 to 30.
for(let i=1;i<=30;i++){
    if(i%3==0){
        console.log(i);
    }

}

//  3. Summation & Product
// Find the sum of numbers from 1 to 100.
let sum=0;
for(let i=1;i<=100;i++){
    sum=sum+i;
    
}
console.log(sum)

// Find the product of numbers from 1 to 10.
let pro=0;
for(let i=1;i<=10;i++){
    pro=pro+i;
    
}
console.log(pro)

// Find the sum of all even numbers between 1 and 50.
let sum1=0;
for(let i=1;i<=50;i++){
    if(i%2==0){
    sum1=sum1+i;}
    
}
console.log(sum1)

// Find the sum of squares of numbers from 1 to 10.
// (i.e., 1² + 2² + ... + 10²)
let sum2=0;
for(let i=1;i<=10;i++){
    sum2=sum2+i*i;
    
}
console.log(sum2)

//  4. Conditionals Inside Loops
// Print numbers from 1 to 20, skip multiples of 4 using continue.

for(let i=1;i<=20;i++){
    if(i%4==0){
        continue;
    }
    console.log(i);
}


// Print numbers from 1 to 10, stop at 7 using break.
for(let i=1;i<=10;i++){
    if(i==7){
        break;}
        console.log(i);
    }


// Count how many numbers between 1 and 100 are divisible by both 3 and 5.
let count=0;
for(let i=1;i<=100;i++){
    if(i%3==0&&i%5==0){
        count++;
    }
}
console.log("the number of number divisible by 3 and 5 is : " + count);


//  5. Nested Loops (Without Patterns)
// Print all pairs (i, j) where i and j go from 1 to 3.
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`Pair: (${i}, ${j})`);
    }
}



// Find all combinations of (a, b) such that a + b = 5 (1 ≤ a, b ≤ 4).
for (let a = 1; a <= 4; a++) {
    for (let b = 1; b <= 4; b++) {
        if (a + b === 5) {
            console.log(`Combination: (${a}, ${b})`);
        }
    }
}




//  6. Logic-Based Tasks
// Check if a given number is a prime number using a loop.
let num = 29; // Example number
let isPrime = true;     
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime && num > 1) {
    console.log(`${num} is a prime number.`);   
}
else {
    console.log(`${num} is not a prime number.`);
}


// Print the factorial of a number (e.g., 6! = 720).
let factorial = 1;
let number = 6; // Example number
for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log(`Factorial of ${number} is ${factorial}`);



// Print the reverse of a number using a loop (e.g., 123 → 321).
let reverseNumber = 123; // Example number
let reversed = 0;
while (reverseNumber > 0) {
    let digit = reverseNumber % 10;
    reversed = reversed * 10 + digit;
    reverseNumber = Math.floor(reverseNumber / 10);
}
console.log(`Reversed number is ${reversed}`);


// Count the number of digits in a given number using a loop.
let countDigits = 12345; // Example number
let digitCount = 0;
while (countDigits > 0) {
    countDigits = Math.floor(countDigits / 10);
    digitCount++;
}
console.log(`Number of digits is ${digitCount}`);


// Check if a number is a palindrome (e.g., 121, 1331) using only number operations and loops.
let palindromeNumber = 121; // Example number
let originalNumber = palindromeNumber;
let reversedPalindrome = 0;
while (palindromeNumber > 0) {
    let digit = palindromeNumber % 10;
    reversedPalindrome = reversedPalindrome * 10 + digit;
    palindromeNumber = Math.floor(palindromeNumber / 10);
}
if (originalNumber === reversedPalindrome) {
    console.log(`${originalNumber} is a palindrome.`);
}
else {
    console.log(`${originalNumber} is not a palindrome.`);
}





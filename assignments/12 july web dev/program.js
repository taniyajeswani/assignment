// 1. Even or Odd Checker
// Write a Node.js script that takes a number as input and determines whether the number is even or odd using if-else.
const prompt=require('prompt-sync')()

let num=parseInt(prompt('enter a number: '))

if(num%2==0){
    console.log('the number is even')

}
else{
    console.log('number is odd')
}


// 2. Positive, Negative, or Zero
// Ask the user to input a number. Use if-else conditions to display whether the number is positive, negative, or zero.
let n=parseInt(prompt('enter a number: '))

if(n==0){
    console.log('number is zero')
}
else if(n>0){
    console.log('number is positive')
}
else{
    console.log('number is negative')
}

// 3. Age-based Eligibility
// Prompt the user to enter their age. Use if-else to check if the person is eligible to vote (18 or older). Display a suitable message.
let age=parseInt(prompt('enter your age: '))

if(age>=18){
    console.log('you can vote')
}
else{
    console.log('you are not elligible to vote')
}

// 4. Number Range Validator
// Ask the user to input a number. Use if-else to check whether the number lies within the range 10 to 20, inclusive. Display "In range" or "Out of range".
let p=parseInt(prompt('enter a number between 10 to 20: '))
if(p>=10 && p<=20){
    console.log('in-range')
}
else{
    console.log('out-of-range')
}

// 5. Check Number Equality
// Take two numbers from the user. Use if-else to check if both numbers are equal or not. If they are not equal, indicate which one is larger.
let n1=parseInt(prompt('enter first number'))
let n2=parseInt(prompt('enter second number'))
if(n1==n2){
    console.log("both numbers are equal")
}
else{
    if(n1>n2){
        console.log('first number is larger than second')
    }
    else{
        console.log('second number is larger than first')
    }
}

// 6. Simple Grading System
// Write a program that takes a score (0–100) as input and assigns a grade based on the following:

// 90 and above → Grade A

// 75–89 → Grade B

// 50–74 → Grade C

// Below 50 → Fail

// Use nested or chained if-else statements.
let mark=parseInt(prompt('enter your marks'))
if(mark>=90 &&mark<=100){
    console.log('grade A')
}
else if(mark>=75 &&mark<=89){
    console.log('grade B')
}
else if(mark>=50 &&mark<=74){
    console.log('grade C')
}
else if(mark<50 &&mark>=0){
    console.log('fail')
}
else{
    console.log('invalid marks')
}


// 7. Divisibility Checker (5 and 11)
// Prompt the user to input a number. Use if-else to check if it is divisible by both 5 and 11. Show a message based on the result.
let a=parseInt(prompt('enter a number'))
if(a%5==0 && a%11==0){
    console.log('the number is divisible by both 5 and 11')
}
else{
    console.log('the number is not divisible by both 5 and 11')
}


// 8. Find the Largest of Three Numbers
// Take three numbers as input. Use multiple if-else statements to find and print the largest number among them.
let x=parseInt(prompt('enter the first number'))
let y=parseInt(prompt('enter the second nmber'))
let z=parseInt(prompt('enter the third number'))
if(x>y){
    if(x>z){
        console.log("first number is the greatest of all the three numbers")
    }
    else{
        console.log("third number is the greatet among all three numbers")
    }
}
else{
    if(y>z){
        console.log("second number is the greatest among all three numbers")
    }
    else{
        console.log("third number is the greatest among all three numbers")
    }
}

// 9. Leap Year Validator
// Ask the user to enter a year. Use conditions to check whether it is a leap year or not, using the correct logic:
let year=parseInt(prompt("enter a year: "))
if(year%4==0 &&( year%100!=0 || year%400==0)){
    console.log("year is a leap year")
}
else{
    console.log("year is not leap year")
}
// Leap year if divisible by 4, but not by 100, unless also divisible by 400.

// 10. Vowel or Consonant
// Take a single alphabet character as input from the user. Use if-else to check whether it's a vowel (a, e, i, o, u) or consonant.
let char=prompt("enter a single character: ")
if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u' || char=='A' || char=='E' || char=='I' || char=='O' || char=='U'){
    console.log("the character is a vowel")
}
else{
    console.log("the character is a consonant")
}
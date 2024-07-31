// "Day 01" task of 30 day Coding Challenge.
/*
# Question 1: Sum of an Array

*Instructions:*
1. Write a function named sumArray that takes an array of numbers as input.
2. The function should return the sum of all numbers in the array.
3. Ensure your function works correctly by testing it with different inputs.

*Example:*
- Input: [1, 2, 3, 4, 5]
- Output: 15
*/

function sumArray(numbers: number[]): number {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([5.3, 4.4, 3.2, 2.8, 1.5])); // Output: 17.2
console.log(sumArray([5, 5, 5, 5, 5])); // Output: 25
console.log(sumArray([10, 20, 30, 40, 50])); // Output: 150

/*
  
  
  
  Question 2: Reverse a String
  
  Instructions:
  
  Write a function named reverseString that takes a string as input.
  The function should return the reversed version of the input string.
  Ensure your function works correctly by testing it with different inputs.
  Example:
  
  Input: "hello"
  Output: "olleh"
  
  */

function reverseString(text: string): string {
  return text.split("").reverse().join("");
}

console.log(reverseString("Hello")); // Output: olleH
console.log(reverseString("Apple")); // Output: elppA
console.log(reverseString("Coding")); // Output: gnidoC
console.log(reverseString("Typescript")); // Output: tpircsepyT

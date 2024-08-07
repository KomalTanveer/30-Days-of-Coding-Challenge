//*2nd Day Task Of 30 Days Challenge From Hello Coders Team*
/*
Question 3:
First and Last Element
Objective: Write a TypeScript function that takes an array of numbers and returns a new array containing only the first and last elements of the input array.

Requirements:
If the array has only one element, the function should return an array with that element duplicated.
Ensure the function handles arrays with a single element correctly.*/

function firstAndLast(arr: number[]): number[] {
  let result: number[] = [];

  if (arr.length === 1) {
    result = [arr[0], arr[0]]; // Duplicate the element if there's only one
  } else if (arr.length > 1) {
    result = [arr[0], arr[arr.length - 1]]; // Add the first and last elements
  }

  return result;
}

const result1 = firstAndLast([1, 2, 3, 4, 5]);
console.log(result1); // Output: [ 1, 5 ]

const result2 = firstAndLast([10, 20, 30, 40, 50]);
console.log(result2); // Output: [ 10, 50 ]

const result3 = firstAndLast([12, 24, 36, 48, 50]);
console.log(result3); // Output: [ 12, 50 ]

const result4 = firstAndLast([12.5, 9.3, 4.5, 7.7, 10.1]);
console.log(result4); // Output: [ 12.5, 10.1 ]

/*
Question: 4 
Find the Largest Number
Objective: Write a TypeScript function that takes an array of numbers and returns the largest number in the array.

Requirements:

The function should handle arrays with positive and negative numbers.
If the array contains only one number, return that number.
Ensure the function handles an empty array gracefully (you might decide to return undefined or throw an error based on your needs).*/

function findLargest(arr: number[]) {
  if (arr.length === 0) {
    return undefined;
  }
  let largestnum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestnum) {
      largestnum = arr[i];
    }
  }
  return largestnum;
}

console.log(findLargest([12, 13, 45, 9, 32])); // Output: 45
console.log(findLargest([-65, -42, -56, -11, -3])); // Output: -3
console.log(findLargest([])); // Output: undefined

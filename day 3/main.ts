/*Hello Coders 30-Day DSA Challenge: Day 3 Tasks
Question 5:
 
Remove Duplicates from Array
Write a TypeScript function named removeDuplicates that takes an array of numbers and returns a new array with all duplicate elements removed. 
*Do not use built-in methods* like Set.

Requirements:
- The function should iterate through the array and check for duplicates manually.
- You can use additional arrays or variables to keep track of seen elements.
- Do not use any built-in methods like filter, reduce, or Set.*/

function removeDuplicates(arr: number[]): number[] {
  let result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    // Check if the current element is already in the result array
    if (result.indexOf(current) === -1) {
      result.push(current);
    }
  }

  return result;
}
console.log(removeDuplicates([1, 1, 4, 4, 6, 8, 4])); // Output: [ 1, 4, 6, 8 ]
console.log(removeDuplicates([10, 70, 50, 90, 60, 50])); // Output: [ 10, 70, 50, 90, 60 ]
console.log(removeDuplicates([8, 8, 8, 8, 8])); // Output: [8]
console.log(removeDuplicates([])); // Output: []

/*


Question 6:
 Find the Second Largest Number in an Array
Write a TypeScript function named findSecondLargest that takes an array of numbers and returns the second largest number in the array. *Do not use built-in methods* like sort.

Requirements:
- The function should manually find the largest and second largest numbers by iterating through the array.
- You can use additional variables to keep track of the largest and second largest numbers.
- Do not use any built-in methods like sort.*/

function findSecondLargest(arr: number[]): number {
  let largest = arr[0];
  let secondlargest = arr[1];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondlargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondlargest && arr[i] != largest) {
      secondlargest = arr[i];
    }
  }
  return secondlargest;
}

console.log(findSecondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: 8
console.log(findSecondLargest([55, 67, 23, 12, 44, 88])); // Output: 67

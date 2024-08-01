/*

Question 7: Find Duplicate Numbers in an Array

*Description:*
Write a TypeScript function that takes an array of numbers as input and returns a new array containing only the duplicate numbers from the original array. If there are no duplicates, return an empty array.

*/
function findDuplicates(numbers: number[]): number[] {
  let duplicates: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j] && duplicates.indexOf(numbers[i]) === -1) {
        duplicates.push(numbers[i]);
        break;
      }
    }
  }

  return duplicates;
}

const numbers1 = [12, 11, 12, 18, 19, 23, 23, 14, 10, 19];
const duplicates1 = findDuplicates(numbers1);
console.log(duplicates1); // output: [ 12, 19, 23 ]

/*
Question 8: Filter Students with Marks Greater than 80

*Description:*
Create an array of objects where each object represents a student with properties name, age, and marks. Write a function that filters and prints the data of students who have marks greater than 80.*/

interface Student {
  name: string;
  age: number;
  marks: number;
}

const students: Student[] = [
  { name: "Ali", age: 20, marks: 75 },
  { name: "Sara", age: 22, marks: 85 },
  { name: "John", age: 21, marks: 90 },
];

function printTopStudents(students: Student[]): void {
  for (const student of students) {
    if (student.marks > 80) {
      console.log(
        `${student.name} - Age: ${student.age}, Marks: ${student.marks}`
      );
    }
  }
}
printTopStudents(students);

//output ;
//Sara - Age: 22, Marks: 85
//John - Age: 21, Marks: 90

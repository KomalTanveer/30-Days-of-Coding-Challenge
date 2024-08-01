/*

Question 7: Find Duplicate Numbers in an Array

*Description:*
Write a TypeScript function that takes an array of numbers as input and returns a new array containing only the duplicate numbers from the original array. If there are no duplicates, return an empty array.

*/
function findDuplicates(numbers) {
    var duplicates = [];
    for (var i = 0; i < numbers.length; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            if (numbers[i] === numbers[j] && duplicates.indexOf(numbers[i]) === -1) {
                duplicates.push(numbers[i]);
                break;
            }
        }
    }
    return duplicates;
}
var numbers1 = [12, 11, 12, 18, 19, 23, 23, 14, 10, 19];
var duplicates1 = findDuplicates(numbers1);
console.log(duplicates1);
var students = [
    { name: "Ali", age: 20, marks: 75 },
    { name: "Sara", age: 22, marks: 85 },
    { name: "John", age: 21, marks: 90 },
];
function printTopStudents(students) {
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var student = students_1[_i];
        if (student.marks > 80) {
            console.log("".concat(student.name, " - Age: ").concat(student.age, ", Marks: ").concat(student.marks));
        }
    }
}
printTopStudents(students);

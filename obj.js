// Additional assignments for Day 4

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

/* let numbers = [1, 3, 5];
let reversedNumbers = numbers.reverse();

console.log(reversedNumbers);
or
let numbers = [1, 3,  5];
let reversedNumbers = [];

for(let i = numbers.length -1; i >= 0; i--) {
  reversedNumbers.push(numbers[i]);
}

console.log(reversedNumbers);
 */

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/


/* var nums = [1, 2, 3]
Math.max.apply(Math, nums)  
console.log(Math.max(...nums));
   */

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

/* var nums = [1, 2, 3]
 Math.min.apply(Math, nums)    
 */

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/
/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const even = arr.filter(number => {
  return number % 2 === 0;
});

console.log(even);
/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

/* let array = [1, 5, 3, 22, 21, 43, 43, 432, 346]

var newArray = []

for (var i=0; i < array.length; i++) {
  if (array[i] % 2 !== 0)
   newArray.push(array[i])
} */

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

/* 
var strings = ["sweta", "sriramadas", "germany", "frankfurt",
               ];
string = strings.map(x=>x.replace( /[aeiou]/g, '' ));
console.log(string); */

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

/* var myArray = [1, 2, 3, 4];

for (var i = 0; i < myArray.length; i++){
    myArray[i] += 1;
    console.log(myArray);

}
 */

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* var strings1 = ["strive", "is", "great"]
var newArray1 = []

for (var i = 0; i < strings1.length; i++){
    console.log(strings1[i].length);
    newArray1.push(strings1[i].length);

}
console.log(newArray1); */

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/

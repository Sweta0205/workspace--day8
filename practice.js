console.log("----------------practice------------------\n")
let numbers = [1,  3, 5];
let reversedNumbers = numbers.reverse();

console.log(reversedNumbers);
console.log(numbers);

var nums = [1, 2, 3]
Math.max.apply(Math, nums) 
Math.max.apply(Math, nums) 
console.log(Math.max(...nums));
console.log(Math.min(...nums));





const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const even = arr1.filter(number => {
  return number % 2 === 0;
});

console.log(even);



let array = [1, 5, 3, 22, 21, 43, 43, 432, 346]

var newArray = []

for (var i=0; i < array.length; i++) {
  if (array[i] % 2 !== 0)
   newArray.push(array[i]);
}
console.log(newArray);


var strings = ["sweta", "sriramadas", "germany", "frankfurt", ];
string = strings.map(x=>x.replace( /[aeiou]/g, '' ));
console.log(string); 
    
var myArray = [1, 2, 3, 4];
for (var i = 0; i < myArray.length; i++){
    myArray[i] += 1;
    console.log(myArray);

}

var strings1 = ["strive", "is", "great"]
var newArray1 = []

for (var i = 0; i < strings1.length; i++){
    console.log(strings1[i].length);
    newArray1.push(strings1[i].length);

}
console.log(newArray1);




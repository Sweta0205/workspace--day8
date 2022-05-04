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

const arr2 = [1, 2, 3, 4, 5, ];
console.log(arr2)


var student ={
    name: "sweta",
    surname: "sriramadasu",
    emailaddress: "swethasriramdas2311@gmail.com",
    age :26,
    hasdrivinglicence: true
    
}
console.log(student)
delete student.age
console.log(student)


let student2 ={
    name: "saikiran",
    surname: "sreeeee",
    email : "sai.sweta2311.com",
    age :28
}

let  eq = student.email == student2.email
console.log(eq);

let  x =100;
let totalcost;
if(x>50)
{

totalcost=x + 0
}
else
{
totalcost=x + 10

}
console.log(totalcost)


let  y =20
if(x>50)

{
    totalcost =x + y;
}
else
{
        totalcost =y+x+10;

}
console.log(totalcost)

let  car ={
    brand:"BMW",
    model:"shhjj",
    licence:"2222"
} 
let car1 = Object.assign({}, car);
let car2 = Object.assign({}, car);
let car3 = Object.assign({}, car);
let car4 = Object.assign({}, car);
console.log(car)
console.log(car1)
console.log(car2)
console.log(car3)


console.log(car4)


let carsForRent = [car1, car2, car3, car4, car5];
car.push(carsForrent);
console.log(car)


carsForRent.pop();
carsForRent.shift();

car1.license = '1111';
car2.license = '2345';
car3.license = '6666';
car4.license = '7777';
car.license = '2222';
car1.brand = 'maruti';
car2.brand = 'audi';
car3.brand = 'vols';
car4.brand = 'fiat';
car.brand= 'ssss';
console.log(typeof car, typeof car.licensePlate, typeof car.brand);


let carsForSale = [car1, car5, car2];


 let totalCars = {
    carsForSale: carsForSale.length,
    carsForRent: carsForRent.length,
  };
  

  for (let i = 0; i < carsForSale.length; i++) {
    console.log(carsForSale[i].brand);
    console.log(carsForSale[i].model);
    console.log(carsForSale[i].licensePlate);
  }

  

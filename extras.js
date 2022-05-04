/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/
/* 
const arr1 = [1, 2, 3, 4, 5, ];

 */

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

/* var student{
    name: "sweta"
    surname: "sriramadasu"
    email address: "swethasriramdas2311@gmail.com"
    age :26
}

 */

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

/* hasdrivinglicence: true */

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

/* 
delete student.age
console.log(student)
 */

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* var student2{
    name: "saikiran"
    surname: "sreeeee"
    email : "sai.sweta2311.com"
    age :28
var eq = student1.email == student2.email;
alert(eq);
} */

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* var totalShoppingCart ;
if(totalShoppingCart>50)
{
totalcost="totalshoppingCart + 0"
}
else
{
totalcost="totalshoppingCart + 10"

}


 */

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/



/*
var blackfridaydiscount =20%
if((totalShoppingCart>50)
{
    totalcost =blackfridaydiscount+ totalshoppingcart
}
else
{
        totalcost =blackfridaydiscount+ totalshoppingcart+10

}
console.log(totalcost);


 */

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/* var car={
    brand:"BMW",
    model:"shhjj",
    licence:"2222"
} 
let car1 = Object.assign({}, car);
car1.license 
let car2 = Object.assign({}, car);
car2.license 
let car3 = Object.assign({}, car);
car3.license 
let car4 = Object.assign({}, car);
car4.license =7777
let car = Object.assign({}, car);
car.license 

let clone  = Object.assign({}, car);
console.log(clone);
const clone = Object.assign({}, car);
console.log(clone);
const clone = Object.assign({}, car);
console.log(clone);
const clone = Object.assign({}, car);
console.log(clone);
const clone = Object.assign({}, car);
console.log(clone);



*/

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* 
var carsForrent;
car.push(carsForrent);

 */

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* const removeFirst = car.shift();
    console.log(removeFirst);
    const removeLast = car.pop();
console.log(removeLast);
or
const withoutFirstAndLast = arr.slice(1, -1);
console.log(withoutFirstAndLast); 

console.log(arr)

*/

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* car1.license = '1111';
car2.license = '2345';
car3.license = '6666';
car4.license = '7777';
car.license = '2222';
car1.brand = 'maruti';
car2.brand = 'audi';
car3.brand = 'vols';
car4.brand = 'fiat';
car.brand= 'ssss';
 */

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* var  carsForSale { brand: 'bbb', model:7777, licence: 66 }

 var  carsForRent { brand: 'sss', model:8888, licence: 22 }

var totalCars = carsForSale.concat(carsForRent);


 */

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* 
for (let carsForSale = 0; i < cars.length; i++) {
  console.log(carsForSale[i]);

*/

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/

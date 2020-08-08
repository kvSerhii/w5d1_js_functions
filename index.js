"use strict";

// 1.

/* // cycle power
 let num, pow, result;

num = Number(prompt("Enter a number"));
pow = Number(prompt("Enter a power"));

let result = powFunc(num, pow);
console.log(result);

function powFunc(num) {
  return Math.pow(num, pow);
} */

// result = cyclePowFunction(num, pow);

// function cyclePowFunction(num, pow) {
//   for (let i = 0; i < pow - 1; i++) {
//     num *= num;
//   }
//   return num;
// }
// alert(result);

/* // recursive power
let numb, power;

numb = Number(prompt("Enter a number"));
power = Number(prompt("Enter a power"));

alert(pow(numb, power));

function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
} */

/* let numOne, numTwo, resultMax, resultMin;

numOne = Number(prompt("Enter first number for comparison"));
numTwo = Number(prompt("Enter first number for comparison"));

resultMax = numberMax(numOne, numTwo);
console.log(`Max number is: ${resultMax}`);
alert(resultMax);

// max value
function numberMax(numOne, numTwo) {
  if (numOne > numTwo) {
    return numOne;
  }
  return numTwo;  
}

resultMin = numberMin(numOne, numTwo);
console.log(`Min number is: ${resultMin}`);
alert(resultMin);

// min value
function numberMin(numOne, numTwo) {
  if (numOne > numTwo) {
    return numTwo;
  }
    return numOne;  
}
 */

/* // is number even
let num = Number(prompt("Enter a number"));
console.log(isEven(num));

function isEven(number) {
  return number % 2 === 0;
} */

/* // objects
const cat = {
  color: "grey",
  age: 2,
  weight: 3,
  male: true,
  breed: "Abyssinian",
  catties: {
    amount: 3,
  },
  sayHi() {
    return "Meow";
  },
  run() {
    return "Cat is running";
  },
  eat() {
    return "Cat eating";
  },
};

console.log(cat.sayHi());
console.log(cat.run());
console.log(cat.eat());

const table = {
  color: "darkBrown",
  squareSize: 1.2,
  style: "classic",
};

console.log(table.color);
 */

// this
/* 
function Cat(color, weight, bread, age, name) {
  this.color = color;
  this.weight = weight;
  this.bread = bread;
  this.age = age;
  this.name = name;
  this.intro = function () {
    return `My name is ${this.name}`;
  };
}

const cat1 = new Cat("white", 2300, "Burmese", 2, "Mike");
const cat2 = new Cat("Red", 3200, "Abyssinian", 2, "Dan");
const cat3 = new Cat("Grey", 2600, "Himalayan", 2, "Will");
const cat4 = new Cat("Black", 3600, "Persian", 2, "Bill");

console.log(cat1.intro());
console.log(cat2.intro());
console.log(cat3.intro());
console.log(cat4.intro());
 */

/* function Country(name, population, square, populationDensity) {
  this.name = name;
  this.population = population;
  this.square = square;

  this.getDensity = function () {
    return (this.population / this.square) * 1000000;
  };
}

const country1 = new Country("Italy", 45, 500);
const country2 = new Country("Spain", 78, 420);
const country3 = new Country("Fiji", 13, 127);
const country4 = new Country("Australia", 112, 1243);

console.log(country1.populationDensity());
console.log(country2.populationDensity());
console.log(country3.populationDensity());
console.log(country4.populationDensity()); */

function Car(speed) {
  this.speed = speed;
  this.stage = function (speed) {
    if (speed > 0) {
      return "ride";
    } else {
      return "stand";
    }
  };
}

const car1 = new Car(this.speed);
const car2 = new Car(this.speed);
const car3 = new Car(this.speed);
const car4 = new Car(this.speed);
const car5 = new Car(this.speed);
const car6 = new Car(this.speed);

console.log(car1.stage(0));
console.log(car2.stage(10));
console.log(car3.stage(0));
console.log(car4.stage(50));
console.log(car5.stage(100));
console.log(car6.stage(200));

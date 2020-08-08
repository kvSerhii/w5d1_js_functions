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


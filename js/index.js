/** @format */

// /** @format */

// function sumNumbers(num1, num2) {
//   const addition = num1 + num2;
//   const result = "The result of your addition is " + addition;
//   console.log(result);
//   return result;
// }

// sumNumbers(500, 50);

// function productNumbers(num1, num2) {
//   const multiply = num1 * num2;
//   const result = "The result of your multiplication is " + multiply;
//   console.log(result);
//   return result;
// }

// productNumbers(500, 50);

// function divideNumbers(num1, num2) {
//   const divide = num1 / num2;
//   return "The result of your division is " + divide;
// }

// const answer = divideNumbers(567,890);

// console.log(answer);

let score = parseInt(prompt("Enter your score"));

if (score >= 70 && score <= 100) {
  alert("Congrats, you scored an A");
} else if (score >= 60 && score <= 69) {
  alert("You scored a B");
} else if (score >= 50 && score <= 59) {
  alert("You scored a C");
} else if (score >= 45 && score <= 49) {
  alert("You scored a D");
} else if (score >= 40 && score <= 44) {
  alert("You scored an E");
} else if (score >= 0 && score <= 39) {
  alert("Omo! You failed");
} else {
  alert("Invalid score");
}

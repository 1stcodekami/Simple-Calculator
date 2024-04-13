#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Please Enter First Number: ", type: "number", name: "num1" },
  { message: "Please Enter Second Number: ", type: "number", name: "num2" },
  {
    message: "Select operator to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
console.log("Answer is ");
if (answer.operator === "Addition") {
  console.log(answer.num1 + answer.num2);
} else if (answer.operator === "Subtraction") {
  console.log(answer.num1 - answer.num2);
} else if (answer.operator === "Multiplication") {
  console.log(answer.num1 * answer.num2);
} else if (answer.operator === "Division") {
  console.log(answer.num1 / answer.num2);
}

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "FirstNumber" },
  { message: "Enter Second Number", type: "number", name: "SecondNumber" },
  {
    message: "Select one of the Operators",
    type: "list",
    name: "Operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
if (answer.Operators === "Addition") {
  console.log("Your value is:", answer.FirstNumber + answer.SecondNumber);
} else if (answer.Operators === "Subtraction") {
  console.log("Your value is:", answer.FirstNumber - answer.SecondNumber);
} else if (answer.Operators === "Multiplication") {
  console.log("Your value is:", answer.FirstNumber * answer.SecondNumber);
} else if (answer.Operators === "Division") {
  console.log("Your value is:", answer.FirstNumber / answer.SecondNumber);
}

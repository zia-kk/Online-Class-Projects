#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myAmount = 50000;
let myPin = 1234;

let check_pin = await inquirer.prompt([
  { name: "pin", type: "number", message: "Enter Your Pin_Code:" },
]);

if (check_pin.pin === myPin) {
  console.log("Welcome To Node ATM");

  let operation = await inquirer.prompt([
    {
      name: "method",
      type: "list",
      message: "Select Your operation",
      choices: ["Cash_witdraw", "Balance Check"],
    },
  ]);

  if (operation.method === "Cash_witdraw") {
    let amount = await inquirer.prompt([
      { name: "Amount", type: "number", message: "Enter Your Amount:" },
    ]);

    if (amount.Amount <= myAmount && amount.Amount >= 500) {
      myAmount -= amount.Amount;
      console.log(
        chalk.red("Your remaining balance is:> " + chalk.bgCyanBright(myAmount))
      );
    } else {
      console.log("invalid Amount");
    }
  } else if (operation.method === "Balance Check") {
    console.log(
      chalk.red("Your remaining balance is:> " + chalk.bgCyanBright(myAmount))
    );
  }
} else {
  console.log("Invalid Pin");
}

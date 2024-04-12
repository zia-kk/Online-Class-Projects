#!/usr/bin/env node


import inquirer from "inquirer"

import chalk, { Chalk } from "chalk"

console.log("\n");

console.log(chalk.bgMagenta("\t\t\t\t*****WELCOME TO CURRENCY CONVERTER*****t\t\t\t"));

console.log("\n");



const currency:any={
    USD:1,
    EUR:0.91,
    GBP:0.76,
    INR:74.57,
    PKR:280,

}


let user_answer = await inquirer.prompt([

    {name: "from",
    message: chalk.green("Enter from currency:"),
    type: "list",

    choices:["USD" , "EUR" , "GBP" , "INR" , "PKR"],
},
{
    name: "to",
    message: chalk.bold.magenta("Enter To currency:"),
    type: "list",

    choices:["USD" , "EUR" , "GBP" , "INR" , "PKR"],
},
{
    name:"amount",
    message: chalk.yellow("Enter your Amount:"),
    type: "number",
}
]);

let fromAmount= currency[user_answer.from];
let toAmount= currency[user_answer.to];
let amount= user_answer.amount
let baseAmount= amount/fromAmount;
let convertedAmount= baseAmount*toAmount

console.log("\n");


console.log(chalk.hex("29F700")("Your Result is: "),chalk.bgHex("A94B00")(convertedAmount.toPrecision(5)));

console.log("\n");

console.log(chalk.bgMagenta("\t\t\t\t*****THANK YOU*****\t\t\t"));











 


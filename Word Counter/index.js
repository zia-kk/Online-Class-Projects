#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log("\n");
console.log(chalk.bgMagentaBright("\t\t\t\t********WELCOME TO WORD COUNTER PROJECT********* \t\t\t\t"));
console.log("\n");
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.hex("F67D05")("Enter Your Sentence To Count The Word:")
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(chalk.hex("0559F6")(`Your Sentence Word Count Is: ${words.length}`));
console.log("\n");
console.log(chalk.hex("3FF605")("\t\t\t\t\t\t\*****THANK YOU*****\t\t\t"));

#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let todos = [];
let conndition = true;
console.log("\n");
console.log(chalk.bold.bgMagentaBright("\t\t\t >>>>>>Welcome To TODO App<<<<<\t"));
console.log("\n");
while (conndition) {
    let todolist = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: chalk.hex('F57A00')("what would you like to add todos:"),
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: chalk.bold.hex('FF0000')("would you like to add more in you todo?"),
            default: "true",
        }
    ]);
    todos.push(todolist.firstQuestion);
    console.log(todos);
    conndition = todolist.secondQuestion;
}

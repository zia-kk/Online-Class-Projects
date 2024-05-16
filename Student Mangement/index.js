import inquirer from "inquirer";
import chalk from "chalk";
console.log("\n");
console.log(chalk.bgMagentaBright(`\t\t\t ********WELCOME TO STUDENT MANAGEMENT SYSTEM********\t\t\t`));
console.log("\n");
const random = Math.floor(10000 + Math.random() * 90000);
let mybalance = 0;
let answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Enter student name",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "For Next Step Must Be Write Somthing";
        }
    },
    {
        name: "courses",
        type: "list",
        message: "plz Select the course: ",
        choices: ["Amazone", "Shopify", "Javascript", "Daraz"],
    }
]);
const tutionfee = {
    "Amazone": 5000,
    "Shopify": 2500,
    "Javascript": 3000,
    "Daraz": 1500,
};
console.log(`\n Tution Fee: ${tutionfee[answer.courses]}/-\n`);
console.log(`Balance: ${mybalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Please Select payment Mode",
        choices: ["To Bank", "To Easypaisa", "To Jazzcash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter Your Transfer Money: ",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Must be Enter Amount";
        }
    }
]);
console.log(`\nYou Selected  ${paymentType.payment}\n`);
const tutionfees = tutionfee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionfees === paymentAmount) {
    console.log(`Congratulation! You Have Successfuly Enroled in ${answer.courses}\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would You like to do Next?: ",
            choices: ["Veiw status", "Exit"]
        }
    ]);
    if (ans.select === "Veiw status") {
        console.log(chalk.bgGreenBright("\n \t\t\t\t******S T A T U S******\n"));
        console.log(`Student Name: ${answer.student}`);
        console.log(`Student ID: ${random}`);
        console.log(`Course: ${answer.courses}`);
        console.log(`Tution Fees Paid: ${paymentAmount}`);
        console.log(`Balance: ${mybalance += paymentAmount}`);
    }
    else {
        console.log("\n Exiting Student Management System\n");
    }
}
else {
    console.log("Invalid Amount");
}

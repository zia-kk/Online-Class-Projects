import inquirer from "inquirer";
 const bmi= await inquirer.prompt([
    {message: "Enter your Weight of Body",
     name: "weightofbody",
     type:"number"
    },
    {message: "Enter your Height of Body",
    name: "heightofbody",
    type:"number"},
    {message: "Thanks for Choosing Me ",
     name:"operator",
     type: "list",
    choices: ["BMI CALCULATOR"]}
]);

    console.log(bmi.weightofbody/(bmi.heightofbody**2));

    

    

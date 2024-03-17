import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter your first Numner", type: "number", name: "firstnumber" },
  {message: "Enter your second Number",type: "number",name: "secondnumber"},
  {message: "Please kisi aik operator ko choose karein",
  type: "list",
  name: "operator",
  choices: ["Addition" , "subtraction" , "multiplication" , "division" ,"modulus"],
  },
]);
    
if(answer.operator==="Addition"){
    console.log("Anser=" , answer.firstnumber+answer.secondnumber);
}
if(answer.operator==="subtraction"){
    console.log("Anser=" , answer.firstnumber-answer.secondnumber);
}
if(answer.operator==="multiplication"){
    console.log("Anser=" , answer.firstnumber*answer.secondnumber);
}

if(answer.operator==="division"){
    console.log("Anser=" , answer.firstnumber+answer.secondnumber);
}

if(answer.operator==="modulus"){
    console.log("Anser=" , answer.firstnumber%answer.secondnumber);
}
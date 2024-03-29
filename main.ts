 import inquirer from "inquirer";

 const randomNumber = Math.floor(Math.random() *6 + 1);
const answer = await inquirer.prompt([{
    name: "UserguessNumber",
    type: "number",
    message: "please guess a number"
}])
if(answer.UserguessNumber === randomNumber){
    console.log("congratulation you guessed right number")
}else{
    console.log("you guessed wrong number")
}
 

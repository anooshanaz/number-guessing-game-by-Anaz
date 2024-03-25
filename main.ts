 import inquirer from "inquirer";

 const randonNumber = 9;
const answer = await inquirer.prompt([{
    name: "UserguessNumber",
    type: "number",
    message: "please guess a number"
}])
if(answer.UserguessNumber === randonNumber){
    console.log("congratulation you guessed right number")
}else{
    console.log("you guessed wrong number")
}
 

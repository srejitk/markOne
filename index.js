var readlineSync = require('readline-sync');
const chalk = require('chalk');
var scoreboard = 0

function welcomeMessage(){
var userName = readlineSync.question(chalk.bold.red("Hi!, What's your name ") + chalk.bold.white.bgRed("buddy?\n"));
console.log(chalk.bold.blue("Welcome to How well do you know Sreejith,")+chalk.bold.white.bgBlue(userName)+"!!\n");

console.log(chalk.bold.yellow("Let's see if you really know me after all\n"));
}

function play(question,answer){
var userAns = readlineSync.question(question);
if (userAns===answer){
  console.log(chalk.bold.green("Not Bad Kid. Not Bad at all!\n"))
  scoreboard = scoreboard + 1;
}else {
    console.log(chalk.red.bold("*Evil Laugh*! And you thought you knew me well?!?\n"))
  scoreboard = scoreboard - 1;
}
console.log("Current Score :"+scoreboard +"\n");
}

var highscore = [{
  name: "Me",
  score: 4,
}];

function letsplay(){

var questions = [{
  question : chalk.bold.cyan(("What's my pet name?")+chalk.bold.blue("\nA.Sree \nB.Chinnu \nC.Santu \nD.Raju\n")),
  answer : "C"
},
{
  question : "Which is my Favouite Color? \nA.Pitch Black\nB.Bloody Red\nC.Persian Blue\nD.Neon Green\n",
  answer : "A"
},
{
  question : "Which is my favourite Cinematic Universe?\nA.Marvel \nB.DC \nC.The Boys \nD.Star Wars\n",
  answer : "A"
},
{
  question : "Which language am I most comfortable in? \nA.Malayalam \nB.Hindi \nC.Kannada \nD.English\n",
  answer : "B"
}]



  for(var i=0;i< questions.length;i++){
  play(questions[i].question,questions[i].answer)
}
}


console.log("");

function endgame(){
if(scoreboard === highscore[0].score)
{
  console.log(chalk.blueBright.bold("YAYAYYAYA!!! You scored is the highest! Send a screenshot of your score and we'll update it with your deetails!! Congratulations!"));
}else{
  console.log(chalk.redBright.bold("Ahhh. You have still much to learn, come back and try again Next Time"))
}}

welcomeMessage();
letsplay();
endgame()

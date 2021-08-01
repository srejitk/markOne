var readlineSync = require('readline-sync');
const chalk = require('chalk');
var scoreboard = 0

function welcomeMessage(){
var userName = readlineSync.question(chalk.bold.red("What's your Hero name ") + chalk.bold.white.bgRed("Challenger?\n"));
console.log(chalk.bold.blue("Welcome to The MCU ")+chalk.bold.white.bgBlue(userName)+"!!\n");

console.log(chalk.bold.yellow("Let's the battle begin!\n"));
}

function play(question,answer){
var userAns = readlineSync.question(question);
if (userAns===answer){
  console.log(chalk.bold.green("Nice One there Dr. Banner!!\n"))
  scoreboard = scoreboard + 1;
}else {
    console.log(chalk.red.bold("Uh-Oh. You Should've gone for the head\n"))
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
  question : chalk.bold.cyan(("Who is the oldest Avenger?")+chalk.bold.blue("\nA.Captain America \nB.Captain Marvel \nC.Winter Soldier \nD.Thor\n")),
  answer : "D"
},
{
  question : "Who made Spiderman an Avenger? \nA.Iron Man\nB.Ronin\nC.Dr Strange\n",
  answer : "A"
},
{
  question : "Which stone was embedded in Vision?\nA.Power Stone \nB.Mind Stone \nC.Reality Stone \nD.Time Stone\n",
  answer : "B"
},
{
  question : "What was the home Planet of Thanos called? \nA.Morag \nB.Knowhere \nC.Titan \nD.Ego\n",
  answer : "C"
}]



  for(var i=0;i< questions.length;i++){
  play(questions[i].question,questions[i].answer)
}
}

console.log(chalk.green.bold("Your final score is: ") + chalk.yellow.bold(scoreboard));
console.log("");

function endgame(){
if(scoreboard === highscore[0].score)
{
  console.log(chalk.blueBright.bold("YAYAYYAYA!!! You scored is the highest! Send a screenshot of your score and we'll update it with your deetails!! Congratulations!"));
}else{
  console.log(chalk.redBright.bold("Ahhh. You have still much to learn, go back and rewatch them \n and come back Challenger"))
}}

welcomeMessage();
letsplay();
endgame()

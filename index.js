var readlineSync = require('readline-sync');
const chalk = require('chalk');
var scoreboard = 0

function welcomeMessage() {
  var userName = readlineSync.question(chalk.bold.red("Hi!, What's your name ") + chalk.bold.white.bgRed("Challenger\n"));
  console.log(chalk.bold.blue("Welcome to How well do you know the MCU,Challenger ") + chalk.bold.white.bgBlue(userName) + "!!\n");

  console.log(chalk.bold.yellow("Let's see if you really know me after all\n"));
}

function play(question, answer) {
  var userAns = readlineSync.question(question);
  if (userAns === answer) {
    console.log(chalk.bold.green("Not Bad Kid. Not Bad at all!\n"))
    scoreboard = scoreboard + 1;
  } else {
    console.log(chalk.red.bold("*Evil Laugh*! You should have gone for the head\n"))
    scoreboard = scoreboard - 1;
  }
  console.log("Current Score :" + scoreboard + "\n");
}

var highscore = [{
  name: "Me",
  score: 5,
}];

function letsplay() {

  var questions = [
    {
    question: chalk.bold.cyan(("Who's the first avenger?") + chalk.bold.blue("\nA.Captain America \nB.Batman \nC.Shaang Chi \nD.StarLord\n")),
    answer: "A"
  },{
    question: chalk.bold.cyan(("Who killed Tony Stark's parents?") + chalk.bold.blue("\nA.Black Widow \nB.Hydra \nC.Winter Soldier \nD.Obadiah Stane\n")),
    answer: "C"
  },
  {
    question: "Which got stuck in Sakaar? \nA.Iron Man\nB.Hawkeye\nC.Hulk\nD.Ultron\n",
    answer: "C"
  },
  {
    question: "Which is the killer of avengers in What If?\nA.Loki \nB.Winter Soldier \nC.Antman \nD.Heimdall\n",
    answer: "C"
  },
  {
    question: "Which language does thor study as an elective? \nA.Kree \nB.Groot \nC.Nelvayu \nD.Shiväisith\n",
    answer: "B"
  }]



  for (var i = 0; i < questions.length; i++) {
    play(questions[i].question, questions[i].answer)
  }
}


console.log("");

function endgame() {
  if (scoreboard === highscore[0].score) {
    console.log(chalk.blueBright.bold("YAYAYYAYA!!! You scored is the highest! Send a screenshot of your score and we'll update it with your deetails!! Congratulations!"));
  } else {
    console.log(chalk.redBright.bold("Ahhh. You have still much to learn, come back and try again Next Time"))
  }
}

welcomeMessage();
letsplay();
endgame()

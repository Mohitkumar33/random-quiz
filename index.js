var readlineSync = require('readline-sync');
var chalk = require('chalk');

var userName = readlineSync.question("Hey! whats your username: ")
console.log(chalk.blue("Welcome! "+userName+" Let's see How well you know about triangles"));
console.log("----------------------");
var score = 0;
console.log(chalk.green("There are total 10 question and one question is equal to one mark. There is no negative marking. Let begin!"))
console.log("----------------------");

function play(question,option,answer)
{
  console.log(question);
  console.log(option);
  var userAns = readlineSync.question("Enter the correct option  : ");
  if(userAns.toUpperCase() === answer)
  {
    console.log(chalk.green("right!"));
    score = score+1;
  }
  else{
    console.log(chalk.red("wrong!"));
    console.log("The correct option is "+answer);
  }

  console.log("Current score: ",score)
  console.log("----------------------");
}

var arr = [
  {question:"Q1. Which triangle has all three sides equal in length?",
  option:"A. Equilateral  B. Isosceles  C. Scalene",
  answer:"A"},
  {question:"Q2. What type of triangle is Δ ABC, where AB = AC = BC = 10 cm?",
  option:"A. Equilateral  B. Isosceles  C. Scalene",
  answer:"A"},
  {question:"Q3. What type of triangle has all angles measuring 60°",
  option:"A. Equilateral  B. Isosceles  C. Scalene",
  answer:"A"},
  {question:"Q4. What type of triangle is Δ ABC, where ∠A = ∠B = ∠C = 60°",
  option:"A. Equilateral  B. Isosceles  C. Scalene",
  answer:"A"},
  {question:"Q5. A triangle has two sides measuring 15 meters and one side measuring 7 meters. What type of triangle is this",
  option:"A. Equilateral  B. Isosceles  C. Scalene",
  answer:"B"},
  {question:"Q6. What type of triangle is Δ ABC, where AB = 44 km, AC = 44 km and BC = 36 km",
  option:"A. Equilateral  B. Isosceles  C. Scalene",
  answer:"B"},
  {question:"Q7. A triangle has two angles measuring 46° and one angle measuring 88°. What type of triangle is this",
  option:"A. Equilateral  B. Isosceles  C. Scalene",
  answer:"B"},
  {question:"Q8. What type of triangle is Δ ABC, where ∠B = ∠C = 73°?",
  option:"A. Equilateral  B. Isosceles  C. Scalene",
  answer:"B"},
  {question:"Q9. Which triangle has three unequal sides?",
  option:"A. Equilateral  B. Isosceles  C. Scalene",
  answer:"C"},
  {question:"Q10. A triangle has angles measuring 60°, 66° and 54°. What type of triangle is this?",
  option:"A. Equilateral  B. Isosceles  C. Scalene",
  answer:"C"}
]
for(i=0;i<arr.length;i++)
{
  var obj = arr[i];
  play(chalk.yellow(obj.question),obj.option,obj.answer)
}
console.log("Thank You for taking the quiz");
console.log(userName+"! Your Total Score out of 10 is : "+score);
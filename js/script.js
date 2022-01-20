// $(".choices").hide();

$(".play").click(function () {
  let randomNumber = 0;
  let computerChoice;
  let result;

  let userChoice = $(".input").val();
  $(".userChoice").text(userChoice);
  randomNumber = Math.ceil(Math.random() * 3);
  console.log(randomNumber);
  if (randomNumber === 1) {
    computerChoice = "rock";
    $(".computerChoice").text(computerChoice);
  } else if (randomNumber === 2) {
    computerChoice = "paper";
    $(".computerChoice").text(computerChoice);
  } else if (randomNumber === 3) {
    computerChoice = "paper";
    $(".computerChoice").text(computerChoice);
  }
  
  if (userChoice === "rock" && computerChoice === "rock") {
    result = "It's a tie!";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    result = "You win!";
  } else if (userChoice === "scissor" && computerChoice === "rock") {
    result = "Computer wins!";
  } else if (userChoice === "rock" && computerChoice === "paper") {
    result = "Computer wins!";
  } else if (userChoice === "paper" && computerChoice === "paper") {
    result = "It's a tie";
  } else if (userChoice === "scissor" && computerChoice === "paper") {
    result = "You win!";
  } else if (userChoice === "rock" && computerChoice === "scissor") {
    result = "You win!";
  } else if (userChoice === "paper" && computerChoice === "scissor") {
    result = "Computer wins!";
  } else if (userChoice === "scissor" && computerChoice === "scissor") {
    result = "It's a tie!";
  }
  $(".result").text(result);
});

function getRandomComputerChoice() {
  let randomNumber = 0;
  let computerChoice;
  let result;

  let userChoice = $(".input").val();
  $(".userChoice").text(userChoice);
  randomNumber = Math.ceil(Math.random() * 3);
  console.log(randomNumber);
  if (randomNumber === 1) {
    computerChoice = "rock";
    $(".computerChoice").text(computerChoice);
  } else if (randomNumber === 2) {
    computerChoice = "paper";
    $(".computerChoice").text(computerChoice);
  } else if (randomNumber === 3) {
    computerChoice = "paper";
    $(".computerChoice").text(computerChoice);
  }
  let answer = getRandomComputerChoice();

console.log(answer);

}

let answer = getRandomComputerChoice();

console.log(answer);

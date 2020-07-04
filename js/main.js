'use strict';
{
 let userScore = 0;
 let computerScore = 0;
 const userScore_span = document.getElementById("user_score");
 const computerScore_span = document.getElementById("computer_score");
 const result_p = document.querySelector(".result > p");
 const rock_div = document.getElementById("r");
 const paper_div = document.getElementById("p");
 const scissors_div = document.getElementById("s");
 const restart = document.getElementById("restart");



 function getComputerChoice(){
   const choices = ['r','p','s'];
   const randomNumber = Math.floor(Math.random() *3);
   return choices[randomNumber];
 }

 function convertToWord(letter) {
   if(letter === "r") return "Rock";
   if(letter === "p") return "Paper";
   if(letter === "s") return "Scissors";
 }
 function win(userChoice,computerChoice){
   userScore++;
   userScore_span.textContent = userScore;
   const smallUserWord = "user".fontsize(3).sub();
   const smallCompWord = "comp".fontsize(3).sub();
   const userChoice_div = document.getElementById(userChoice);
   result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} beats  ${convertToWord(computerChoice)}${smallCompWord}.<br><br> You WIN!!!🔥`;
   userChoice_div.classList.add('green_glow');
   setTimeout(()=> userChoice_div.classList.remove('green_glow'),300);
 }


 function lose(userChoice,computerChoice){
  computerScore++;
  computerScore_span.textContent = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} ... <br><br> You LOST...💩`;
  userChoice_div.classList.add('red_glow');
   setTimeout(()=> userChoice_div.classList.remove('red_glow'),300);
 }
 function draw(userChoice,computerChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals  ${convertToWord(computerChoice)}${smallCompWord} <br><br>It's a draw.`;
  userChoice_div.classList.add('gray_glow');
   setTimeout(()=> userChoice_div.classList.remove('gray_glow'),300);
 }


 function game(userChoice){
  const computerChoice = getComputerChoice();    
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
     win(userChoice,computerChoice);
     break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice,computerChoice);
     break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice,computerChoice);
     break;
  }
 }

 function main() {
  rock_div.addEventListener('click',()=> game("r"));
  paper_div.addEventListener('click',()=>game("p"));
  scissors_div.addEventListener('click',()=> game("s"));
}
    restart.addEventListener('click',()=>{
    userScore = 0;
    computerScore = 0;  
    });




 
main();


}
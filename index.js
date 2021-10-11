let firstCard = 11;
let secondCard = 10;

let sum = firstCard + secondCard;

if (sum <= 20) {
  console.log("Do you want to draw a new card?");
} else if (sum === 21) {
  console.log("Woohoo! You've got blackjack!");
} else {
  console.log("You're out of the game!");
}

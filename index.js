const messageEl = document.querySelector("#message-el");
const sumEl = document.querySelector("#sum-el");
const cardsEl = document.querySelector("#cards-el");
let firstCard = 15;
let secondCard = 1;
let totalCards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = `Cards: ${totalCards[0]} and ${totalCards[1]}`;
  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game.";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  let newCard = 5;
  sum += newCard;
  totalCards.push(newCard);
  console.log(totalCards);
  renderGame();
}

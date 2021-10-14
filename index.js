const messageEl = document.querySelector("#message-el");
const sumEl = document.querySelector("#sum-el");
const cardsEl = document.querySelector("#cards-el");
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let totalCards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

function getRandomCard() {
  return 5;
}

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (i = 0; i < totalCards.length; i++) {
    cardsEl.textContent += totalCards[i] + " ";
  }
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
  let newCard = getRandomCard();
  sum += newCard;
  totalCards.push(newCard);
  renderGame();
}

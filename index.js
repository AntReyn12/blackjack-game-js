const messageEl = document.querySelector("#message-el");
const sumEl = document.querySelector("#sum-el");
const cardsEl = document.querySelector("#cards-el");
const playerEl = document.querySelector("#player-el");
const dealerCardsEl = document.querySelector("#dealer-cards");
const dealerTotalEl = document.querySelector("#dealer-sum");
let playerCards = [];
let dealerCards = [];
let dealerSum = 0;
let playerSum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let player = {
  playerName: "Anthony",
  chips: 145,
};

playerEl.textContent = player.playerName + ": $" + player.chips;

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard > 10) {
    return 10;
  } else if (randomCard === 1) {
    return 11;
  } else {
    return randomCard;
  }
}

function startGame() {
  if (isAlive === false || hasBlackJack === true) {
    isAlive = true;
    hasBlackJack = false;
    let firstPlayerCard = getRandomCard();
    let secondPlayerCard = getRandomCard();
    let firstDealerCard = getRandomCard();
    let secondDealerCard = getRandomCard();
    dealerCards = [firstDealerCard, secondDealerCard];
    playerCards = [firstPlayerCard, secondPlayerCard];
    playerSum = firstPlayerCard + secondPlayerCard;
    dealerSum = firstDealerCard + secondDealerCard;
    renderGame();
  }
}

function renderGame() {
  dealerCardsEl.textContent = "Dealer hand: " + dealerCards[0] + " ?";
  cardsEl.textContent = "Player hand: ";
  for (i = 0; i < playerCards.length; i++) {
    cardsEl.textContent += playerCards[i] + " ";
  }
  sumEl.textContent = "Player total: " + playerSum;
  dealerTotalEl.textContent = "Dealer total: ?";

  if (playerSum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (playerSum === 21) {
    message = "You've got blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game.";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let newCard = getRandomCard();
    playerSum += newCard;
    playerCards.push(newCard);
    renderGame();
  }
}

function stay() {
  if (isAlive === true || hasBlackJack === false) {
    dealerCardsEl.textContent = "Dealer hand: ";
    for (i = 0; i < dealerCards.length; i++) {
      dealerCardsEl.textContent += dealerCards[i] + " ";
    }
    dealerTotalEl.textContent = "Dealer total: " + dealerSum;
    if (dealerSum < 17) {
      getDealerNewCard();
    } else if (playerSum > dealerSum) {
      message = "You beat the house! You win!";
      isAlive = false;
    } else if (dealerSum === playerSum) {
      message = "Tie goes to the house.";
      isAlive = false;
    } else {
      message = "The house wins!";
      isAlive = false;
    }
    messageEl.textContent = message;
  }
}

function getDealerNewCard() {
  let newDealerCard = getRandomCard();
  dealerSum += newDealerCard;
  dealerCards.push(newDealerCard);
  stay();
}

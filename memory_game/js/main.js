console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
cards.length;

var cardsInPlay = [ ];

var checkForMatch = function() {
if (cardsInPlay[0] === cardsInPlay[2]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

var flipCard = function(cardId) {
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[0]);

  if (cards.length === 2) {
    checkForMatch();
  }
}

flipCard(0);
flipCard(2);
checkForMatch();

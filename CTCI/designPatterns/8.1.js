// Design the data structures for a generic deck of cards. Explain how you would
// subclass the data structures to implement blackjack.

function Deck() {
  this.cards = [];
  this.cardsDrawn = 0;

  var suits = ["spades", "diamonds", "hearts", "clubs"];
  var names = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

  for (var suit in suits) {
    for (var name in names) {
      this.cards.push({
        suit: suits[suit],
        value: names[name]
      })
    };
  };
};


function Card(name, suit) {
  this.value = value;
  this.suit = suit;
};

function Player(name) {
  this.name = name;
  this.cards = [];
};

Player.prototype.discard = function(){

}

function Dealer() {
  this.cards = [];
}

Deck.prototype.shuffle = function(deck) {

};

Deck.prototype.deal = function(deck) {

};



var deck = new Deck();
console.log(deck);

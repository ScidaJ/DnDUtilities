const fs = require('fs');

function displayDeck() {
  let raw = fs.readFileSync('./reference-deck.json', 'utf8');
  const referenceDeck = JSON.parse(raw);
  let playerDeckImport = fs.readFileSync('./player-deck.txt', 'utf8');
  let playerDeck = playerDeckImport.split(',');
  console.log('Here are the cards left in your deck.\n');
  for(const card of playerDeck) {
    console.log(referenceDeck[card]);
  }
  console.log('\nYou have ' + (playerDeck.length + 1) + ' cards left.');
}

displayDeck();

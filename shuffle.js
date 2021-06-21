const fs = require('fs');

function shuffle() {
  let raw = fs.readFileSync('./reference-deck.json', 'utf8');
  const referenceDeck = JSON.parse(raw);
  let playerDeckImport = fs.readFileSync('./player-deck.txt', 'utf8');
  let playerDeck = playerDeckImport.split(',');
  let index = getRandom(playerDeck.length - 1);
  console.log('You drew ' + referenceDeck[playerDeck[index]]);
  playerDeck.splice(index, 1);
  playerDeck = playerDeck.toString();
  fs.writeFile('./player-deck.txt', playerDeck, (err) => {
    if(err)
      console.error(err);
  });

}

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

shuffle();

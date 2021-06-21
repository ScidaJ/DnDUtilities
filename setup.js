const fs = require('fs');
const prompt = require('prompt-sync')({sigint: true});

function setup() {
  let referenceDeck;
  let playerDeck = "";
  console.log('A new file storing your deck status is being created. Please consult the README for input format for this part.\n');
  let missingDeck = prompt("Please enter the cards missing from your deck: ");
  missingDeck = missingDeck.replace(/\s+/g, '');
  missingDeck = missingDeck.toLowerCase();
  let raw = fs.readFileSync('./reference-deck.json', 'utf8');
  referenceDeck = JSON.parse(raw);
  for (const card in referenceDeck) {
    if(!missingDeck.includes(card) && card !== 'j'){
      playerDeck = playerDeck + card + ",";
    } else if(card === 'j') {
      if(!missingDeck.includes('j1') && !missingDeck.includes('j2')) {
        playerDeck = playerDeck + card + "," + card + ",";
      } else if(missingDeck.includes('j1')) {
        playerDeck = playerDeck + card + ",";
      }
    }
  }
  playerDeck = playerDeck.slice(0, -1);
  fs.writeFile('./player-deck.txt', playerDeck, (err) => {
    if(err)
      console.error(err);
  });
}

setup();

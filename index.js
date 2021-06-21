const fs = require('fs');
const prompt = require('prompt-sync')({sigint: true});

function setUp() {
  console.log('A new file storing your deck status is being created. Please consult the README for input format for this part.\n');
  let missingDeck = prompt("Please enter the cards missing from your deck: ");
  console.log(missingDeck);
}
setUp();

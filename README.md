# DeckOfIllusionsTracker
Tracker for the Deck of Illusions in Dungeons and Dragons 5e
***
# Setup
To start the setup of the tracker, use `npm run setup`

### Input Format
The program will expect a certain format when taking input for initial missing cards. 
In all lowercase, use the first letter from the suit, followed immediately with either the number or first letter of the card.
In the case of a joker, a `j` followed by the number missing is the correct format.
If no number is given, it will be assumed that both jokers are missing.
Separate multiple cards with a comma. An example is provided below.  
`da,h2,ck,j1,c10`  
To program will interpret this as an Ace of Diamonds, a 2 of Hearts, a King of Clubs, a Joker, and a 10 of Clubs.  



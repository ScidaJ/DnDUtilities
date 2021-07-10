# DnDUtilities
Various small tools for  making DnD a little easier to play.
***
# Setup
If you are not a programmer, this is a small guide to get this working on your computer.  
Things required:
- Git  
- Node v15.7.0
  
You can follow [this link](https://git-scm.com/downloads) to download and install Git for your respective platform(Windows, Mac, Linux).  
You can follow [this link](https://github.com/nvm-sh/nvm#installing-and-updating) to install Node Version Manager. 
Once installed, follow [this link](https://github.com/nvm-sh/nvm#usage) to install Node versions using NVM.

Once all above are installed, open a command prompt or terminal, navigate to a directory that you would like to download it to, and clone this project into its own folder by typing `git clone https://github.com/jrs8979/DeckOfIllusionsTracker.git`   
This will create a folder inside the directory that you are working in. Go into that directory by typing `cd DeckOfIllusionsTracker` and hitting enter.  
Once in, type `npm install` to install the things needed for the project. Type `npm run setup` to create your deck.
### Deck Creation
You will be asked to enter the cards that are missing from your deck. Follow this format `da,j1,c10` where the first letter is the face of the card, followed by either the first letter or the number of the card.
For jokers, if missing just one, place a 1 after the j, and if missing both place a 2. If no number is given, it will be assumed that both jokers are missing.
## TODO
* Add Deck of Many Things tracker
* Put on GitHub pages
* Allow drag and drop of files and the download of generated files(i.e. playerdeck.json)

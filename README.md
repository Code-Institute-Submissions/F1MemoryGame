# F1 Memory Game

![Site Preview](assets/images/F1MemoryGame-preview.png)

---

## [Project Repository](https://github.com/filleben/F1MemoryGame)

## [Deployed Site](https://filleben.github.io/F1MemoryGame)

---

This project is designed for Formula One fans like myself with the goal of providing a simple yet challenging memory game with a user friendly design, the game will always lay out the cards differently aswell as providing a user score, giving the users a reason to comeback to the site and keep playing multiple games.

## Table of Contents

- <a href="#ux">UX</a>
- <a href="#features">Features</a>
- <a href="#technologies">Technologies Used</a>
- <a href="#testing">Testing</a>
- <a href="#deployment">Deployment</a>
- <a href="#credits">Credits</a>

<span id="ux"></span>

## UX

### User Goals

I expect that the majority of the users will fall into the following criteria:

- Be a Forumula One Fan.
- A user looking for a time waster.
- A user looking for a challenging memory game.

### User Stories

- As a user, I want the site to simple to use and visually appealing.
- As a user, I want the cards to be shuffled everytime I play it.
- As a user, I want to be able to see how well I am playing the game (Score).
- As a user, I want instructions on how to play the game.
- As a user, I want to have fun!.

### Wireframes

[Here](https://github.com/filleben/F1MemoryGame/tree/master/wireframes) are the designs I made for the site.

The wireframes were made using [Balsamiq](https://balsamiq.cloud)

### Design Choices

- **Font**: I wanted to use a single font throughout the site, it needed to look "racey" to fit in with the Formula 1 theme, with this in mind I decided to use [Racing Sans One](https://fonts.google.com/specimen/Racing+Sans+One) from [Google Fonts](https://fonts.google.com/).

- **Colours**: I decided to use a Formula 1 photo as my background, because of this I kept a consistent font color of white (Hex: '#ffffff' RGB: 'rgb(255, 255, 255)') as it stands out the best from the background. The cards needed to be highlighted when you are hovering over them so I chose a to use a liner gradient of these two colours: Hex: '#b2a9e5', RGB: 'rgb(178,169,229)' and Hex: '#2b94e5', RGB: '(43,148,229)'. Lastly I chose a simple green colour (Hex: '#16A353' RGB:'rgb(22,163,83)') to highlight when two cards were matched.

<span id="features"></span>

## Features

- **Game Instructions**: Tells users how to play the game.
- **Contact Form**: Allows users to contact me directly to report any bugs with the game.
- **Success/Failed Messages**: Tells users if they successfully contacted me or not.
- **Music**: 8-bit Formula 1 theme plays when you begin the game.
- **Game Timer**: When the game starts a timer beginds counting down from 100, when it hits zero the game is over.
- **Move Counter**: Counts how many moves a user makes while playing a round.
- **Scoring System**: Users get points for each match they find, the quicker they find a match the more points they will recieve.
- **Game Over Screen**: When the timer hits zero the game over screen will appear allowing the users to try again.
- **Victory Screen**: When the user has found all 10 matches before the time runs out the Victory screen will appear showing their score and allowing them to play again.
- **Screen Size Message**: If the user is using a device with a small screen a message will appear letting them know the game will be better in landscape orientation.
- **Defense Function**: The game will not allow cards to be flipped if there is a card animation taking place.
- **Defense Function**: The game will not allow a card to be flipped if it is part of a matched pair.
- **Defense Function**: The game will allow the same card to be flipped back to hidden untill a second card has been selected to check for a match.

## Features Left to Implement

- Gobal leaderboard based on game scores.
- Gobal leaderboard based on how fast users beat the game.
- Different gamemode such as classic F1 cars and F1 tracks.

<span id="technologies"></span>

## Technologies Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
  - The project uses **HTML5** to provide the content and structure.

- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
  - The project uses **CSS3** for styling.

- [Google Fonts](https://fonts.google.com/)
  - The project uses **Google Fonts** to provide the font used on the site.

- [jQuery](https://jquery.com)
  - The project uses **jQuery** for game functions.

- [JavaScript](https://www.javascript.com/)
  - The project uses **JavaScript** for game functions.

- [EmailJS](https://www.emailjs.com/)
  - The project uses **EmailJS** to send emails based on provided contact information.

- [VSCode](https://code.visualstudio.com/)
  - The project devloped in  **Visual Studio Code**.

- [Git](https://git-scm.com/)
  - The project uses **Git** for version control.

- [GitHub](https://github.com/)
  - The project uses **GitHub** to host the repository and for the live preview of the site.

<span id="deployment"></span>

## Deployment

To deploy this page to GitHub Pages from its [GitHub repository](https://github.com/filleben/TenburyWellsRFC), the following steps were taken: 

1. From the menu items near the top of the page, select **Settings**.
2. Scroll down to the **GitHub Pages** section.
3. Under **Source** click the drop-down menu labelled **None** and select **Master Branch**
4. On selecting Master Branch the page is automatically refreshed, the website is now deployed. 
5. Scroll back down to the **GitHub Pages** section to retrieve the link to the deployed website.

 
To clone this project from GitHub:

1. Under the repository name, click "Clone or download".
2. In the Clone with HTTPs section, copy the clone URL for the repository. 
3. Open your IDE of choice.
4. Change the current working directory to the location where you want the cloned directory to be made.
5. Type `` `git clone` ``, and then paste the URL you copied in Step 3.

``` console git clone https://github.com/filleben/```

6. Press Enter. Your local clone will be created.

Further reading and troubleshooting on cloning a repository from GitHub can be found [here](https://help.github.com/en/articles/cloning-a-repository).

<span id="credits"></span>

## Credits

### Content

- I achieved base game functionality by following [this tutorial](https://www.youtube.com/watch?v=3uuQ3g92oPQ) by [PortEXE](https://www.portexe.com/)
- I got my scoring working by using code from [Stack Overflow](https://stackoverflow.com/questions/6507216/javascript-addition-add-10-to-an-interger)
- The game uses the [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) to shuffle the cards.

### Media

- The Formula 1 Logo was taken from the [Formula 1 Official Site](https://www.formula1.com/).
- The background image used was taken from the [Formula 1 Official Site](https://www.formula1.com/).
- The Formula 1 car images are taken from the [Formula 1 Official Site](https://www.formula1.com/).
- The background music was made by [victoresto99](https://www.youtube.com/watch?v=ptRV4Ut2dNk).

### Acknowledgements

- I received inspiration for this project from [WebDevSimplified](https://github.com/WebDevSimplified) and their [Mix-Or-Match project](https://github.com/WebDevSimplified/Mix-Or-Match).
- **Gerard McBride** for helping me through the project with his advice and guidance.   
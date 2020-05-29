$(document).ready(function () {
    let overlay = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new MemoryGame(1000, cards);
    
    overlay.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });

    $("#your-scores").click(function(){
        $("#saved-scores").slideToggle("slow");
    });
    $("#how-to-play").click(function(){
        $("#instructions").slideToggle("slow");
    });
});

class MemoryGame {
    constructor(totalTime, cards) {
        this.cardArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.time = $("span").get('#time-remaining'); 
        this.totalScore = $("span").get('#score');
        this.moveTicker = $("span").get('#moves'); 
    }

    startGame() {
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
    }

    canFlipCard(card) {
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }

    flipCard(card) {
        if(this.canFlipCard(card)) {
            this.totalClicks++;
            this.moveTicker.innerText = this.totalClicks;
        }
    }
}
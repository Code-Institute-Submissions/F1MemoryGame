$(document).ready(function () {
    let overlay = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new MemoryGame(100, cards);

    overlay.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });

    $("#your-scores").click(function () {
        $("#saved-scores").slideToggle("slow");
    });
    $("#how-to-play").click(function () {
        $("#instructions").slideToggle("slow");
    });
});

class MemoryGame {
    constructor(totalTime, cards) {
        this.cardArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.time = document.getElementById('time-remaining');
        this.totalScore = document.getElementById('score');
        this.moveTicker = document.getElementById('moves');
    }

    startGame() {
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
        setTimeout(() => {
            this.shuffleCards(this.cardArray);
            this.busy = false;
            this.countDown = this.startCountDown();
        }, 500);
    }

    canFlipCard(card) {
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }

    flipCard(card) {
        if (this.canFlipCard(card)) {
            this.totalClicks++;
            this.moveTicker.innerText = this.totalClicks;
            card.classList.add('visible');
            if (this.cardToCheck) {
                this.checkForCardMatch(card);
            } else {
                this.cardToCheck = card;
            };
        }
    }

    shuffleCards(cardArray) {
        for (let i = cardArray.length - 1; i > 0; i--) {
            let randIndex = Math.floor(Math.random() * (i + 1));
            cardArray[randIndex].style.order = i;
            cardArray[i].style.order = randIndex;
        }
    }

    hideCards() {
        this.cardArray.forEach(card => {
            card.classList.remove('visible');
        });
    }

    startCountDown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.time.innerText = this.timeRemaining;
            if (this.timeRemaining === 0)
                this.gameOver();
        }, 1000);
    }

    gameOver() {
        clearInterval(this.countDown);
        document.getElementById('game-over').classList.add('visible')
    }

    victory() {
        clearInterval(this.countDown);
        document.getElementById('victory').classList.add('visible')
    }

    getCardType(card) {
        return card.getElementsByClassName('f1-car')[0].src;
    }

    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        if (this.matchedCards.length === this.cardArray.length)
            this.victory();
    }

    cardMisMatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000);
    }

    checkForCardMatch(card) {
        if (this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else
            this.cardMisMatch(card, this.cardToCheck);

        this.cardToCheck = null;
    }
}
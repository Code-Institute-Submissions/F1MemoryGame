//While coding this I followed a tutorial to achieve basic game functionality, then built my own features on top of that code, see credits in ReadME

$(document).ready(function () {
    //Displays high score, displays 0 if high score isnt set
    var highScore = localStorage.getItem("highScore");
    if (highScore == null) {
        document.getElementById('high-score').innerText = "0";
    } else {
        document.getElementById('high-score').innerText = localStorage.getItem("highScore");
    }
    //Create Array from all elements with the 'card' class
    let cards = Array.from(document.getElementsByClassName('card'));
    //Calls the MemoryGame class and card array, sets the game timer
    let game = new MemoryGame(100, cards);
    //Starts the game when 'Click to Start' is clicked on landing overlay
    $('#start').click(function () {
        $(this).parent().removeClass('visible');
        game.startGame();
    });
    //Toggle game difficulty
    $('#game-hard').click(function () {
        $(this).addClass("game-mode");
        $('#game-easy').removeClass("game-mode");
        $('.manufacturer').css("display", "none");
    });
    $('#game-easy').click(function () {
        $(this).addClass("game-mode");
        $('#game-hard').removeClass("game-mode");
        $('.manufacturer').css("display", "flex");
    });
    //Flips the cards on click
    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });
    //Opens game instructions
    $("#how-to-play").click(function () {
        $("#instructions").slideToggle("slow");
        $("#contact-form").slideUp("slow");
    });
    //Opens contact form
    $("#contact").click(function () {
        $("#contact-form").slideToggle("slow");
        $("#instructions").slideUp("slow");
    });
    //Restarts the game by reloading the page when 'Restart' is clicked on game over and victory overlay
    $('#game-over-restart, #victory-restart').click(function () {
        location.reload();
    });

});

class MemoryGame {
    //Game Constructor
    constructor(totalTime, cards, score) {
        var score = 0;
        this.score = score;
        this.cardArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.time = document.getElementById('time-remaining');
        this.moveTicker = document.getElementById('moves');
    }
    //Start Game Function wont let any cards be flipped for 0.5 secs
    startGame() {
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
        this.playBackgroundMusic();
        setTimeout(() => {
            this.shuffleCards(this.cardArray);
            this.busy = false;
            this.countDown = this.startCountDown();
        }, 500);
    }
    //Stops cards being fliped if there is a animation happening, if the card is part of a matched pair already, 
    //and stops the same card being clicked once its been flipped
    canFlipCard(card) {
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
    //Flip card function adds 1 to total moves
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
    //Card shuffling algorithm based on Fisher-Yates shuffle
    shuffleCards(cardArray) {
        for (let i = cardArray.length - 1; i > 0; i--) {
            let randIndex = Math.floor(Math.random() * (i + 1));
            cardArray[randIndex].style.order = i;
            cardArray[i].style.order = randIndex;
        }
    }
    //Timer function, removes 1 every second
    startCountDown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.time.innerText = this.timeRemaining;
            if (this.timeRemaining === 0)
                this.gameOver();
        }, 1000);
    }
    //Game Over Function called when you lose
    gameOver() {
        clearInterval(this.countDown);
        $('#game-over').addClass('visible')
    }
    //Victory Function called when you beat the game
    victory() {
        clearInterval(this.countDown);
        $('#victory').addClass('visible');
        if (this.score > localStorage.getItem("highScore")) {
            this.setHighScore();
        }

        document.getElementById('high-score').innerText = localStorage.highScore;
    }
    //Returns the value of the card i.e. what car you clicked
    getCardType(card) {
        return card.getElementsByClassName('f1-car')[0].src;
    }
    //Checks for two matching cards
    checkForCardMatch(card) {
        if (this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else
            this.cardMisMatch(card, this.cardToCheck);

        this.cardToCheck = null;
    }
    //Card Match function pushes matched cards into matchedArray, checks for victory
    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');
        this.calculateScore();
        if (this.matchedCards.length === this.cardArray.length)
            this.victory();
    }
    //Cards Mis Match Function, hides both cards
    cardMisMatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000);
    }
    //Plays background music, repeats on song end
    playBackgroundMusic() {
        var bgMusic = new Audio('assets/audio/F1_theme-8-bit_version.mp3')
        bgMusic.play();
        bgMusic.volume = 0.5;
        bgMusic.loop = true;
        //Mutes background music on click
        $('#on').click(function () {
            $(bgMusic).each(function () {
                $(bgMusic).prop('muted', false);
            });
            $('#off').removeClass("audio-status")
            $(this).addClass("audio-status")
        });
        $('#off').click(function () {
            $(bgMusic).each(function () {
                $(bgMusic).prop('muted', true);
            });
            $('#on').removeClass("audio-status")
            $(this).addClass("audio-status")
        });
    }
    //Calculates score, score for each match is dependent on how quickly the match happens, the quicker the match the higher the score
    //Some code was sourced from Stack Overflow see ReadME
    calculateScore() {
        if (this.timeRemaining >= '90') {
            $("#live-score, #victory-score").each(function () {
                $(this).text(parseInt($(this).text(), 10) + 100);
            });
            this.score += 100;
        } else if (this.timeRemaining >= '80') {
            $("#live-score, #victory-score").each(function () {
                $(this).text(parseInt($(this).text(), 10) + 90);
            });
            this.score += 90;
        } else if (this.timeRemaining >= '70') {
            $("#live-score, #victory-score").each(function () {
                $(this).text(parseInt($(this).text(), 10) + 80);
            });
            this.score += 80;
        } else if (this.timeRemaining >= '60') {
            $("#live-score, #victory-score").each(function () {
                $(this).text(parseInt($(this).text(), 10) + 70);
            });
            this.score += 70;
        } else if (this.timeRemaining >= '50') {
            $("#live-score, #victory-score").each(function () {
                $(this).text(parseInt($(this).text(), 10) + 60);
            });
            this.score += 60;
        } else if (this.timeRemaining >= '0') {
            $("#live-score, #victory-score").each(function () {
                $(this).text(parseInt($(this).text(), 10) + 50);
            });
            this.score += 50;
        }
    }
    //Sets the high score
    setHighScore() {
        localStorage.setItem("highScore", this.score);
    }
}
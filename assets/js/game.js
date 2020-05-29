$(document).ready(function () {
    $('#start').click(function () {
        $(this).parent().removeClass('visible');
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
}
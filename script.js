'use strict';


let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener('click', function () {
    const guess = Number(document.querySelector(".guess").value);

    //when there is no input
    if (!guess) {
        document.querySelector(".message").innerHTML = "🚨 No Number!";
    }
    //when user wins
    else if (guess === secretNumber) {
        document.querySelector(".message").innerHTML = "🎉 Correct Number!";
        document.querySelector(".number").innerHTML = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").innerHTML = highScore;
        }
    }

    else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector(".message").innerHTML = guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
            score--;
            document.querySelector(".score").innerHTML = score;
        } else {
            document.querySelector(".message").innerHTML = "🤕 You lost!";
            document.querySelector(".score").innerHTML = 0;
        }
    }
});


document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    document.querySelector(".score").innerHTML = score;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector(".guess").value = '';
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").innerHTML = "?"
    document.querySelector(".message").innerHTML = "Start guessing...";
    document.querySelector("body").style.backgroundColor = "#222";


})
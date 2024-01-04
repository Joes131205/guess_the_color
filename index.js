const colors = document.querySelectorAll(".colors");

const currColorEl = document.getElementById("currColor");
const guessesEl = document.getElementById("guesses");
const correctGuessEl = document.getElementById("correctGuess");
const leastGuessEl = document.getElementById("leastGuess");

const playAgainButton = document.getElementById("playAgain");
playAgainButton.addEventListener("click", startGame);

let randomGuess = "";
let guesses = 0;
let correctGuesses = 0;
let leastGuess = Infinity;

let playing = true;

function randomColor() {
    let hex = "#";
    let char = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
    ];
    for (let i = 1; i <= 6; i++) {
        hex += char[Math.floor(Math.random() * char.length)];
    }
    return hex;
}

function startGame() {
    playing = true;

    hideColors();

    colors.forEach((item) => {
        const hex = randomColor();
        item.style.backgroundColor = hex;
        item.color = hex;
    });

    guesses = 0;
    guessesEl.textContent = guesses;

    randomGuess =
        colors[Math.floor(Math.random() * colors.length)].style.backgroundColor;
    currColorEl.textContent = randomGuess;
}

colors.forEach((item) =>
    item.addEventListener("click", function () {
        if (playing) {
            guesses++;
            guessesEl.textContent = guesses;
            const currGuess = this.style.backgroundColor;
            if (currGuess === randomGuess) {
                alert("correct");
                correctGuesses++;
                correctGuessEl.textContent = correctGuesses;
                playing = false;
                if (guesses < leastGuess) {
                    leastGuess = guesses;
                    leastGuessEl.textContent = leastGuess;
                }
                renderColors();
            }
        }
    })
);

function hideColors() {
    colors.forEach((item) => {
        item.textContent = "";
    });
}

function renderColors() {
    colors.forEach((item) => {
        item.textContent = item.style.backgroundColor;
    });
}

startGame();

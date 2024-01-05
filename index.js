"use strict";

const colors = document.querySelectorAll(".colors");

const currColorEl = document.getElementById("currColor");
const guessesEl = document.getElementById("guesses");
const correctGuessEl = document.getElementById("correctGuess");
const mostGuessEl = document.getElementById("mostGuess");
const encouragingMessageEl = document.getElementById("encouraging-message");

const playAgainButton = document.getElementById("playAgain");
playAgainButton.addEventListener("click", startGame);

let randomGuess = "";
let guessesLeft = 5;
let correctGuesses = 0;
let mostGuess = -Infinity;

let playing = true;

const winningMessages = [
    "Outstanding! Your color instincts are unmatched.",
    "What a triumph! You've cracked the color code.",
    "Hats off to your exceptional color recognition skills!",
    "A spectacular win! You've got an eye for the perfect hue.",
    "You're a color genius! The palette bows to your brilliance.",
    "Unbelievable! Your color choices were spot on.",
    "You're not just lucky; you're a color-savvy mastermind!",
    "Marvelous! You've painted the canvas of victory with vibrant hues.",
    "Simply amazing! Your color intuition is second to none.",
    "A dazzling win! Your color sense shines bright like a rainbow.",
    "Brilliant! Your ability to discern colors is truly impressive.",
    "You're the reigning champion of the color guessing realm!",
    "Incredible! Your color knowledge is a force to be reckoned with.",
    "You've cracked the color code with finesse and flair!",
    "A true artist of hues! Your victory is a masterpiece.",
    "Exceptional! Your color choices were a stroke of pure genius.",
    "Astounding! Your color radar is finely tuned for success.",
    "You're not just good; you're a color maestro!",
    "Sensational! Your color guessing game is top-notch.",
    "Remarkable! Your win is a testament to your color brilliance.",
];

const lossMessages = [
    "Chin up! Your color guessing adventure is just beginning.",
    "The rainbow wasn't built in a day. Keep exploring those hues!",
    "Your color intuition is evolving. Keep experimenting and learning!",
    "It's okay to miss a color – it's part of the colorful journey!",
    "Learning colors is like solving a puzzle. You're making progress!",
    "A small setback today means a brighter victory tomorrow. Keep going!",
    "Colors are tricky, but so are you! Your persistence is admirable.",
    "Every misstep is a brushstroke on the canvas of your color expertise.",
    "No worries! The more colors you explore, the closer you get to mastery.",
    "The color wheel has many facets. Embrace the challenge and grow!",
    "Even artists had their off days. Your next guess could be a masterpiece!",
    "Colors are like friends – you'll get to know them better with time.",
    "Your journey to becoming a color guru is filled with exciting twists!",
    "Missing a color means you're on the verge of a colorful breakthrough.",
    "The spectrum of colors applauds your effort. Keep discovering!",
    "Don't let a missed guess dim your enthusiasm. Shine on, color explorer!",
    "Color guessing is an art, and you're in the process of creating a masterpiece.",
    "Remember, every shade has its own story. Keep guessing and unfolding tales!",
    "Your persistence in the face of color challenges is truly commendable.",
    "Keep your spirits vibrant! The palette of success has many shades for you.",
];

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
        item.classList.remove("correct");
    });

    guessesLeft = 5;
    guessesEl.textContent = guessesLeft;

    randomGuess =
        colors[Math.floor(Math.random() * colors.length)].style.backgroundColor;
    currColorEl.textContent = randomGuess;

    encouragingMessageEl.textContent = "-";
}

colors.forEach((item) =>
    item.addEventListener("click", function () {
        if (playing) {
            guessesLeft--;
            guessesEl.textContent = guessesLeft;
            const currGuess = this.style.backgroundColor;
            if (currGuess === randomGuess) {
                correctGuesses++;
                correctGuessEl.textContent = correctGuesses;
                encouragingMessageEl.textContent =
                    winningMessages[
                        Math.floor(Math.random() * winningMessages.length)
                    ];
                playing = false;
                if (guessesLeft > mostGuess) {
                    mostGuess = guessesLeft;
                    mostGuessEl.textContent = mostGuess;
                }
                renderColors();
            } else {
                item.classList.add("wrong");
                setTimeout(() => {
                    item.classList.remove("wrong");
                }, 1000);
                if (guessesLeft < 1) {
                    guessesLeft = 0;
                    guessesEl.textContent = "Yikes!";
                    playing = false;
                    renderColors();
                    encouragingMessageEl.textContent =
                        lossMessages[
                            Math.floor(Math.random() * lossMessages.length)
                        ];
                }
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
        const paragraphEl = document.createElement("p");
        paragraphEl.innerText = item.style.backgroundColor;
        paragraphEl.classList.add("answer");
        item.appendChild(paragraphEl);

        if (item.style.backgroundColor === randomGuess) {
            item.classList.add("correct");
        }
    });
}

startGame();

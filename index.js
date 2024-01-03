const colors = document.querySelectorAll(".colors");
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
    console.log(hex);
    return hex;
}
randomColor();

colors.forEach((item) =>
    item.addEventListener("click", function () {
        console.log(this.style.backgroundColor);
    })
);

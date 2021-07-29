const input = document.getElementById("in");
const output = document.getElementById("out");
document.getElementById("roll").addEventListener("click", roll );

function roll() {
    output.innerHTML = getRandomInt(input.value)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

document.getElementById("goHome").addEventListener("click", homePage );

function homePage() {
    window.location.href = "http://connor.thel4.com";
}
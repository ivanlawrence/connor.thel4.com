//Cards:
const deck = [];
const shuffledDeck = [];
const playersHand = [];
const computersHand = [];
const suits = [
    {
        suit: "clubs",
        color: "black",
    },
    {
        suit: "spades",
        color: "black",
    },
    {
        suit: "dimonds",
        color: "red",
    },
    {
        suit: "hearts",
        color: "red",
    }
];

//This makes a deck of complete cards
suits.forEach(function (suit) {
    for (let ii = 1; ii <= 13; ii++) {
        let card = Object.assign({}, suit);
        card.value = ii;
        deck.push(card);
    };
});

//This removes a card from deck and adds it to a shuffled deck
while (shuffledDeck.length < 52) {
    const rndInt = getRandomInt(deck.length);
    let card = Object.assign({}, deck[rndInt]);
    deck.splice(rndInt, 1);
    shuffledDeck.push(card);
};

//This hands out the player's hand
while (playersHand.length < 2) {
    let card = Object.assign({}, shuffledDeck[0]);
    shuffledDeck.splice(0, 1);
    playersHand.push(card);
};

//This hands out the computer's hand
while (computersHand.length < 2) {
    let card = Object.assign({}, shuffledDeck[0]);
    shuffledDeck.splice(0, 1);
    computersHand.push(card);
};

//This displays the player's cards
cardValue1.innerHTML = playersHand[0].value;
cardValue2.innerHTML = playersHand[1].value; 
cardSuit1.innerHTML = playersHand[0].suit;
cardSuit2.innerHTML = playersHand[1].suit; 

//This generates a random number
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//This colors the cards
const cardSpan1 = document.getElementById("cardValue1");
const cardSpan2 = document.getElementById("cardValue2");
const cardSuit11 = document.getElementById("cardSuit1");
const cardSuit12 = document.getElementById("cardSuit2");
const ofSpan1 = document.getElementById("of1");
const ofSpan2 = document.getElementById("of2");

if (playersHand[0].color === "red") {
    cardSpan1.style.color="#FF0000";
    cardSuit11.style.color="#FF0000";
    ofSpan1.style.color="#FF0000";
}

if (playersHand[1].color === "red") {
    cardSpan2.style.color="#FF0000";
    cardSuit12.style.color="#FF0000";
    ofSpan2.style.color="#FF0000";
}


document.getElementById("goHome").addEventListener("click", homePage );

function homePage() {
window.location.href = "http://connor.thel4.com";
}
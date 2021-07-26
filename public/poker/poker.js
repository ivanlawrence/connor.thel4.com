//These are the variables
let totalBet = 0;
const totalBetSpan = document.getElementById("totalBet");
totalBetSpan.innerHTML = totalBet;

//These are the functions
const functions = {

    "betBtn": document.getElementById("bet"),
    "callBtn": document.getElementById("call"),
    "raiseBtn": document.getElementById("raise"),
    "checkBtn": document.getElementById("check"),
    "foldBtn": document.getElementById("fold"),

    setup() {

        this.betBtn.addEventListener("click", this.bet );
        this.callBtn.addEventListener("click", this.call );
        this.raiseBtn.addEventListener("click", this.raise );
        this.checkBtn.addEventListener("click", this.check );
        this.foldBtn.addEventListener("click", this.fold );

        const card1 = document.getElementById("card1");
        const card2 = document.getElementById("card2");
        const winningHands = [];
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
    },

    bet() {
        const raise = prompt("How much do you bet? (Do not write $)")
        let totalBet = totalBet + Number(raise)
        alert(totalBet)
        totalBetSpan.innerHTML = totalBet
    },

    call() {
        
    },

    raise() {
        const raise = prompt("How much do you raise? (Do not write $)")
        let totalBet = totalBet + Number(raise)
        alert(totalBet)
        totalBetSpan.innerHTML = totalBet
    },

    check() {
        
    },

    fold() {
        
    },
}

alert("")
functions.setup()
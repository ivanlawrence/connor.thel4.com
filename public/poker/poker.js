//Variables
let totalBet = 0;
const totalBetSpan = document.getElementById("totalBet");
totalBetSpan.innerHTML = "Unknown";
//let players = parseInt(prompt("How many computer players should play?"))

//Functions
const functions = {

    "betBtn": document.getElementById("bet"),
    "callBtn": document.getElementById("call"),
    "raiseBtn": document.getElementById("raise"),
    "checkBtn": document.getElementById("check"),
    "foldBtn": document.getElementById("fold"),
    "totalBetSpan": document.getElementById("totalBet"),

    setup() {

        this.betBtn.addEventListener("click", this.bet );
        this.callBtn.addEventListener("click", this.call );
        this.raiseBtn.addEventListener("click", this.raise );
        this.checkBtn.addEventListener("click", this.check );
        this.foldBtn.addEventListener("click", this.fold );

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

        //This makes the buttons show or hide
        function show(el) {
            if (!el) return
            el.style.display = ""
        }

        function hide(el) {
            if (!el) return
            el.style.display = "none"
        }

        if (this.probability(.1)) {
            hide(this.raiseBtn)
            hide(this.callBtn)
        } else {
            hide(this.checkBtn)
            hide(this.betBtn)
        }        
        
    },

    bet() {
        let betRequest = prompt("What do you bet? (Do not write the $)")
        let bet = parseInt(betRequest)
        totalBet = totalBet + bet
        totalBetSpan.innerHTML = "$" + totalBet
    },
    
    call() {
        totalBet = totalBet //+ betOnTable
        totalBetSpan.innerHTML = totalBet
    },

    raise() {
        let betRequest = prompt("What do you raise by? (Do not write the $)")
        let bet = parseInt(betRequest)
        totalBet = totalBet + bet
        betOnTable = totalBet
        totalBetSpan.innerHTML = "$" + totalBet
    },

    check() {
       totalBetSpan.innerHTML = 0; 
    },

    fold() {
        if (confirm("Are you sure you want to fold? (It will reset everything)")){
            alert("Thanks for playing!")
            location.reload();
        }
    },

    rndInt(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    },

    probability(n) {
        return !!n && Math.random() <= n;
    },
}
functions.setup()

//Variables (that need to be under the object)
let betOnTable = functions.rndInt()

document.getElementById("goHome").addEventListener("click", homePage );

function homePage() {
    window.location.href = "http://connor.thel4.com";
}
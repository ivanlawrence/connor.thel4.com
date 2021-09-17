const randomNumber = getRandomInt(100);
const guessesTotal = 10;
const guessesLeft = document.getElementById('guessesLeft');
const guessCount = document.getElementById('guessCount');

const msgWin = document.getElementById('win');
const msgHigh = document.getElementById('high');
const msgLow = document.getElementById('low');
const msgLose = document.getElementById('lose');
const msgLose2 = document.getElementById('lose2');

const inputs = document.querySelector('#inputs');
const button = document.querySelector('#inputs > button');
let guessesUsed = 0
let guessesLeft1 = 10

guessesLeft.innerHTML = 10; 
guessCount.innerHTML = 0
button.addEventListener('click', go);
button.addEventListener('click', checkForWin);



function roughScale(x, base) {
 
	const parsed = Number.parseInt(x, base);
  if (Number.isNaN(parsed)) {
    return 0;
  }
  return parsed * 100;
}



function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}



function go() {
	makeItHide(msgWin)
	makeItHide(msgHigh)
	makeItHide(msgLow)
	makeItHide(msgLose)
	makeItHide(msgLose2)

 	if (guessesLeft1 != 1) {
        guessesUsed++;
		guessesLeft1--
		guessesLeft.innerHTML = (guessesLeft1);
		guessCount.innerHTML = (guessesUsed);
    } else {
        makeItShow(msgLose)
        makeItShow(msgLose2)
    }
}

function makeItShow(el) {
if (!el) return
el.style.display = ""
}

function makeItHide(el) {
if (!el) return
el.style.display = "none"
}


function checkForWin() {

  if (parseInt(guess.value) === randomNumber) {
    makeItShow(msgWin)
		makeItShow(msgLose2)
  }

  if (parseInt(guess.value) > randomNumber) {
    makeItShow(msgHigh)
  }

  if (parseInt(guess.value) < randomNumber) {
    makeItShow(msgLow)
  }
}

document.getElementById("goHome").addEventListener("click", homePage );

function homePage() {
    window.location.href = "http://connor.thel4.com";
}
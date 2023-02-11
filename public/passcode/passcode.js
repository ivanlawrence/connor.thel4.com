document.getElementById("makeNewUser").addEventListener("click", makeNewUser );
document.getElementById("checkSignIn").addEventListener("click", checkSignIn );
const users = {
    "a":"b",
};

function makeNewUser() {
    const newUsernameInput = prompt("Enter New Username:");
    const newPasscodeInput = prompt("Enter New Passcode:");
    users[newUsernameInput] = newPasscodeInput;
};

function checkSignIn() {
    const usernameInput = prompt("Enter Username:");
    const passcodeInput = prompt("Enter Passcode:");
    if (users[usernameInput] === passcodeInput) {
        alert("Passcode Correct");
    } else {
        alert("Passcode and/or Username Incorect");    
    };
}

document.getElementById("goHome").addEventListener("click", homePage );

function homePage() {
    window.location.href = "http://connor.thel4.com";
}
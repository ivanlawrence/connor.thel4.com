const newUser = prompt("Do you want to make a new user? (y/n):");
const users = {
    "a":"b",
};

if (newUser === "y") {
     makeNewUser() 
}

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
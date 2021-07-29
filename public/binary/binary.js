const convert = document.getElementById("convert");
convert.addEventListener("click", convertText );

function convertText() {
    var output = document.getElementById("output");
    var input = document.getElementById("input").value;
    output.value = "";
    for (var i = 0; i < input.length; i++) {
        output.value += input[i].charCodeAt(0).toString(2) + " ";
    }
}

document.getElementById("goHome").addEventListener("click", homePage );

function homePage() {
    window.location.href = "http://connor.thel4.com";
}
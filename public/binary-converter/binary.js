function convert() {
    var output = document.getElementById("output");
    var input = document.getElementById("input").value;
    output.value = "";
    for (var i = 0; i < input.length; i++) {
        output.value += input[i].charCodeAt(0).toString(2) + "";
    }
}
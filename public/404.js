const urlRequest = document.getElementById("input");
const goBtn = document.getElementById("go");
document.getElementById("goHome").addEventListener("click", homePage );

go.addEventListener('click', function() {
    window.location.href = urlRequest.value;
});

document.getElementById("goHome").addEventListener("click", homePage );
function homePage() {
    window.location.href = "http://connor.thel4.com";
}
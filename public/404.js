const urlRequest = document.getElementById("input");
const link = document.getElementById("link");
document.getElementById("goHome").addEventListener("click", homePage );

urlRequest.addEventListener('input', function() {
    link.href = urlRequest.value;
    link.innerHTML = urlRequest.value + "*";
});

document.getElementById("goHome").addEventListener("click", homePage );
function homePage() {
    window.location.href = "http://connor.thel4.com";
}
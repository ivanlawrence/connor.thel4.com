const urlRequest = document.getElementById("input");
const link = document.getElementById("link");

urlRequest.addEventListener('input', function(){
    link.href = urlRequest.value;
    link.innerText = urlRequest.value + "*";
});

function homePage() {
    window.location.href = "http://connor.thel4.com";
}
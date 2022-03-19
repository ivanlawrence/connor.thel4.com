document.getElementById("go").addEventListener("click", doMath );
const opvar = document.getElementById("oporator");
opvar.addEventListener("onchange", getOporatorName );

function doMath() {
  const int1st = document.getElementById("int1st").value;
  const oporator = document.getElementById("oporators").value;
  const int2nd = document.getElementById("int2nd").value;

  let answer = "";
  
  if (oporator === "+") answer = int1st + int2nd;
  else if (oporator === "-") answer = int1st - int2nd;
  else if (oporator === "*") answer = int1st * int2nd;
  else if (oporator === "/") answer = int1st / int2nd;
  else "poop";

  document.getElementById("answer").value = answer;
}

function getOporatorName() {
  const oporator = opvar.value
  let opName = "";
  if (oporator === "+") opName = "Sum";
  if (oporator === "-") opName = "Diffrence";
  if (oporator === "*") opName = "Prouduct";
  if (oporator === "/") opName = "Quotient";
  document.getElementById("answer").value = opName;
}

document.getElementById("goHome").addEventListener("click", homePage );

function homePage() {
    window.location.href = "http://connor.thel4.com";
}
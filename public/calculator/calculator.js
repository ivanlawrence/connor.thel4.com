document.getElementById("doMath").addEventListener("click", doMath );

function doMath() {
  const int1st = document.getElementById('int1st').value;
  const oporator = document.getElementById('oporators').value;
  const int2nd = document.getElementById('int2nd').value;

  let answer = '';
  if (oporator === "+") answer = getSum(int1st, int2nd);
  if (oporator === "-") answer = getDiffrence(int1st, int2nd);
  if (oporator === "*") answer = getProduct(int1st, int2nd);
  if (oporator === "/") answer = getQuotient(int1st, int2nd);
  if (answer !== "") alert("Done");
  if (answer === "") alert("Enter Numbers into the input boxes")
  if (answer === "NaN") alert("Enter Numbers into the input boxes")

  document.getElementById('answer').value = answer;
}

function getSum(a, b) {
  const intA = Number.parseInt(a);
  const intB = Number.parseInt(b);
  return intA + intB;
}

function getDiffrence(a, b) {
  return a - b;
}

function getProduct(a, b) {
  return a * b;
}

function getQuotient(a, b) {
  return a / b;

}

function getOporatorName(el) {
  const oporator = el.value
  let opName = '';
  if (oporator === "+") opName = 'Sum';
  if (oporator === "-") opName = 'Diffrence';
  if (oporator === "*") opName = 'Prouduct';
  if (oporator === "/") opName = 'Quotient';
  document.getElementById('answer').value = opName;
}

document.getElementById("goHome").addEventListener("click", homePage );

function homePage() {
    window.location.href = "http://connor.thel4.com";
}
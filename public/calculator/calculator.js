document.getElementById("go").addEventListener("click", doMath );
const opvar = document.getElementById("operator");
opvar.addEventListener("onchange", getOperatorName );

function doMath() {
  const int1st = document.getElementById("int1st").value;
  const operator = document.getElementById("operators").value;
  const int2nd = document.getElementById("int2nd").value;

  let answer = "";
  
  if (operator === "+") answer = int1st + int2nd;
  else if (operator === "-") answer = int1st - int2nd;
  else if (operator === "*") answer = int1st * int2nd;
  else if (operator === "/") answer = int1st / int2nd;
  else "poop";

  document.getElementById("answer").value = answer;
}

function getOperatorName() {
  const operator = opvar.value
  let opName = "";
  if (operator === "+") opName = "Sum";
  if (operator === "-") opName = "Diffrence";
  if (operator === "*") opName = "Prouduct";
  if (operator === "/") opName = "Quotient";
  document.getElementById("answer").value = opName;
}
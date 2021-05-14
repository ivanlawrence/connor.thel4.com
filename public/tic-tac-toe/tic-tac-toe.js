var player = 1

makeItShow(xTurn)

document.querySelectorAll('select').forEach( function(el) {
  el.addEventListener("change", start);
});


function start() {
  
  const a1 = document.getElementById("a1");
  const a2 = document.getElementById("a2");
  const a3 = document.getElementById("a3");
  const b1 = document.getElementById("b1");
  const b2 = document.getElementById("b2");
  const b3 = document.getElementById("b3");
  const c1 = document.getElementById("c1");
  const c2 = document.getElementById("c2");
  const c3 = document.getElementById("c3");
  const tie = document.getElementById("tie");

  const arrA = [
	  a1.value,
		a2.value,
		a3.value
	]
	
	const arrB = [
	  b1.value,
		b2.value,
		b3.value
	]
	
	const arrC = [
	  c1.value,
		c2.value,
		c3.value
	]
	
	const arr1 = [
	  a1.value,
		b1.value,
		c1.value
	]
	
	const arr2 = [
	  a2.value,
		b2.value,
		c2.value
	]
	
	const arr3 = [
	  a3.value,
		b3.value,
		c3.value
	]
  	
	const arrAll = [ ...arrA, ...arrB, ...arrC ];
	
	const xCount = arrAll.filter( (cur) => cur === "x").length;
	const oCount = arrAll.filter( (cur) => cur === "o").length;
	
	const isDiagonalXed = a1.value === "x" && b2.value === "x" && c3.value === "x" 
	const isDiagonal2Xed = c1.value === "x" && b2.value === "x" && a3.value === "x" 
    const isArrAXed = arrA.every( v => v === "x" );
	const isArrBXed = arrB.every( v => v === "x" );
	const isArrCXed = arrC.every( v => v === "x" );
	const isArr1Xed = arr1.every( v => v === "x" );
	const isArr2Xed = arr2.every( v => v === "x" );
	const isArr3Xed = arr3.every( v => v === "x" );
	
	const isDiagonalOed = a1.value === "o" && b2.value === "o" && c3.value === "o" 
	const isDiagonal2Oed = c1.value === "o" && b2.value === "o" && a3.value === "o" 
    const isArrAOed = arrA.every( v => v === "o" );
	const isArrBOed = arrB.every( v => v === "o" );
	const isArrCOed = arrC.every( v => v === "o" );
	const isArr1Oed = arr1.every( v => v === "o" );
	const isArr2Oed = arr2.every( v => v === "o" );
	const isArr3Oed = arr3.every( v => v === "o" );
	
    if (!arrAll.includes("")) {
        makeItHide(msg)
        makeItShow(catsGame)
        makeItShow(refresh)
    }

    
    if (isArrAXed || isArrBXed || isArrCXed || isArr1Xed || isArr2Xed || isArr3Xed ||isDiagonalXed || isDiagonal2Xed === true) {
	makeItHide(msg)
	makeItShow(xWin)
	makeItShow(refresh)
	}
	
	if (isArrAOed || isArrBOed || isArrCOed || isArr1Oed || isArr2Oed || isArr3Oed || isDiagonalOed || isDiagonal2Oed === true) {
	makeItHide(msg)
	makeItShow(oWin)
    makeItShow(refresh)
    
    }
    
    if (pets.includes('cat') === true) {
        makeItHide(msg)
        makeItShow(tie)
    }
 
	if (player !== 1) {
		makeItHide(oTurn)
		makeItShow(xTurn)
		player++;
	} else {
		makeItHide(xTurn)
		makeItShow(oTurn)
		player--;
  }
}




function makeItShow(el) {
if (!el) return
el.style.display = ""
}



function makeItHide(el) {
if (!el) return
el.style.display = "none"
}
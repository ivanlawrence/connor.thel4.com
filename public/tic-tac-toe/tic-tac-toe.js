

makeItShow(xTurn)

document.querySelectorAll('select').forEach( (el) {
  el.addEventListener("change", start);
});


let functions = {
    
    a1 = document.getElementById("a1"),
    a2 = document.getElementById("a2"),
    a3 = document.getElementById("a3"),
    b1 = document.getElementById("b1"),
    b2 = document.getElementById("b2"),
    b3 = document.getElementById("b3"),
    c1 = document.getElementById("c1"),
    c2 = document.getElementById("c2"),
    c3 = document.getElementById("c3"),

    setup() {
        
        this.a1.addEventListener("click" , this.onclick(this.a1));
        this.a2.addEventListener("click" , this.onclick(this.a2));
        this.a3.addEventListener("click" , this.onclick(this.a3));
        this.b1.addEventListener("click" , this.onclick(this.b1));
        this.b2.addEventListener("click" , this.onclick(this.b2));
        this.b3.addEventListener("click" , this.onclick(this.b3));
        this.c1.addEventListener("click" , this.onclick(this.c1));
        this.c2.addEventListener("click" , this.onclick(this.c2));
        this.c3.addEventListener("click" , this.onclick(this.c3));
    },

    onclick(j) {
         alert("hello " + j + " !")
    },

    makeItShow(el) {
        if (!el) return
        el.style.display = ""
    },

    makeItHide(el) {
        if (!el) return
        el.style.display = "none"
    },

    makeItHideAll() {
        makeItHide(oWin);
        makeItHide(xWin);
        makeItHide(refresh);
        makeItHide(xTurn);
        makeItHide(oTurn);
        makeItHide(tie);
    },
}

functions.setup()

document.getElementById("goHome").addEventListener("click", homePage );

 homePage() {
    window.location.href = "http://connor.thel4.com";
}
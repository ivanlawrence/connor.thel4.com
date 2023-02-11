const vueApp = new Vue({

    el:"#vue-app",

    data:{
        int1:"",
        int2:"",
        ans:"",
        oporator:"",
        oporators:[
            {
                displayName:"Addition",
                value:"+"
            },
            {
                displayName:"Subtraction",
                value:"-"
            },
            {
                displayName:"Multiplication",
                value:"*"
            },
            {
                displayName:"Division",
                value:"/"
            },
        ],
    },

    methods:{

    },

    computed:{
        addition() { return  parseInt(this.int1) + parseInt(this.int2); },
        subtraction() { return this.int1 - this.int2; },
        multiplication() { return this.int1 * this.int2; },
        division() { return this.int1 / this.int2; },
    },
});

document.getElementById("goHome").addEventListener("click", homePage );

function homePage() {
    window.location.href = "http://connor.thel4.com";
}
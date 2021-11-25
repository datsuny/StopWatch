let timeRef = Date.now();
let stop = false;
let stack = 0;

setInterval(() => {
    let time = document.getElementById("time");
    if (stop) {
        stack += Date.now() - timeRef;
    }
    timeRef = Date.now()
    time.innerHTML = formatMS(stack);
}, 1000/60);

function formatMS(ms){
    let MS = ms%1000;
    let S = Math.floor(((ms-MS)/1000) % 60);
    let M = Math.floor((S / 60) % 60);
    let H = Math.floor((M / 60));

    Number.prototype.ceros = function(n){
        return (this+"").padStart(n,0);
    }
    return H.ceros(2)+":"+M.ceros(2)+":"+S.ceros(2)+":"+MS.ceros(3);

}

function start(){
    stop = true;

}

function pause(){
    stop = false;
}

function restart(){
    stack = 0;
}

/* Lunch*/

let timeRef2 = Date.now();
let stop2 = false;
let stack2 = 0;


function start2(){
    stop2 = true;

}

function pause2(){
    stop2 = false;
}

function restart2(){
    stack2 = 0;
}

setInterval(() => {
    let time2 = document.getElementById("time2");
    if (stop2) {
        stack2 += Date.now() - timeRef2;
    }
    timeRef2 = Date.now()
    time2.innerHTML = formatMS(stack2);
}, 1000/60);

function formatMS2(ms2){
    let MS2 = ms2%1000;
    let S2 = Math.floor(((ms2-MS)/1000) % 60);
    let M2 = Math.floor((S2 / 60) % 60);
    let H2 = Math.floor((M2 / 60));

    Number.prototype.ceros = function(n){
        return (this+"").padStart(n,0);
    }
    return H2.ceros(2)+":"+M2.ceros(2)+":"+S2.ceros(2)+":"+MS2.ceros(3);

}
const txtA = [
    "컴퓨터 사양-1",
    "컴퓨터 사양-2",
    "컴퓨터 사양-3"
];
let i, no;
var btn0, btn1, btn2;
var txt;
window.onload = function() {
    btn0 = document.getElementById("btn0");
    btn1 = document.getElementById("btn1");
    btn2 = document.getElementById("btn2");
    txt = document.querySelector(".txt");

    btn0.onclick = function() {
        txt.innerHTML = txtA[0];
    }
    btn1.onclick = function() {
        txt.innerHTML = txtA[1];
    }
    btn2.onclick = function() {
        txt.innerHTML = txtA[2];
    }
}
$(function() {
    
})




// var calc = document.getElementById("calc");
// calc.addEventListener("click", function(){
//     s = kor + eng + math;
//     a = s / 3;
//     console.log("총점 : " + s + ", " + "평균 : " + a);
    
//     sum = document.querySelector(".sum");
//     sum.innerHTML = s;
//     avg = document.querySelector(".avg");
//     avg.innerHTML = a.toFixed(2);
    
//     // s = document.querySelector(".sum");
//     // a = document.querySelector(".avg");
//     // s.innerHTML = s;
//     // a.innerHTML = a;
// })
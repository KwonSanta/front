
let kor=55, eng=60, math=70, sum=0, avg=0;
let k, e, m, s, a;

window.onload = function() {

    var calc = document.getElementById("calc");
    calc.addEventListener("click", function(){
        s = kor + eng + math;
        a = s / 3;
        console.log("총점 : " + s + ", " + "평균 : " + a);
        
        sum = document.querySelector(".sum");
        sum.innerHTML = s;
        avg = document.querySelector(".avg");
        avg.innerHTML = a.toFixed(2);
        
        // s = document.querySelector(".sum");
        // a = document.querySelector(".avg");
        // s.innerHTML = s;
        // a.innerHTML = a;
    })
}
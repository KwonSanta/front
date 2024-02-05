// document.write("자동차"); 
// document : 웹브라우저, write : 출력

// a = 100;
// b = 200;
// c = a + b;
// k = "홍길동";
// document.write(c + " : " + k);

var menu1, menu2, menu3, menu4
    ,pic, no, count=1;
let prev, next;

window.onload = function() {
    menu1 = document.getElementById("menu1");
    menu2 = document.getElementById("menu2");
    menu3 = document.getElementById("menu3");
    menu4 = document.getElementById("menu4");
    pic = document.querySelector(".pic");
    no = document.querySelector(".no");

    menu1.onclick = function() {
        pic.src = "img/day7_img1.jpg";
        no.innerHTML = 1;
    }
    menu2.onclick = function() {
        pic.src = "img/day7_img2.jpg";
        no.innerHTML = 2;
    }
    menu3.onclick = function() {
        pic.src = "img/day7_img3.jpg";
        no.innerHTML = 3;
    }
    menu4.onclick = function() {
        pic.src = "img/day7_img4.jpg";
        no.innerHTML = 4;
    }
    
    prev = document.querySelector(".prev");
    next = document.querySelector(".next");
    
    /*
    next.onclick = function() {
        if (count < 4) {
            count++;
        }
        no.innerHTML = count;
        pic.src = "img/day7_img" + count + ".jpg";
    }
    prev.onclick = function() {
        if (count > 1) {
            count--;       
        }
        no.innerHTML = count;
        pic.src = "img/day7_img" + count + ".jpg";
    }
    */

    next.addEventListener("click", function(){
       if (no.innerHTML < 4) {
        no.innerHTML++;
        }
        // no.innerHTML = count;
        pic.src = "img/day7_img" + no.innerHTML + ".jpg";
    })
    prev.addEventListener("click", function(){
        if (no.innerHTML > 1) {
            no.innerHTML--;       
        }
        // no.innerHTML = count;
        pic.src = "img/day7_img" + no.innerHTML + ".jpg";
    })
}
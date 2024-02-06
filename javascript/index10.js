let i, menu;
window.onload = function() {
    
    /* let sum=0, odd=0;
    for (i=1; i<=100; i++) {
        if (i%2==0) {
            sum += i;
        }
        else {
            odd += i;
        }
    }
    document.write("짝수의 합 : " + sum + "<br>");
    document.write("홀수의 합 : " + odd); */

    // 구구단 3단 출력
    /* for (i=1; i<10; i++) {
        document.write("<br>" + 3 + " * " + i + " = " + 3*i);
    } */


    /* let str = "", box;
    for(i=1; i<=9; i++) {
        str += "<br>" + 3 + " * " + i + " = " + 3*i;
    }
    box = document.querySelector(".box");
    box.innerHTML = str; */

    // 원하는 숫자를 입력하고 확인을 클릭하면 해당 구구단 출력
    /* let dan, btn_ok, str="", box;
    dan = document.querySelector(".dan");
    ok = document.querySelector(".ok");
    box = document.querySelector(".box");
    ok.addEventListener("click", function() {
        str = ""; // 누적방지를 위해 확인버튼 클릭시 str을 초기화
        console.log(dan.value); // input 태그의 입력값을 받을 때 .value 필요
        // let gu = Number(dan.value);
        let gu = parseFloat(dan.value);
        for (i=1; i<=9; i++) {
            str += "<br>" + gu + " * " + i + " = " + gu*i;    
        }
        box.innerHTML = str;
    }) */

    menu = document.querySelector(".menu").getElementsByTagName("li");
    for (i=0; i<7; i++) {
        menu[i].style.fontSize = "1.3rem";
        menu[i].style.color = "blue";
    }

    let img7;
    img7 = document.querySelector(".img7").getElementsByTagName("div");
    for (i=0; i<7; i++) {
        img7[i].style.background = "url(img/day7_img" + i + ".jpg";
        img7[i].style.backgroundSize = "100% 100%";
    }
    // pic.src = "imb/big" + i + ".jpg";
}

$(function() {
    $(".menu li").on("click", function() {
        $(".menu li").css("background", "none").css("color", "black");
        $(this).css({"background":"black", "color":"white"});

    })
    $(".img7 div").on("click", function() {
        var no = $(this).index();  // 클릭한 놈이 몇번째 놈인지 숫자 할당
        $(".pic").attr("src", "img/day7_img" + no + ".jpg"); // attr : 속성값 변경
    })
})


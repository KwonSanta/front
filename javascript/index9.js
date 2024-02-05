window.onload = function() {
    /* 아래 내용 자바스크립트로 코딩
    let menu0, menu1, menu2, menu3;
    menu0 = document.getElementById("menu0");
    menu1 = document.getElementById("menu1");
    menu2 = document.getElementById("menu2");
    menu3 = document.getElementById("menu3");
    
    let title = document.querySelector(".title");
    menu0.onclick = function() {
        title.innerHTML = "MBTI 검사에 오신 것을 환영합니다.";
    }
    menu1.onclick = function() {
        title.innerHTML = "DISC에 오신 것을 환영합니다.";
    }
    menu2.onclick = function() {
        title.innerHTML = "흥미적성검사에 오신 것을 환영합니다.";
    }
    menu3.onclick = function() {
        title.innerHTML = "학습역량검사에 오신 것을 환영합니다.";
    }
    */

    $(".menu li").on("click", function() {
        $(".menu li").css("background", "none"); 
        $(this).css("background", "#636569");

        $("article").hide();

        //클릭한 li의 index값 알아내서 no에 저장
        no = $(this).index(); 
        if (no == 0) {
            $(".title").text("MBTI 검사에 오신 것을 환영합니다.");
            $(".at0").show();
            // MBTI 관련 서브메뉴
            $(".left .sub0").text("에너지 충전");
            $(".left .sub1").text("인식기능(정보수집)");
            $(".left .sub2").text("판단기능(결정, 선택)");
            $(".left .sub3").text("생활양식(판단, 인식)");
            // MBTI 내용 중 원 10개 위치 잡기

        }
        else if (no == 1) {
            $(".title").text("DISC에 오신 것을 환영합니다.");
            $(".at1").show();
            $(".left .sub0").text("주도형");
            $(".left .sub1").text("사고형");
            $(".left .sub2").text("안정형");
            $(".left .sub3").text("신중형");

        }
        else if (no == 2) {
            $(".title").text("흥미적성검사에 오신 것을 환영합니다.");
            $(".at2").show();
            $(".left .sub0").text("흥미_0");
            $(".left .sub1").text("흥미_1");
            $(".left .sub2").text("흥미_2");
            $(".left .sub3").text("흥미_3");
        }
        else {
            $(".title").text("학습역량검사에 오신 것을 환영합니다.");
            $(".at3").show();
            $(".left .sub0").text("학습역량_0");
            $(".left .sub1").text("학습역량_1");
            $(".left .sub2").text("학습역량_2");
            $(".left .sub3").text("학습역량_3");
        }
    })

    // left menu click event
    $(".left div").on("click", function() {
        $(".left div").css("background", "none");
        $(this).css("background", "#A2C7E2");
    })

    $(".at0_box0").on("click", function() {
        $(".at0_box").css("opacity", "0.4");
        $(".at0_box1").css("opacity", "1")
                    .css("background", "white")
                    .css("color", "black");
    })
    $(".at0_box1").on("click", function() {
        $(".at0_box").css("opacity", "0.4");
        $(".at0_box2").css("opacity", "1")
                    .css("background", "white")
                    .css("color", "black");
    })
}
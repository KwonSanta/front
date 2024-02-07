const menuA = [
    "토끼와 거북이 경주",
    "취업과 진로", 
    "4차 산업",
    "NCS 국가직무",
    "MBTI와 적성검사"
];
const at0A = [
    "1. 전략적인 속도 조절",
    "2. 휴식과 집중",
    "3. 지혜로운 선택",
    "4. 동료들과 협력",
    "5. 도움을 청하다"
];
const at1A = [
    "1. 전문성 강화",
    "2. 풀스택 개발자로의 전환",
    "3. 산업 동향과 수요",
    "4. 프로젝트 경험의 다양성",
    "5. 개인 공부와 경력 쌓기"
];
const backA = [
    "day7_img0.jpg", "day7_img1.jpg", "day7_img2.jpg", "day7_img3.jpg", "day7_img4.jpg"
]
const menu0 = [
    "index11_img0.jpg",
    "index11_img1.jpg",
    "index11_img2.jpg",
    "index11_img3.jpg",
    "index11_img4.jpg"
]
const menu1 = [
    "index11_img5.jpg",
    "index11_img6.jpg",
    "index11_img7.jpg",
    "index11_img8.jpg",
    "index11_img9.jpg"
]
const menu2 = [
    "index11_img10.jpg",
    "index11_img11.jpg",
    "index11_img12.jpg",
    "index11_img13.jpg",
    "index11_img14.jpg"
]
const menu3 = [
    "index11_img15.jpg",
    "index11_img16.jpg",
    "index11_img17.jpg",
    "index11_img18.jpg",
    "index11_img19.jpg"
]
const menu4 = [
    "index11_img20.jpg",
    "index11_img21.jpg",
    "index11_img22.jpg",
    "index11_img23.jpg",
    "index11_img24.jpg"
]
let i;
window.onload = function() {
    for (i = 0; i < menuA.length; i++) {
        $("nav div:nth-child(" + (i+1) + ")").html(menuA[i]);
        $(".title" + i).html(menuA[i]);

        //at0-li에 내용 넣기
        $(".at0 .text li:eq(" + i + ")").html(at0A[i]); // eq:equals
        $(".at1 .text li:eq(" + i + ")").html(at1A[i]); 
    }
}
let sw = 0, sw2=0;
$(function() {
    $(".bar").on("click", function() {
        
        if (sw2 == 0) {
            $(this).html("X");
            $("nav").animate({"left" : "80%"}, 500); // left로 80%만큼 500단위시간 동안 수행
            sw2 =1;
        }
        else {
            $(this).html("메뉴");
            $("nav").animate({"left" : "100%"}, 500); // left로 80%만큼 500단위시간 동안 수행
            sw2 = 0;
        }
    })

    // 주메뉴 클릭 이벤트
    $("nav div").on("click", function(){
        sw2 = 0;
        $(".bar").html("메뉴");
        $("nav").animate({"left" : "100%"}, 500);
        // nav 클릭 시 div의 index로 section .title 변경
        no = $(this).index();
        $(".at").hide();
        $(".at"+no).show();
        // background 변경
        $(".big").css("background", "url(img/" + backA[no] + ")")
                    .css("backgroundSize", "100% 100%");
    })
    
    // 
    $(".text li").on("click", function() {
        if (sw == 0) {
            sw = 1;
            text_li(this);
        }          
        $(".text li").css({"background":"white", "color":"black"})
        $(this).css({"background":"green", "color":"white", "border":"1px solid white"});

    })
})

function text_li(js) {
    $(".at")
    $(".text").animate({
        "height":"50px", "top":"90%", 
        "padding":"0" }, 500, function() {
            $(".text").css({
                "display":"flex", "justifyContent":"space-around"
            });
            $(".text li").css ({
                "fontSize":"1rem", "width":"15%", "height":"100%",
                "lineHeight":"50px", "textAlign":"center",
                "marginTop":"0", "background":"white", "color":"black"
            });
            $(js).css({"background":"green", "color":"white", "border":"1px solid white"});
    });
    $(".big").animate({"left":"100px", "borderRadius":"100%"}, 500);
}
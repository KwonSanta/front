const titleA = [
    "믿음",
    "신뢰",
    "희망",
    "자신감",
    "사랑",
    "태도"
];
const title_colorA = [
    "green",
    "orange",
    "black",
    "teal",
    "blue",
    "purple"
];
const at_backA = [
    "index11_img11.jpg",
    "index11_img12.jpg",
    "index11_img13.jpg",
    "index11_img14.jpg",
    "index11_img15.jpg",
    "index11_img16.jpg"
];
const at0_img4A = [
    "index11_img18.jpg",
    "index11_img19.jpg",
    "index11_img20.jpg",
    "index11_img21.jpg"
];
const at1_img4A = [
    "index11_img18.jpg",
    "index11_img19.jpg",
    "index11_img20.jpg",
    "index11_img21.jpg"
];
const at_title_textA = [
    "믿음이란", "신뢰란", "희망이란", "자신감이란", "사랑이란", "태도란"
];
let i, no;
let title;
window.onload = function() {
    title = document.getElementsByClassName("title")
    for(i=0; i<titleA.length; i++) {
        $(".title" + i).html(titleA[i]);
        // $(".title" + i).css("background",title_colorA[i]);
        title[i].style.background = title_colorA[i];
        $(".at_box" + i).css("background", "url(img/" + at_backA[i]) +")";
    }
    for (i=0; i<at0_img4A.length; i++) {
        $(".at0_img4 li:eq(" + i + ")").css("background", "url(img/" + at0_img4A[i] + ")")
                                        .css("backgroundSize", "100% 100%");
        $(".at1_img4 li:eq(" + i + ")").css("background", "url(img/" + at1_img4A[i] + ")")
                                        .css("backgroundSize", "100% 100%");                                        
    }


}


$(function() {
    $(".menuCall").on("mouseover", function() {
        $(".menuBox").animate({"right" : "0"}, 500);
    })
    $(".menuBox li").on("click", function() {
        $(".menuBox").animate({"right": "-110px"}, 200);
    })

    /* 각 아티클 속에 있는 타이틀 클릭 시 메시지 출력 */
    $(".title").on("click", function() {
        no = $(this).attr("class").substr(5, 1);
        $(".at_title_text").css("opacity", "0")
        $(".at" + no + "_title_text").css("opacity", "1")
                                    .html(at_title_textA[no]);
    })
    // 아티클 .at0 속에 원 안의 그림4개를 각각 클릭하면
    $(".at0_img4 li").on("click", function() {
        no = $(this).index();
        $(".at0_pic").attr("src", "img/" + at0_img4A[no]);
    })

    // 화살표를 눌렀을 때 그림이 좌우로 이동
    let cnt = 0;
    $(".prev").on("click", function() {
        if (cnt > 0) {
            cnt--;
            $(".at1_img4").animate({"left":"+=500px"}, 500);
            $(".disp").html(cnt + 1 + "/4");
        }
    })
    $(".next").on("click", function() {
        if(cnt < 3) {
            cnt++;
            $(".at1_img4").animate({"left":"-=500px"}, 500);
            $(".disp").html(cnt + 1 + "/4");
        }
    })
})
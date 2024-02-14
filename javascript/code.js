const menuA = [
    "박장대소", "기립박수", "미소짓기", "박수웃음"
    ,"a", "b", "c"
];
let pic_textA = [
    "손뼉을 치면서 크게 웃는 모습",
    "일어나서 박수치기",
    "소리내지 않고 얼굴에 웃음 표현하기",
    "박수를 치면서 웃음",
    "a에 관련 사항", "b에 관련 사항", "c에 관련 사항"
];
let i, no;
window.onload = function() {
    for(i=0; i<menuA.length; i++) {
        $("nav div:eq(" + i + ")").html(menuA[i]);
    }
}

$(function() {
    $("nav div").on("click", function() {
        no = $(this).index();
        // $("section").css("background-image", "url('img/index11_img" + no + ".jpg')").css("backgroundSize", "100% 100%");
        $(".pic").attr("src", "img/index11_img" + no + ".jpg");
        $(".pic_text").html(pic_textA[no]);
    })
})
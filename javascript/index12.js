const menuA = [
    "회사소개",
    "주문예약",
    "매장관리",
    "판매실적",
    "도움말"
];
const imgA = [ "index11_img0.jpg", "index11_img1.jpg", "index11_img2.jpg", "index11_img3.jpg", "index11_img4.jpg"];
const img_textA = [
    "한빛", "Thank you", "Cafe", "텀블러", "데스크탑"
];
let i;
window.onload = function() {
    for(i=0; i<menuA.length; i++) {
        $("header div:eq(" + i + ")").text(menuA[i]);
    }
}

$(function() {
    $("header div").on("click", function() {
        $("header div").css("background", "none");  // 클릭하기 전 모든 메뉴버튼 배경 초기화
        $(this).css("background", "orange");    // 클릭시 해당 박스 배경 : 오렌지색

        // 클릭 시 인덱스 번호 할당
        no = $(this).index();
        $(".pic").attr("src", "img/" + imgA[no]);   // 
        $(".text").html(img_textA[no]);
    })

    $(".menu").on("click", function() {
        $("nav").animate({"left":"0"}, 500);
    })
    $("nav div").on("click", function() {
        $("nav").animate({"left":"-100px"}, 200);
    })
})
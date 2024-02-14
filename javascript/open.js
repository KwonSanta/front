const main_img = [
    "index11_img0.jpg", "index11_img1.jpg", "index11_img2.jpg", "index11_img3.jpg", "index11_img4.jpg"
];
const main_text = [
    "설명0", "설명1", "설명2", "설명3", "설명4"
];

window.onload = function() {

}

$(function() {
    $("nav div").on("click", function() {
        let no = $(this).index();
        $(".main_img").attr("src", "img/index11_img" + no + ".jpg");
        // $(".main_text").html(main_text[no]);
        $(".main_text").text(main_text[no]);
    })
})
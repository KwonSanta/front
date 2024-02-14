const repeatA = [
    "김치찌개",
    "순두부",
    "참치김밥",
    "For of",
    "Map",
    "while",
    "do while",
];
const imgA = [
    "index11_img0.jpg",
    "index11_img1.jpg",
    "index11_img2.jpg",
    "index11_img3.jpg",
    "index11_img4.jpg",
    "index11_img5.jpg",
    "index11_img6.jpg"
];
let i=0, no, cnt=0;
window.onload = function() {
    /* for (i=0; i<repeatA.length; i++) {
        $("nav div:eq(" + i + ")").html(repeatA[i]);
    } */
    /* while (i <repeatA.length) {
        $("nav div:eq(" + i + ")").html(repeatA[i]);
        i++;
    } */
    while (true) {
        $("nav div:eq(" + i + ")").html(repeatA[i]);
        if (i >= repeatA.length)
            break;
        else {
            i++;
            continue;
        }
    }
    // for (i=0; i<imgA.length; i++) {
    //     // $("section div img").attr("src", imgA[i]);
    //     $("section div").css("background-image", "url('img/index11_img" + i + ".jpg')")
    //                     .css("backgroundSize", "100% 100%");
    // }
    while ( cnt < imgA.length ) {
        $(".sec0 > div:eq(" + cnt + ")")
            .css("background", "url(img/" + imgA[cnt] + ")")
            .css("backgroundSize", "100% 100%")
        cnt++;
    }
}

$(function() {

})
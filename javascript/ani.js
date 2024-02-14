const picA = [
    "index11_img10.jpg",
    "index11_img11.jpg",
    "index11_img12.jpg",
    "index11_img13.jpg",
    "index11_img14.jpg",
    "index11_img4.jpg",
    "index11_img16.jpg",
    "index11_img17.jpg",
    "index11_img18.jpg",
    "index11_img19.jpg"
];
const menuA = [
    "스키-1", "스키-2",
    "축구-1","축구-2","축구-3","풍경-1",
    "F1-1","F1-2","F1-3","F1-4"
];
window.onload = function() {
    /* 
    for(i=0; i<menuA.length; i++) {
        $(".menu li:eq(" + i + ")").html(menuA[i]);
    } 
    */
    let menu = document.querySelector(".menu").getElementsByTagName("li");
    for(i=0; i<menuA.length; i++) {
        menu[i].innerHTML = menuA[i];
    }
}

$(function() {
    let num;
    $(".menu li").on("click", function() {
        num = $(this).index();
        $(".pic2").attr("src", "img/" + picA[num]);
        $(".move").animate({"left":"15%"}, 1500);
    })
})
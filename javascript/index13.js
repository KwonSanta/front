
window.onload = function() {
    let skip = document.querySelector(".skip"); 
    let back = document.getElementById("back");
    /* skip.onclick = function() {
        back.style.display = "none";
    } */
    /* skip.addEventListener("click", function() {
        back.style.display = "none";
    }) */
    skip.addEventListener("click", func_skip);
}
function func_skip() {
    back.style.display = "none";
}

$(function() {
    
})
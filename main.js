
window.onload = function () {
    let bgs = document.querySelectorAll(".jumbotron>.bg");
    for (let i = 0; i < bgs.length - 1; i++) {
        bgs[i].style.backgroundImage = "url(./img/cover-" + i + ".jpg)";
        if (i == 0) {
            bgs[i].style.opacity = 1;
        }
    }
    //讓圖自動輪播
    window.setInterval(changeBg, 1500);
};

let index = 0; //用一個全域變數設定一開始是誰
function changeBg() {
    let bgs = document.querySelectorAll(".jumbotron>.bg");
    //把當前的圖淡出
    bgs[index].style.opacity = 0;

    //換下一張圖
    index = (index + 1) % 6;
    bgs[index].style.opacity = 1;

}
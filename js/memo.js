function stamp() {
    var stampImg = document.createElement("img");
    stampImg.src = "img/cursor.png";
    stampImg.alt = "흰멍이 도장";
    var x = event.clientX;
    var y = event.clientY;
    stampImg.style.position = "absolute";
    stampImg.style.left = x + "px";
    stampImg.style.top = y + "px";
    var content = document.querySelector(".content");
    content.appendChild(stampImg);

    setTimeout(() => {
        stampImg.style.WebkitAnimation = "fadeOut 1s";
        stampImg.style.animation = "fadeOut 1s";
        setTimeout(() => {
            stampImg.remove();
        }, 1000)
    }, 250)
}
function stamp() {
    var stampImg = document.createElement("img");
    stampImg.src = luckyStamp();
    stampImg.alt = "흰멍이 도장";
    var x = event.pageX + 5;
    var y = event.pageY + 10;
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
        }, 450)
    }, 300)
}

function luckyStamp() {
    const rand_0_7 = Math.floor(Math.random() * 7) + 1; // (0 ~ 6) + 1 -> (1 ~ 7)
    if (rand_0_7 === 7) {      // 1/7 의 확률로 하트 흰멍이가 나온다
        return url + "img/cursor_heart.png";
    } // 상대경로로 설정하면 결과.html 과 index.html 일 때의 경로가 달라짐
    else return url + "img/cursor.png";
}
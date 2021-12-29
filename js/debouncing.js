function debounce(func, timeout = 1000){
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

function saveInput(){
    console.log('도장 쾅!');
    var stampImg = document.createElement("img");
    stampImg.src = luckyStamp();
    stampImg.alt = "흰멍이 도장";
    stampImg.draggable = false;
    var x = event.clientX + 5;
    var y = event.clientY + 10;
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

const processChanges = debounce(() => saveInput());
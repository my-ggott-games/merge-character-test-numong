function updateBackground() {
    // var element = document.querySelector(':root');
    var
        hr = (new Date()).getHours(),
        body = document.body,
        bstyle = body.style;
    if (hr < 2) {
        bstyle.backgroundColor = r.style.getPropertyValue("--배경20");
        //element.style.getPropertyValue("--bg20");
    } else if (hr < 4) {
        bstyle.backgroundColor = "#5B6575";
    } else if (hr < 6) {
        bstyle.backgroundColor = "#5B627C";
    } else if (hr < 8) {
        bstyle.backgroundColor = "#CECCB3";
    } else if (hr < 10) {
        bstyle.backgroundColor = "#E8DDC9";
    } else if (hr < 12) {
        bstyle.backgroundColor = "#ECE5DB";
    } else if (hr < 14) {
        bstyle.backgroundColor = "#EBE9E0";
    } else if (hr < 16) {
        bstyle.backgroundColor = "#EFEDE2";
    } else if (hr < 18) {
        bstyle.backgroundColor = "#ECE0C8";
    } else if (hr < 20) {
        bstyle.backgroundColor = "#ECDAB9";
    } else if (hr < 22) {
        bstyle.backgroundColor = "#A1A7B1";
    }else {
        bstyle.backgroundColor = "#98979B";
    }
}
// #ECD9BA #CECCB4 #5B6476
setInterval(updateBackground, 1000 * 60);
updateBackground();
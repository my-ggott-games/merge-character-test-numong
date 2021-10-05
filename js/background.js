function updateBackground() {
    var
        hr = (new Date()).getHours(),
        body = document.body,
        bstyle = body.style;
    if (hr < 2) {
        bstyle.backgroundColor = "#5B6476";
    } else if (hr < 4) {
        bstyle.backgroundColor = "#ECD9BA";
    } else if (hr < 6) {
        bstyle.backgroundColor = "#CECCB4";
    } else if (hr < 8) {
        bstyle.backgroundColor = "#CECCB4";
    } else if (hr < 10) {
        bstyle.backgroundColor = "#CECCB4";
    } else if (hr < 12) {
        bstyle.backgroundColor = "#CECCB4";
    } else if (hr < 14) {
        bstyle.backgroundColor = "#CECCB4";
    } else if (hr < 16) {
        bstyle.backgroundColor = "#CECCB4";
    } else if (hr < 18) {
        bstyle.backgroundColor = "#CECCB4";
    } else if (hr < 20) {
        bstyle.backgroundColor = "#CECCB4";
    } else if (hr < 22) {
        bstyle.backgroundColor = "#CECCB4";
    }else {
        bstyle.backgroundColor = "#586068";
    }
}
// #ECD9BA #CECCB4 #5B6476
setInterval(updateBackground, 1000 * 60);
updateBackground();
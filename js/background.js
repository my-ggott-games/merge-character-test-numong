function updateBackground() {
    var
        hr = (new Date()).getHours(),
        body = document.body,
        bstyle = body.style;
    if (hr < 6) {
        bstyle.backgroundColor = "#5B6476";
    } else if (hr < 12) {
        bstyle.backgroundColor = "#ECD9BA";
    } else if (hr < 18) {
        bstyle.backgroundColor = "#CECCB4";
    }else {
        bstyle.backgroundColor = "#8CA1AE";
    }
}
// #ECD9BA #CECCB4 #5B6476
setInterval(updateBackground, 1000 * 60);
updateBackground();
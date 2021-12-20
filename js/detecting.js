/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */

getMobileOperatingSystem();

function getMobileOperatingSystem() {
    let browserDiv = document.getElementById('pleaseUseExternalBrowser');
    let pleaseUseExternalBrowser = document.createElement('h5');
// pleaseUseExternalBrowser.setAttribute('href', infoList[point].link);
    browserDiv.appendChild(pleaseUseExternalBrowser);      // resultLink 연결

    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        pleaseUseExternalBrowser.innerHTML = '기본 브라우저로 시작하면 오류 없이</br>즐길 수 있어요!';
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        pleaseUseExternalBrowser.innerHTML = '크롬으로 시작하면 오류 없이</br>즐길 수 있어요!';
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        pleaseUseExternalBrowser.innerHTML = '사파리로 시작하면 오류 없이</br>즐길 수 있어요!';
        return "iOS";
    }

    // maybe PC
    pleaseUseExternalBrowser.innerHTML = '월월월월월월';
    return "unknown";
}
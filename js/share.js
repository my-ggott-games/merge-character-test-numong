const url = 'https://beta-numong-test.netlify.app/';

function setKakaoShare(){
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '내 소울메이트는 누구일까?';
  const shareDes = infoList[resultAlt].name;    // ex) "누멍... 누멍!" - 꿀꿀이
  const shareImage = url + 'img/image-' + resultAlt + '.jpeg';
  const shareURL = url + 'page/result-' + resultAlt + '.html';

  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL
      },
    },

    buttons: [
      {
        title: '어떤 친구일까?',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
    ]
  });

  document.getElementById("pleaseWait").innerHTML = "5초만 기다려줘!";
}

function setTwitterShare(){
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '내 소울메이트는 누구일까?';
  const shareURL = url + 'page/result-' + resultAlt + '.html';

  window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(shareTitle) + "&url=" + encodeURIComponent(shareURL) + "&hashtags=누멍이_소울메이트_테스트");
  document.getElementById("pleaseWait").innerHTML = "5초만 기다려줘!";
}

function setFacebookShare(){
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '내 소울메이트는 누구일까?';
  const shareURL = url + 'page/result-' + resultAlt + '.html';
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(shareURL) + "&t=" + encodeURIComponent(shareTitle));
  document.getElementById("pleaseWait").innerHTML = "5초만 기다려줘!";
}



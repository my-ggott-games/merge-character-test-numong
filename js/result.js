function calResult() {
    function maxIndices(select) {
        var max = -Infinity;
        var maxIndices = [];
        for (var i = 0; i < select.length; i++) {
            if (select[i] === max) {
                maxIndices.push(i);
            } else if (select[i] > max) {
                maxIndices = [i];
                max = select[i];
            }
        }
        console.log("공동 1등 배열 : " + maxIndices);
        console.log("공동 1등은 몇 개? : " + maxIndices.length);
        return maxIndices;
    }

    var finalSelect = maxIndices(select);
    var result;
    if (finalSelect.length > 1) {  // bbcc bccb abbc aaaa aaaa aaaa
        makeBonusQuestion();
        result = setBonusQnA();
        console.log("if-result 잘 들어왔나요? " + result);
        console.log("중복 있어요!");
        alert("중복 있어요!");
    } else {
        result = select.indexOf(Math.max(...select));
        console.log("else-result 잘 들어왔나요? " + result);
        console.log("중복 없어요!");
        console.log("select 배열 : " + select);
        alert("중복 없어요!");
    }

    console.log("result : " + result);
    return result;


    function makeBonusQuestion(){
        var q = document.querySelector('.qBox');
        q.innerHTML = bonusList[0].qBonus;        // 질문: element 안의 HTML이나 XML 가져오기 <-> innerText

    }

    function setBonusQnA() {
        var selectedResult;
        for (let i in finalSelect) {        // 답변: 버튼 만들기
            var finalSelectIndex = finalSelect[i];
            console.log(i + " 번째 " + "makeBonusAnswer 불러오기 시작!");
            selectedResult = makeBonusAnswer(bonusList[0].aBonus[finalSelectIndex].answer, finalSelectIndex);
            console.log("selectedResult 갱신완료! " + selectedResult);
            console.log(i + " 번째 " + "makeBonusAnswer 불러오기 끝!");
        }
    }

    function makeBonusAnswer(answerText, idx) {
        var a = document.querySelector('.answerBox');
        var bonusAnswerButton = document.createElement('button');  // button 만들어 반환
        bonusAnswerButton.id = bonusList[0].aBonus[idx].type;
        bonusAnswerButton.classList.add('answerList');       // answerList 라는 이름의 클래스값 부여
        bonusAnswerButton.classList.add('my-3');
        bonusAnswerButton.classList.add('px-3');
        bonusAnswerButton.classList.add('py`-3');
        bonusAnswerButton.classList.add('mx-auto');
        bonusAnswerButton.classList.add('fadeIn');

        a.appendChild(bonusAnswerButton);              // answer 가 a에 소속될 수 있게
        bonusAnswerButton.innerHTML = answerText;      // element 안의 HTML이나 XML 가져오기

        bonusAnswerButton.addEventListener("click", function (e) {
            var children = document.querySelectorAll('.answerList');  // 버튼을 모두 선택할 수 있게, html 의 onClick
            for (let i = 0; i < children.length; i++) {
                children[i].disabled = true;            // 버튼을 하나라도 누르면 모두 안보이게
                children[i].style.WebkitAnimation = "fadeOut 0.5s";
                children[i].style.animation = "fadeOut 0.5s";
            }
            setTimeout(() => {
                for (let i = 0; i < children.length; i++) {
                    children[i].style.display = 'none';   // 버튼을 하나라도 누르면 모두 비활성화
                }
                console.log(bonusAnswerButton.id + " 가 최종 선택되었습니다!");
                alert(bonusAnswerButton.id + " 가 최종 선택되었습니다!");
                return something;
            }, 450)

        }, false);
    }
}

function setResult() {
    let point = calResult();
    const resultName = document.querySelector('.resultname');
    resultName.innerHTML = infoList[point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'img/image-' + point + '.jpeg';       // image-n.jpeg
    resultImg.src = imgURL;
    resultImg.classList.add('img-fluid');     // image 에 반응성 적용
    imgDiv.appendChild(resultImg);          // resultImg 연결

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;
    goResult();
}

function goResult() {       // 화면전환
    qna.style.WebkitAnimation = "fadeOut 0.5s";
    qna.style.animation = "fadeOut 0.5s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 0.5s";
        result.style.animation = "fadeIn 0.5s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block"
        }, 450)
    })
    // setResult();
}
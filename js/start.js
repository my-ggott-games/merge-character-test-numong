const main = document.querySelector("#main"); // 상수에 main section 담기
const qna = document.querySelector("#qna");   // 상수에 qna section 담기
const result = document.querySelector( "#result");  // 상수에 result section 담기
const endPoint = 12;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var progressWidth = 1;
let qIdx = 0;         // q의 인덱스, goNext() 에서 배열의 0번째 요소부터 차례로 질문한다.

function makeAnswer(answerText, qIdx, idx){
  var a = document.querySelector('.answerBox');
  var answerButton = document.createElement('button');  // button 만들어 반환
  answerButton.classList.add('answerList');       // answerList 라는 이름의 클래스값 부여
  answerButton.classList.add('my-3');
  answerButton.classList.add('px-3');
  answerButton.classList.add('py-3');
  answerButton.classList.add('mx-auto');
  answerButton.classList.add('fadeIn');

  a.appendChild(answerButton);              // answer 가 a에 소속될 수 있게
  answerButton.innerHTML = answerText;      // element 안의 HTML이나 XML 가져오기

  answerButton.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');  // 버튼을 모두 선택할 수 있게, html 의 onClick
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;            // 버튼을 하나라도 누르면 모두 안보이게
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      var target = qnaList[qIdx].a[idx].type;
      for(let i = 0; i < target.length; i++){
        select[target[i]] += 1;
        console.log(target[i] + " 가 선택되었습니다!");
      }

      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';   // 버튼을 하나라도 누르면 모두 비활성화
      }
      if(qIdx < 12){
        goNext(++qIdx);         // 다음 질문으로 넘어가기
      }
    },450)
  }, false);
}

function makeQnA(qIdx){
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;        // 질문: element 안의 HTML이나 XML 가져오기 <-> innerText

  for (let i in qnaList[qIdx].a){        // 답변: 버튼 만들기
    makeAnswer(qnaList[qIdx].a[i].answer, qIdx, i)
  }
}

function goNext(qIdx) {
  function moveProgressBar(){
    var progress = document.querySelector('.progressBar');
    var id = setInterval(progressFrame, 15);
    function progressFrame() {
      if (progressWidth >= (100 / endPoint) * (qIdx + 1)) {
        clearInterval(id);
      } else {
        progressWidth++;
        progress.style.width = progressWidth + '%';
      }
    }
  }
  if (qIdx === endPoint) {
    setResult()
    // goResult();
    return;
  }
  makeQnA(qIdx);
  moveProgressBar();
}

function begin(){
  var startButton = document.querySelector('.btn');
  startButton.style.display = 'none';
  main.style.WebkitAnimation = "fadeOut 1s";  // Webkit - 크롬
  main.style.animation = "fadeOut 1s";        // is 아니고 1초, main fade out
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";  // qna fade in
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block"       // none <-> block
    }, 450)
    goNext(qIdx);
  }, 450);
}

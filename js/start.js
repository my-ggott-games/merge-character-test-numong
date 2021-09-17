const main = document.querySelector("#main"); // 상수에 main section 담기
const qna = document.querySelector("#qna");   // 상수에 qna section 담기
const result = document.querySelector( "#result");
const endPoint = 12;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function calResult(){
  var result = select.indexOf(Math.max(...select));
  return result;
}

function setResult(){
  let point = calResult();
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[point].name;

  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = 'img/image-' + point + '.png';       // image-n.png
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');     // image 에 반응성 적용
  imgDiv.appendChild(resultImg);          // resultImg 연결

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;
}

function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)})
  setResult();
}

function addAnswer(answerText, qIdx, idx){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');  // button 만들어 반환
  answer.classList.add('answerList');       // answerList 라는 이름의 클래스값 부여
  answer.classList.add('my-3');
  answer.classList.add('px-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');

  a.appendChild(answer);              // answer 가 a에 소속될 수 있게
  answer.innerHTML = answerText;      // element 안의 HTML이나 XML 가져오기

  answer.addEventListener("click", function(){
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
      }

      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';   // 버튼을 하나라도 누르면 모두 비활성화
      }
      goNext(++qIdx);         // 다음 질문으로 넘어가기
    },450)
  }, false);
}

function goNext(qIdx){
  if(qIdx === endPoint){
    goResult();
    return;
  }
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;        // 질문: element 안의 HTML이나 XML 가져오기 <-> innerText
  for(let i in qnaList[qIdx].a){        // 답변: 버튼 만들기
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx+1) + '%';   // 질문이 12개이므로 12등분
}

function begin(){
  main.style.WebkitAnimation = "fadeOut 1s";  // Webkit - 크롬
  main.style.animation = "fadeOut 1s";        // is 아니고 1초, main fade out
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";  // qna fade in
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block"       // none <-> block
    }, 450)
    let qIdx = 0;         // q의 인덱스, goNext() 에서 배열의 0번째 요소부터 차례로 질문한다.
    goNext(qIdx);
  }, 450);
}

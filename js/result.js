function calResult(){
    function max(select) {
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
        console.log(maxIndices);
        console.log(maxIndices.length);
        if(maxIndices.length > 1){  // bbcc bccb abbc
            //fill here
        }
    };
    max(select);

    var result = select.indexOf(Math.max(...select));
    console.log(result);

    return result;
}



function setResult(){
    let point = calResult();
    const resultName = document.querySelector('.resultname');
    resultName.innerHTML = infoList[point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'img/image-' + point + '.jpeg';       // image-n.jpeg
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');     // image 에 반응성 적용
    imgDiv.appendChild(resultImg);          // resultImg 연결

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;
}

function goResult(){
    qna.style.WebkitAnimation = "fadeOut 0.5s";
    qna.style.animation = "fadeOut 0.5s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 0.5s";
        result.style.animation = "fadeIn 0.5s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block"
        }, 450)})
    setResult();
}
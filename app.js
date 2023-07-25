const startBtn = document.querySelector('.start_btn');
const introBox = document.querySelector('.intro');
const questionBox = document.querySelector('.qna');
const outroBox = document.querySelector('.outro');
const resultBox = document.querySelector('.result');

// intro 숨기고 question 보이기
startBtn.addEventListener('click', () => {
  introBox.classList.add('hide');
  questionBox.classList.remove('hide');
});

//
const question = document.querySelector('.question');
const answerA = document.querySelector('label[for="answer_a"]');
const answerB = document.querySelector('label[for="answer_b"]');
const continueBtn = document.querySelector('.continue_btn');

const radioBtnA = document.querySelector('#answer_a');
const radioBtnB = document.querySelector('#answer_b');

// QnA 데이터 가져오기
const qna_data = await fetch('./data/qna.json')
  .then((res) => res.json())
  .then((data) => data);

let q_num = 1;
continueBtn.addEventListener('click', () => {
  if (radioBtnA.checked || radioBtnB.checked) {
    let seleted = radioBtnA.checked ? radioBtnA : radioBtnB;
    q_num++;
    selectRadio(seleted.value, q_num);
    if (q_num < 13) {
      clearContent();
      setContent(q_num);
    } else {
      // question 숨기고 outro 보이기
      questionBox.classList.add('hide');
      outroBox.classList.remove('hide');
    }
  } else {
    alert('선택된게 없어요😓');
  }
});

// 질문지 바꾸기
const clearContent = () => {
  question.textContent = '';
  answerA.textContent = '';
  answerB.textContent = '';

  radioBtnA.checked = false;
  radioBtnB.checked = false;
};
const setContent = (num) => {
  question.innerHTML = qna_data['q' + num].q;
  answerA.textContent = qna_data['q' + num].a1.a;
  answerB.textContent = qna_data['q' + num].a2.a;
};

// 결과내기
const result = [0, 0, 0, 0]; // IE, NS, TF, JP
const submitBtn = document.querySelector('.submit_btn');

const selectRadio = (value, num) => {
  let res = qna_data['q' + (num - 1)][value].result;

  switch (res) {
    case 'I':
      result[0] -= 1;
      break;
    case 'E':
      result[0] += 1;
      break;
    case 'N':
      result[1] -= 1;
      break;
    case 'S':
      result[1] += 1;
      break;
    case 'T':
      result[2] -= 1;
      break;
    case 'F':
      result[2] += 1;
      break;
    case 'J':
      result[3] -= 1;
      break;
    case 'P':
      result[3] += 1;
      break;
  }
};

// Result 데이터 가져오기
const result_data = await fetch('./data/result.json')
  .then((res) => res.json())
  .then((data) => data);

// mbti 추출
const setMbti = () => {
  const mbti = result
    .map((res, idx) => {
      if (res < 0) {
        switch (idx) {
          case 0:
            return 'I';
          case 1:
            return 'N';
          case 2:
            return 'T';
          case 3:
            return 'J';
        }
      } else {
        switch (idx) {
          case 0:
            return 'E';
          case 1:
            return 'S';
          case 2:
            return 'F';
          case 3:
            return 'P';
        }
      }
    })
    .join('');

  return mbti;
};

// 결과 보이기
submitBtn.addEventListener('click', () => {
  const mbti = setMbti();
  outroBox.classList.add('hide');
  resultBox.classList.remove('hide');
  setResult(mbti);
});

// 결과창 꾸미기
const movie = document.querySelector('.movie');
const name = document.querySelector('.name');
const character = document.querySelector('.character');
const img = document.querySelector('.img');

const setResult = (mbti) => {
  movie.textContent = result_data[mbti].movie;
  name.textContent = result_data[mbti].name;
  character.textContent = result_data[mbti].description;
  img.setAttribute('src', result_data[mbti].src);
};

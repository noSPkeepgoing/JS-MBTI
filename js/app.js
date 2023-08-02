import { qna_data } from './data.js';
import { selectRadio, setMbti } from './calculate.js';

const startBtn = document.querySelector('.start_btn');
const introBox = document.querySelector('.intro');
const questionBox = document.querySelector('.qna');
const outroBox = document.querySelector('.outro');

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
  radioBtnA.checked = false;
  radioBtnB.checked = false;
};

const setContent = (num) => {
  question.innerHTML = qna_data['q' + num].q;
  answerA.textContent = qna_data['q' + num].a1.a;
  answerB.textContent = qna_data['q' + num].a2.a;
};

// 결과 세팅
const submitBtn = document.querySelector('.submit_btn');

submitBtn.addEventListener('click', () => {
  const mbti = setMbti();
  localStorage.setItem('mbti', mbti);
});

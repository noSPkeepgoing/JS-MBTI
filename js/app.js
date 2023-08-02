import { qna_data } from './data.js';
import { selectRadio, setMbti } from './calculate.js';

const startBtn = document.querySelector('.start_btn');
const introBox = document.querySelector('.intro');
const questionBox = document.querySelector('.qna');
const outroBox = document.querySelector('.outro');

const question = document.querySelector('.question');
const answerA = document.querySelector('label[for="answer_a"]');
const answerB = document.querySelector('label[for="answer_b"]');
const continueBtn = document.querySelector('.continue_btn');

const radioBtnA = document.querySelector('#answer_a');
const radioBtnB = document.querySelector('#answer_b');

let q_num = 1;
const Q_MAX_NUM = 13;

// intro 숨기고 question 보이기, 첫질문 세팅
startBtn.addEventListener('click', () => {
  toggleHide(introBox);
  toggleHide(questionBox);
  setContent(q_num);
});

// 다음 질문지 세팅
continueBtn.addEventListener('click', () => {
  if (radioBtnA.checked || radioBtnB.checked) {
    let seleted = radioBtnA.checked ? radioBtnA : radioBtnB;
    q_num++;
    selectRadio(seleted.value, q_num);
    if (q_num < Q_MAX_NUM) {
      clearContent();
      setContent(q_num);
    } else {
      // question 숨기고 outro 보이기
      toggleHide(questionBox);
      toggleHide(outroBox);
    }
  } else {
    alert('선택된게 없어요😓');
  }
});

// container 보이기, 숨기기
const toggleHide = (container) => {
  container.classList.toggle('hide');
};

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

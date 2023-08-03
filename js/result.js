import { result_data } from './data.js';

// 결과창 꾸미기
const movie = document.querySelector('.movie');
const name = document.querySelector('.name');
const character = document.querySelector('.character');
const img = document.querySelector('.img');

const mbti = localStorage.getItem('mbti');

const setResult = (mbti) => {
  movie.textContent = result_data[mbti].movie;
  name.textContent = result_data[mbti].name;
  character.innerHTML = result_data[mbti].description;
  img.setAttribute('src', result_data[mbti].src);
};

setResult(mbti);

// 공유하기

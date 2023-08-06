import { result_data } from './data.js';

// 결과창 꾸미기
const movie = document.querySelector('.movie');
const name = document.querySelector('.name');
const character = document.querySelector('.character');
const img = document.querySelector('.img');

const mbti = location.search.split('=')[1];

const setResult = (mbti) => {
  movie.textContent = result_data[mbti].movie;
  name.textContent = result_data[mbti].name;
  character.innerHTML = result_data[mbti].description;
  img.setAttribute('src', result_data[mbti].src);
};

setResult(mbti);

// 공유하기
const shareBtn = document.querySelector('.share_btn');

shareBtn.addEventListener('click', async () => {
  await navigator.clipboard.writeText(location.href);
  alert('클립보드에 링크가 저장되었어요!');
});

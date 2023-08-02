import { qna_data } from './data.js';

// 결과내기
const result = [0, 0, 0, 0]; // IE, NS, TF, JP

export const selectRadio = (value, num) => {
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

// mbti 추출
export const setMbti = () => {
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

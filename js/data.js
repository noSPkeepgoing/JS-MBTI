// QnA 데이터 가져오기
export const qna_data = await fetch('./data/qna.json')
  .then((res) => res.json())
  .then((data) => data);

// Result 데이터 가져오기
export const result_data = await fetch('./data/result.json')
  .then((res) => res.json())
  .then((data) => data);

//

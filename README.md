# Matching Charcter in Ghibli 🍿
스터디 스프린트 토이 프로젝트!

## ✍️ 기획

- Vanilla JS를 이용한 MBTI기반 심리테스트 페이지를 만들기
- fetch API의 사용
- query string을 이용한 페이지간 통신



## 🔗 완성 링크

[내가 지브리 등장인물이라면?](https://nospkeepgoing.github.io/JS-MBTI/)

## 👩‍💻 프로젝트 설명

### ⚀ index.html

- INTRO

  - `start_btn` 을 클릭하면, `INTRO` 창을 숨기고 `QUESTION` 창을 보인다.
  - 첫 질문지를 세팅한다.

- QUESTION

  - `continue_btn` 을 클릭하면 현재 선택한 `answer` 값을 저장한다.
  - 선택된 답안이 없다면 질문이 넘어가지 않고 `alert`을 띄운다.
  - `fetch API` 로 가져온 `json` 데이터를 읽어와 변수 `q_num` 을 이용해 새로운 질문과 답변을 세팅한다.
  - 배열 `const result = [0, 0, 0, 0]` 을 이용하여 각 타입(EI/SN/TF/JP)를 판단한다.
    - `result[0]` 의 값이 양수의 값이라면 E, 음수라면 I
    - `result[1]` 의 값이 양수의 값이라면 S, 음수라면 N
    - `result[2]` 의 값이 양수의 값이라면 F, 음수라면 T
    - `result[3]` 의 값이 양수의 값이라면 P, 음수라면 J
  - `q_num` 의 값이 `Q_MAX_NUM` 의 값과 같아진다면 `QUESTION` 창을 숨기고 `OUTRO`창을 보여준다.

- OUTRO

  - `submit_btn` 을 클릭하면 `result` 를 기반으로 사용자의 MBTI를 추정한다.
  - MBTI를 `query string`을 이용해 `url`에 담아 `result.html` 파일로 이동한다.

### ⚁ result.html

- RESULT
  - `location.search.split('=')[1]` 을 이용해 결과 MBTI를 추출한다.
  - `fetch API` 로 가져온 `json` 데이터를 읽어와 해당 MBTI에 맞는 결과를 세팅한다.
  - `retry_btn` 을 클릭하면 `index.html` 로 이동한다.
  - `share_btn` 을 클릭하면 `alert` 창을 띄우며 클립보드에 해당 `url` 을 저장한다.



## 👋 기술 스택

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">


## 👏 마무리

### ⚀ 추후 구현하고 싶은 기능

- ~~반응형으로 구현~~
- 질문지 뒤로가기 버튼 추가
- ~~다시하기 버튼 추가~~
- ~~카카오톡 등 SNS 공유하기 버튼 추가~~ → url 공유로 변경

### ⚁ 기록

- 🗓️ 23/07/24 ~ 🗓️ 23/07/27 - 1차 완  
  SPA로 구현하고 싶어 `display:none` 속성을 이용해 모든 컨테이너를 `index.html` 파일에 넣어줬었는데, 컨테이너들의 변화가 깔끔해보이긴 했으나, 너무 단조롭다는 느낌도 들었다.
  
- 🗓️ 23/08/03 ~ 🗓️ 23/08/04 - 1차 리팩토링  
  다시하기 기능을 추가하면 좋을 거 같아 `result.html` 을 만들어 결과 컨테이너를 분리해 주었다.
  컨테이너의 클래스를 추가하고 제거하는 기능이 반복되길래 `toggelHide` 함수를 만들어 사용해주었다.
  결과페이지를 따로 만들어주면서 js파일도 기능별로 구분해 주었다. 처음엔 `app.js` 와 `result.js` 두가지만 이용하려했지만 원하는 것만 `export` 할 수 없다는 걸 깨닫고 `app.js` , `result.js` , `calculate.js` , `data.js` 네개의 파일로 구분해주었다.
  `index.html` 에서 계산한 mbti를 `result.html` 파일에서 사용하기 위해 `localStorage` 를 이용해서 데이터를 `set`하고 `get`하였다.
  
- 🗓️ 23/08/05 ~ 🗓️ 23/08/06 - 2차 리팩토링  
  `app.js` → `index.js` 파일명을 좀 더 직관적으로 보이게 하고싶어 파일명을 변경했다.
  다른 사용자에게 내 결과화면을 공유하게 하고 싶어 해당 `url` 복사 버튼을 만들었는데 데이터를 `localStorage` 에서 읽어오다보니 문제가 생겼다. 해당 문제를 해결하기 위해서 `location` 을 이용해서 mbti 데이터를 `url` 에 담아 보내고, 결과 세팅도 `url` 에서 읽어와서 할 수 있도록 하였다.

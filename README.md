# 나와 어울리는 지브리 캐릭터 고르기 ✨

## ✍️ 기획

- Vanilla JS를 이용한 MBTI기반 심리테스트 페이지를 만들기
- 좀 더 나은 UI/UX를 위해 SPA로 구현
- fetch API를 사용하여 데이터를 비동기적으로 다루는 연습을 한다.

## 🔗 완성 링크 (~23/07/27)

**[https://matchingcharacteringhibli.netlify.app](https://matchingcharacteringhibli.netlify.app/)**

## 👩‍💻 구현 기능

- INTRO

  - START 버튼을 클릭하면 인트로 창이 사라지고 질문지 창이 나타난다.

- QUESTION

  - CONTINUE 버튼을 클릭하면 다음 질문지로 넘어간다.
  - 선택된 답안이 없다면 화면이 넘어가지 않고 alert를 띄운다.
  - json형태의 데이터를 읽어와 해당 index의 질문과 답변을 보인다.
  - 배열을 이용하여 각 타입(EI/SN/TF/JP)를 판단한다.

    ```jsx
    const result = [0, 0, 0, 0]; // IE, NS, TF, JP
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
    ```

  - 질문지가 마지막 index라면 질문지 창을 숨기고 아웃트로 창을 보여준다.

- OUTRO

  - SUBMIT 버튼을 클릭하면 사용자의 답변을 기반으로 MBTI를 추정한다.
  - OUTRO

- RESULT

  - 추정한 MBTI를 기반으로 알맞는 영화 제목, 인물 이름, 인물 사진, 인물 설명을 보인다.

## 👏 추후 수정하고 싶은 기능

- 반응형으로 구현
- 질문지 뒤로가기 버튼 추가
- 다시하기 버튼 추가
- 카카오톡 등 SNS 공유하기 버튼 추가
- 🍝

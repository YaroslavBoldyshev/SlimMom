import styled from 'styled-components';

export const DiaryAddStyled = styled.div`
  .DiaryAddStyled-wrapper {
    margin-top: 60px;
    margin-bottom: 60px;
    margin-right: 0px;
    display: flex;
    justify-content: center;
    gap: 40px;
    align-items: flex-end;
    @media screen and (min-width: 767px) {
    }
    @media screen and (min-width: 1280px) {
      gap: 40px;
      justify-content: flex-start;
    }

    &__product {
      margin-top: 16px;
      width: 240px;
      height: 50%;
      font: inherit;
      border: none;
      border-bottom: 1px solid #e0e0e0;
      padding: 10px;
      @media screen and (min-width: 768px) {
        width: 240px;
      }
    }

    &__grams {
      padding: 10px;
      margin-top: 16px;
      height: 50%;
      color: #9b9faa;
      font: inherit;
      font-size: 14px;
      border: none;
      cursor: text;
      outline: 0;

      border-bottom: 1px solid #e0e0e0;
      text-align: right;
      width: 107px;
    }

    &__img {
      height: 30%;
    }

    &__btn {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      width: auto;
      height: auto;
      padding: 10px;
      border-radius: 50%;
      background-color: #fc842d;
      box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
    }
  }
`;

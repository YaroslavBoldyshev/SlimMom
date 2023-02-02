import styled from 'styled-components';

export const DiaryAddStyled = styled.div`
.DiaryAddStyled-wrapper {
  margin-bottom: 60px;
  margin-right: 0px;
  display: flex;
  @media screen and (max-width: 767px) {
    margin-top: 60px;
    display: flex;
   }

  &__product {
    width: 240px;
    font: inherit;
    border: none;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 20px;
    margin-right: 50px;

    @media screen and (min-width: 768px) {
      width: 240px;
    }
  }

  &__grams {
    margin-top: 16px;
    flex-wrap: wrap;
    height: 50%;
    width: 300px;
    min-height: 26px;
    color: #9b9faa;
    font: inherit;
    font-size: 14px;
    border: none;
    cursor: text;
    outline: 0;

    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 20px;
    text-align: right;
    width: 107px;
    margin-right: 60px;
  }

  &__img {
    color: #ffffff;
    width: 14px;
    height: 14px;
  }

  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: auto;
    height: auto;
    padding: 20px;
    border-radius: 50%;
    background-color: #fc842d;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  }
}`;

import styled from "styled-components";

export const DiaryProductsListStyled = styled.div`

  .DiaryProductsListStyled-list{
    position: relative;
    max-height: 240px;
    overflow-y: scroll;
    padding-right: 0px;
    width: 1000px;

    @media screen and (max-width: 480px) {
      .list {
        padding-right: 0px;
      }
    }
    &__item{
      width: 600px
    }

    &__gradient {
      z-index: 100;
      width: 100px;
      height: 100px;
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 255, 0) 0,
        #f11 150%
      );
    }
  }
`;

 // &__item{
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  // }
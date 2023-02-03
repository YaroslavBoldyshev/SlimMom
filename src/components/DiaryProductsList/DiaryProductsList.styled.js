import styled from 'styled-components';

export const DiaryProductsListStyled = styled.div`

  .DiaryProductsListStyled-list {
    position: relative;
    height: 225px;
    overflow: hidden;
    overflow-y: scroll;
    padding-right: 0px;
    width: 100%;

    @media screen and (min-width: 767px) {
      .list {
        padding-right: 0px;
      }
      height: 250px;

    }
    &__item {
      width: auto;
    }
    @media screen and (min-width: 1280px) {
      height: 300px;
    }
  }
`;

// &__item{
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// }

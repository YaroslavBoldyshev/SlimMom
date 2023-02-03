import styled from 'styled-components';

export const DiaryProductsListStyled = styled.div`
  .DiaryProductsListStyled-list {
    position: relative;
    height: 225px;
    overflow: hidden;
    overflow-y: scroll;
    padding-right: 0px;
    width: 100%;

    @media screen and (max-width: 480px) {
      .list {
        padding-right: 0px;
      }
    }
    &__item {
      width: auto;
    }
  }
`;

// &__item{
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// }

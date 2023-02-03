import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../../../icons/close.svg";


export const IconClose = styled(CloseIcon)`
fill: black;
transition: var(--transition-dur-and-func);
:hover{
  fill: var(--secondary-accent-color);
}
`
export const DiaryProductsListItemStyled = styled.div`
  .DiaryProductsListItemStyled {
    width: 605px;
    display: block;

    &__wrapper {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      min-width: 280px;
      align-items: stretch;
      margin-bottom: 15px;
      gap: 8px;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.04em;
      color: #212121;
      font-weight: normal;
    }

    &__meal {
      width: 130px;
      padding-bottom: 8px;
      border-bottom: 1px solid #e0e0e0;
      overflow: hidden;
    }

    &__grams {
      width: 49px;
      padding-bottom: 20px;
      border-bottom: 1px solid #e0e0e0;
      align-items: flex-end;
      display: flex;
      justify-content: center;
    }

    &__calorie {
      width: 78px;
      display: flex;
      padding-bottom: 20px;
      border-bottom: 1px solid #e0e0e0;
      text-align: right;
      align-items: flex-end;
      justify-content: center;
    }

    &__btn {
      background-color: transparent;
      border: 0;
      outline: none;
      padding: 0;

      cursor: pointer;
    }
  }
`;

// meal
// overflow: hidden;
// text-overflow: ellipsis;
// white-space: nowrap;

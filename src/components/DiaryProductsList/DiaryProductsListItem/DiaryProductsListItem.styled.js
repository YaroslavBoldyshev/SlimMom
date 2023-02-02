import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../../../icons/close.svg";

export const IconClose = styled(CloseIcon)`
fill: black;
:hover{
  fill: var(--secondary-accent-color);
}
`
export const DiaryProductsListItemStyled = styled.div`
.DiaryProductsListItemStyled{
  width: 605px;
  display: block;

&__wrapper{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 600px;
  align-items: center;
  margin-bottom: 15px;
  font-family: Verdana, sans-serif;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #212121;
  font-weight: normal;
}

&__meal{
  width: 240px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
}

&__grams {
  width: 106px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
  text-align: right;
}

&__calorie {
  width: 106px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
  text-align: right;
}

&__btn {
  background-color: transparent;
  border: 0;
  outline: none;
  padding: 0;

  margin-bottom: 16px;
  cursor: pointer;
}

@media (max-width: 380px) {
  &__calorie span {
    font-size: 10px;
    line-height: 12px;
  }

  &__calorie {
    width: 23%;
  }

  &__grams {
    width: 22%;
  }

  &__btn {
    margin: 0;
  }

  &__name,
  &__calorie,
  &__grams {
    padding-bottom: 5px;
  }

  &__wrapper{
    margin-bottom: 22px;
  }
}
}`



// meal
// overflow: hidden;
// text-overflow: ellipsis;
// white-space: nowrap;
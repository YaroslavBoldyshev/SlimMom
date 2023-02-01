import { DiaryProductsListItemStyled } from "./DiaryProductsListItem.styled";
import closeSvg from '../../../icons/close.svg';

export const DiaryProductsListItem = ({ name, weight, kcal }) => {
  return (
    <DiaryProductsListItemStyled>
      <div className="DiaryProductsListItemStyled__wrapper">
        <p className="DiaryProductsListItemStyled__meal" key={1}>{name}</p>
        <p className="DiaryProductsListItemStyled__grams" key={2}>{weight} g</p>
        <p className="DiaryProductsListItemStyled__calorie" key={3}>{kcal}<span> kcal</span></p>
        <button className="DiaryProductsListItemStyled__btn"
          type="button"
          // onClick={() => dispatch(deleteItem(id))}
        >
          <img src={closeSvg} alt="close" width="12" height="12" />
        </button>
      </div>
      </DiaryProductsListItemStyled>
  );
};

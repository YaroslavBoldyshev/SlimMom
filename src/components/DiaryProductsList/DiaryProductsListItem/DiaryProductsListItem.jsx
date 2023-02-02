import { useDispatch, useSelector } from "react-redux";
import { deleteDayProductThunk } from "redux/day/day-operations";
import { selectEatenId } from 'redux/day/day-selectors';
import { selectEatenProducts } from 'redux/day/day-selectors';
import { IconClose } from "./DiaryProductsListItem.styled";
import { DiaryProductsListItemStyled } from "./DiaryProductsListItem.styled";

export const DiaryProductsListItem = ({ name, weight, kcal, id }) => {
  const dispatch = useDispatch();
  const mayDayId = useSelector(selectEatenId);
  const dayMeal = useSelector(selectEatenProducts);
  const localDayMeal = JSON.parse(localStorage.getItem('prodList'));
  
  const handleDelete = id => {
    const dayData = {
      dayId: mayDayId,
      eatenProductId: id,
    };
    const arr1 = [...localDayMeal.eatenProducts]
    const arr2 = [...dayMeal]


    if (arr1.length === arr2.length) {
      dispatch(deleteDayProductThunk(dayData));
    } else {
      console.log('/');
    }
  }


  return (
   <DiaryProductsListItemStyled>
    <div className="DiaryProductsListItemStyled__wrapper">
      <p className="DiaryProductsListItemStyled__meal" key={1}>{name}</p>
      <p className="DiaryProductsListItemStyled__grams" key={2}>{weight}</p>
      <p className="DiaryProductsListItemStyled__calorie" key={3}>{kcal}</p>
      <button className="DiaryProductsListItemStyled__btn"
        type="button"
        onClick={() => handleDelete(id)}
      >
        <IconClose/>
      </button>
    </div>
   </DiaryProductsListItemStyled>
  );
};

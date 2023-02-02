import { useDispatch, useSelector } from "react-redux";

import { deleteDayProductThunk } from "redux/day/day-operations";
import { selectEatenId } from 'redux/day/day-selectors';
import { selectEatenProducts } from 'redux/day/day-selectors';

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
    <div>
      <p key={1}>{name}</p>
      <p key={2}>{weight}</p>
      <p key={3}>{kcal}</p>
      <button
        type="button"
        onClick={() => handleDelete(id)}
      >
        <img src="./" alt="close" width="12" height="12" />
      </button>
    </div>
  );
};

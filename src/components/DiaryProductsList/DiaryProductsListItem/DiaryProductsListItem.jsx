import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteDayProductThunk } from "redux/day/day-operations";
import { selectEatenId } from 'redux/day/day-selectors';

export const DiaryProductsListItem = ({ name, weight, kcal, id, dayId }) => {
  const dispatch = useDispatch();
  const mayDayId = useSelector(selectEatenId);
  
  const dayData = {
    dayId: mayDayId,
    eatenProductId: id,
  };

  const handleDelete = e => {
      dispatch(deleteDayProductThunk(dayData));
  }

  return (
    <div>
      <p key={1}>{name}</p>
      <p key={2}>{weight}</p>
      <p key={3}>{kcal}</p>
      <button
        type="button"
        onClick={handleDelete}
      >
        <img src="./" alt="close" width="12" height="12" />
      </button>
    </div>
  );
};

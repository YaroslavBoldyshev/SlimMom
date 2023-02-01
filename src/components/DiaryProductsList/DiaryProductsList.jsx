import { DiaryProductsListItem } from "./DiaryProductsListItem/DiaryProductsListItem";
import { selectEatenProducts } from "redux/day/day-selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDayInfoThunk } from "redux/day/day-operations";
import { selectIsLoading } from "redux/day/day-selectors";

export const DiaryProductsList = ({currentDate}) => {
  const dayMeal = useSelector(selectEatenProducts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDayInfoThunk({ date: currentDate }));
  }, [currentDate]);

  return (
    <ul>
      {!isLoading && (
        <>
          {Array.isArray(dayMeal) &&
            dayMeal.map(({ id, title, weight, kcal }) => {
              return (
                <li key={id}>
                  <DiaryProductsListItem
                    name={title}
                    weight={weight}
                    kcal={Math.round(kcal)}
                    id={id}
                  />
                </li>
              );
            })}
        </>
      )}
    </ul>
  );
};

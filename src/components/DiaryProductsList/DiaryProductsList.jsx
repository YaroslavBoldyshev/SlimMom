import { DiaryProductsListItem } from "./DiaryProductsListItem/DiaryProductsListItem";
import { selectEatenProducts } from "redux/day/day-selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDayInfoThunk } from "redux/day/day-operations";

export const DiaryProductsList = ({currentDate}) => {
  const dayMeal = useSelector(selectEatenProducts);
  const dispatch = useDispatch()

  const meal = [
    {
      title: 'Меланж яичный',
      weight: 100,
      kcal: 157,
      id: '1',
    },
    {
      title: 'Меланж яичный',
      weight: 100,
      kcal: 157,
      id: '2',
    },
    {
      title: 'Меланж яичный',
      weight: 100,
      kcal: 157,
      id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    },
    {
      title: 'Меланж яичный',
      weight: 100,
      kcal: 157,
      id: '3',
    },
  ];

  useEffect(() => {
    dispatch(getDayInfoThunk({date: currentDate}));
  },[dispatch])

  return (
    <ul>
      {Array.isArray(dayMeal) && dayMeal.map(({id, title, weight, kcal}) => {
        return (
          <li key={id}>
            <DiaryProductsListItem
              name={title}
              weight={weight}
              kcal={kcal}
            />
          </li>
        )})}
    </ul>
  );
};

import { DiaryProductsListItem } from './DiaryProductsListItem/DiaryProductsListItem';
import {
  selectDeletedSummary,
  selectEatenProducts,
  selectIsLoading,
  selectAddedProduct,
} from 'redux/day/day-selectors';
import { DiaryProductsListStyled } from './DiaryProductsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDayInfoThunk } from 'redux/day/day-operations';

export const DiaryProductsList = ({ currentDate }) => {
  const dayMeal = useSelector(selectEatenProducts);
  const deletedProduct = useSelector(selectDeletedSummary);
  const addedProduct = useSelector(selectAddedProduct);

  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDayInfoThunk({ date: currentDate }));
  }, [currentDate, deletedProduct, addedProduct, dispatch]);

  return (
    <DiaryProductsListStyled>
      <ul className="DiaryProductsListStyled-list">
        {!isLoading && (
          <>
            {Array.isArray(dayMeal) &&
              dayMeal.map(({ id, title, weight, kcal }) => {
                return (
                  <li className="DiaryProductsListStyled-list__item" key={id}>
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
    </DiaryProductsListStyled>
  );
};

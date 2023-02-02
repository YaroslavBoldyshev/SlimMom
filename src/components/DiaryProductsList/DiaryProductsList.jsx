import { DiaryProductsListItem } from "./DiaryProductsListItem/DiaryProductsListItem";

import { DiaryProductsListStyled } from "./DiaryProductsList.styled";

import { selectEatenProducts } from "redux/day/day-selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDayInfoThunk } from "redux/day/day-operations";

export const DiaryProductsList = ({currentDate}) => {
  const dayMeal = useSelector(selectEatenProducts);
  const dispatch = useDispatch()


  const meal = [
    {
      "title": "Паштет Grand-Mere печеночный с зеленью",
      "weight": 800,
      "kcal": 2584,
      "id": "237ebda3-57df-437d-ab04-285aaddf2d9c"
    },
    {
      "title": "Индейка Индилайт шницель аппетитный",
      "weight": 150,
      "kcal": 435,
      "id": "40c70afd-a969-4c91-9957-cf1a008b1b1e"
    },
    {
      "title": "Индейка Индилайт шницель аппетитный",
      "weight": 150,
      "kcal": 435,
      "id": "aa550952-99aa-4724-b3bd-3d7e631c24bd"
    },
    {
      "title": "Индейка Индилайт шницель аппетитный",
      "weight": 150,
      "kcal": 435,
      "id": "8e7ef9cf-b124-474d-bc96-15773be53955"
    },
    {
      "title": "Индейка Индилайт шницель аппетитный",
      "weight": 150,
      "kcal": 435,
      "id": "ad245cb7-65c8-48ef-aad4-fa68d9ad1ea5"
    },
    {
      "title": "Индейка Индилайт шницель аппетитный",
      "weight": 150,
      "kcal": 435,
      "id": "93dfd06b-d4b8-480f-babf-d704f77606e2"
    },
    {
      "title": "Говядина мраморная",
      "weight": 150,
      "kcal": 255,
      "id": "43077abe-ab17-4d01-8dce-c2ba8214bfc5"
    },
    {
      "title": "Говядина мраморная",
      "weight": 150,
      "kcal": 255,
      "id": "c486fd49-c46f-44ec-a351-041affd6f91f"
    },
    {
      "title": "Говяжий фарш Самсон 7.5%",
      "weight": 700,
      "kcal": 972.9999999999999,
      "id": "d4a4da18-af11-46c9-8337-2e37cdab50c1"
    },
    {
      "title": "Говяжий фарш Самсон 7.5%",
      "weight": 700,
      "kcal": 972.9999999999999,
      "id": "d0f87839-259d-4d72-b279-217bf80e5598"
    }
  ]

  useEffect(() => {
    dispatch(getDayInfoThunk({date: currentDate}));
  },[])

  return (
    <DiaryProductsListStyled>
    <ul className="DiaryProductsListStyled-list">
      {meal.map(({id, title, weight, kcal}) => 
        <li className="DiaryProductsListStyled-list__item" key={id}>
          <DiaryProductsListItem
            name={title}
            weight={weight}
            kcal={kcal}
          />
        </li>
      )}

    </ul>
    </DiaryProductsListStyled>
  );
};

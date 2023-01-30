import { DiaryProductsListItem } from "./DiaryProductsListItem/DiaryProductsListItem";

export const DiaryProductsList = () => {
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
  
  console.log(meal);

  return (
    <ul>
      {meal.map(({id, title, weight, kcal}) => 
        <li key={id}>
          <DiaryProductsListItem
            name={title}
            weight={weight}
            kcal={kcal}
          />
        </li>
      )}
    </ul>
  );
};

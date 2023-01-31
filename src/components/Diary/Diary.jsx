import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';

export const Diary = () => {
  return (
    <div>
      <input type="date" />
      <DiaryAddProductForm />
      <DiaryProductsList />
    </div>
  );
};

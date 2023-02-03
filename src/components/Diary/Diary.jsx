import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';

import { selectDayInfo } from 'redux/day/day-selectors';
import { useSelector } from 'react-redux';

export const Diary = () => {
  return (
    <div>
      <DiaryAddProductForm />
    </div>
  );
};

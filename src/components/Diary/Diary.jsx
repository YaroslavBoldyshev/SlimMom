import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';

import { selectDayInfo } from 'redux/day/day-selectors';
import { useSelector } from 'react-redux';

export const Diary = () => {
  const myInfo = useSelector(selectDayInfo);
  return (
    <div>
      <DiaryAddProductForm />
    </div>
  );
};

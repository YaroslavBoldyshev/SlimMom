import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';

import { useSelector } from 'react-redux';
import { selectDayInfo } from 'redux/day/day-selectors';

export default function Calculator() {
  const myInfo = useSelector(selectDayInfo);
  return (
    <>
      <DailyCaloriesForm />
    </>
  );
}

import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import { Div } from './DiaryStyles';
import { selectDayInfo } from 'redux/day/day-selectors';
import { useSelector } from 'react-redux';

export const Diary = () => {
  const myInfo = useSelector(selectDayInfo);
  return (
    <Div>
      <DiaryAddProductForm />
      <RightSideBar
        date={myInfo.date}
        left={myInfo.daySummary.kcalLeft}
        consumed={myInfo.daySummary.kcalConsumed}
        rate={myInfo.daySummary.dailyRate}
        normal={myInfo.daySummary.percentsOfDailyRate}
        // food={ }
      />
    </Div>
  );
};

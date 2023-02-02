import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import { useSelector } from 'react-redux';
import { selectDayInfo } from 'redux/day/day-selectors';

export default function Calculator() {
  const myInfo = useSelector(selectDayInfo);

  return (
    <>
      <DailyCaloriesForm />
      <RightSideBar
        date={myInfo.date}
        left={myInfo.daySummary.kcalLeft}
        consumed={myInfo.daySummary.kcalConsumed}
        rate={myInfo.daySummary.dailyRate}
        normal={myInfo.daySummary.percentsOfDailyRate}
        // food={ }
      />
      ;
    </>
  );
}

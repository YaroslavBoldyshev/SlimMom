import { Outlet } from 'react-router-dom';

import Container from 'components/Container/Container';
import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import {
  ChildContainer,
  LayoutContainer,
  OutletContainer,
  RSBContainer,
} from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';
import { UserInfo } from './UserInfo/UserInfo';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { getSummaries } from 'redux/dailyRate/dailyRate-selectors';
import { useEffect, useState } from 'react';

export const SharedLayout = () => {
  const [myDate, setMyDate] = useState('')
  useEffect(() => {
    setMyDate(localStorage.getItem('date')
      ? localStorage.getItem('date')
      : new Date().toJSON().slice(0, 10))
  }, []);
  
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dayInfo = useSelector(getSummaries);
  const myDay = dayInfo.filter(element => element.date === myDate);
  console.log(myDay);
  
  return (
    <>
      <LayoutContainer>
        <Logo />
        <Navigation />
      </LayoutContainer>

      <ChildContainer>
        <OutletContainer>
          <Outlet></Outlet>
        </OutletContainer>
        {isLoggedIn && (
          <RSBContainer>
            {myDay.length !== 0 && <RightSideBar
              date={myDay[0].date}
              left={myDay[0].kcalLeft}
              consumed={Math.round(myDay[0].kcalConsumed)}
              rate={myDay[0].dailyRate}
              normal={Math.round(myDay[0].percentsOfDailyRate)}
              food={myDay[0].notAllowedProducts}
            />}
          </RSBContainer>
        )}
      </ChildContainer>
    </>
  );
};

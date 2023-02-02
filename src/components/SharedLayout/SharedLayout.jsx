import { Outlet } from 'react-router-dom';

import Container from 'components/Container/Container';
import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import { LayoutContainer } from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';
import { UserInfo } from './UserInfo/UserInfo';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)

  return (
    <>
      <LayoutContainer>
        <Logo />
        <Navigation />
      </LayoutContainer>
      {/* <Container> */}
      <div
        style={{
          display: 'flex',
          // flexDirection: 'row',
        }}
      >
        <div
          style={{
            width: '60%',
          }}
        >
          {/* <Container> */}
            <Outlet></Outlet>
          {/* </Container> */}
        </div>
        {isLoggedIn && (
          <div
            style={{
              width: '40%',
            }}
          >
            {/* <Container> */}
              <RightSideBar />
            {/* </Container> */}
          </div>
        )}
      </div>
      {/* </Container> */}
    </>
  );
};

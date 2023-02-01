import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Container from 'components/Container/Container';
import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import { LayoutContainer } from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';
import { UserInfo } from './UserInfo/UserInfo';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';

export const SharedLayout = () => {
  return (
    <>
      <LayoutContainer>
        <Logo />
        <Navigation />
        <UserInfo />
      </LayoutContainer>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet>
            <div>
              <RightSideBar />
            </div>
          </Outlet>
        </Suspense>
      </Container>
    </>
  );
};

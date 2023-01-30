import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Container from 'components/Container/Container';
import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import { LayoutContainer } from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';
export const SharedLayout = () => {
  return (
    <>
      <LayoutContainer>
        <Logo />
        <Navigation />
      </LayoutContainer>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

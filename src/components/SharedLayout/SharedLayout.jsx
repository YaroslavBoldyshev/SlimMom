import { CircleLoader } from 'react-spinners';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Container from 'components/Container/Container';
import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import { LayoutContainer } from './SharedLayout.styled';
export const SharedLayout = () => {
  return (
    <>
      <LayoutContainer>
        <Logo />
        <Navigation />
      </LayoutContainer>
      <Container>
        {' '}
        <Suspense
          fallback={
            //Тестовий спінер, можна замінити на будь-який
            <CircleLoader
              color="#4879f3"
              cssOverride={{
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
          }
        >
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

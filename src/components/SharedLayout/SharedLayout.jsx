import { CircleLoader } from 'react-spinners';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import Container from 'components/Container/Container';
import { Logo } from './Logo/Logo';
export const SharedLayout = () => {
  return (
    <>
      <Container>
        <Logo />
        <Navigation />
      </Container>
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
    </>
  );
};

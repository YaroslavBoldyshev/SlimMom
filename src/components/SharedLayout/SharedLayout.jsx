import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import { LayoutContainer } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <LayoutContainer>
      <Logo />
      <Navigation />
    </LayoutContainer>
  );
};

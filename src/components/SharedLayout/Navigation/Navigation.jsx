import {
  AuthLink,
  AuthNavContainer,
  MenuBtn,
  NavigationAuth,
  NavigationContainer,
  NavigationLink,
  NavigationNotAuth,
} from './Navigation.styled';

import OpenBtn from '../images/menu.svg';
import CloseBtn from '../images/closeBtn.svg';
import { useState } from 'react';
import { Menu } from './Menu/Menu';
import { UserInfo } from '../UserInfo/UserInfo';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <NavigationContainer>
      {/* <NavigationNotAuth>
        <NavigationLink> Увійти</NavigationLink>
        <NavigationLink>Реєстрація</NavigationLink>
      </NavigationNotAuth> */}
      <NavigationAuth>
        <AuthNavContainer>
          <AuthLink>Щоденник</AuthLink>
          <AuthLink>Калькулятор</AuthLink>
        </AuthNavContainer>
        <UserInfo />
        {isMenuOpen ? (
          <>
            <MenuBtn src={CloseBtn} onClick={() => setIsMenuOpen(false)} />
          </>
        ) : (
          <>
            <MenuBtn src={OpenBtn} onClick={() => setIsMenuOpen(true)} />
          </>
        )}
        {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
      </NavigationAuth>
    </NavigationContainer>
  );
};

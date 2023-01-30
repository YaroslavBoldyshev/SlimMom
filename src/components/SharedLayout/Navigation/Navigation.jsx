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
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const IsLoggedIn = useSelector(getIsLoggedIn);
  return (
    <NavigationContainer>
      {IsLoggedIn ? (
        <NavigationAuth>
          <AuthNavContainer>
            <AuthLink to="/diary">Diary</AuthLink>
            <AuthLink to="/calculator">Calculator</AuthLink>
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
      ) : (
        <NavigationNotAuth>
          <NavigationLink to="/login"> LogIn</NavigationLink>
          <NavigationLink to="/register">Registration</NavigationLink>
        </NavigationNotAuth>
      )}
    </NavigationContainer>
  );
};

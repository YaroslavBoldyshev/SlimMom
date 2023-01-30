import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 1280px) {
    border-left: 2px solid #e0e0e0;
    width: 100%;
    padding: 0px 0px 0px 20px;
  }
`;

export const NavigationNotAuth = styled.div`
  display: flex;
  gap: 14px;
  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const NavigationAuth = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  line-height: 1.2;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #9b9faa;
  cursor: pointer;
  padding-bottom: 8px;
  transition: color 300ms ease-in;
  &.active {
    color: rgba(33, 33, 33, 1);
  }
  :hover,
  :focus {
    color: rgba(252, 132, 45, 1);
  }
`;

export const AuthNavContainer = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 10px;
    align-items: flex-end;
  }
`;

export const AuthLink = styled(NavLink)`
  display: none;
  @media screen and (min-width: 1280px) {
    display: flex;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0.04em;
    text-decoration: none;
    text-transform: uppercase;
    color: #9b9faa;
    padding-bottom: 8px;
    cursor: pointer;
    transition: color 300ms ease-in;
    &.active {
      color: rgba(33, 33, 33, 1);
    }
    :hover,
    :focus {
      color: rgba(252, 132, 45, 1);
    }
  }
`;

export const MenuBtn = styled.img`
  padding: 0px 5px;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

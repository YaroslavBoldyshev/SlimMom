import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LogoContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 162px;
  }
  @media screen and (min-width: 1280px) {
    align-items: flex-end;
    width: auto;
    margin-right: 20px;
    padding-bottom: 12px;
  }
`;

export const LogoImg = styled.img`
  margin-right: 6px;
  width: 47px;
  height: 44px;
  @media screen and (min-width: 768px) {
    margin-right: 0px;
  }
  @media screen and (min-width: 1280px) {
    width: 70px;
    height: 66px;
  }
`;

export const LogoText = styled.div`
  display: flex;
  width: 105px;
  height: 16px;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-left: 10px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: -10px;
  }
`;

export const LogoSlim = styled.img``;

export const LogoMom = styled.img`
  margin-left: 4px;
`;

import styled from '@emotion/styled';
import imgTablet from '../../images/sideBarBgTablet.png';
import imgDesktop from '../../images/sideBarBgDesktop.png';

export const Bar = styled.aside`
  background-color: #f0f1f3;
  background-repeat: no-repeat;

  font-style: normal;
  letter-spacing: 0.04em;
  padding: 40px 20px 52px 20px;

  @media screen and (min-width: 768px) {
    padding: 80px 80px 80px 32px;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-start;
    gap: 80px;
    width: -webkit-fill-available;
    background-image: url(${imgTablet});
    background-size: cover;
    background-position: center;
  }
  @media screen and (min-width: 1280px) {
    width: -webkit-fill-available;
    flex-direction: column;
    gap: 60px;
    height: 100vh;
    padding: 292px 123px 166px 106px;
    background-image: url(${imgDesktop});
    background-size: contain;
    background-position: right;
  }
`;

export const H2 = styled.h2`
  font-weight: 700;
  font-size: 14px;
  color: #212121;
  padding-bottom: 20px;

  &.headerBottom {
    padding-top: 40px;
    @media screen and (min-width: 768px) {
      padding-top: 0px;
    }
  }
  @media screen and (min-width: 768px) {
    padding-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Ul = styled.ul`
  & li:last-child {
    padding-bottom: 0;
  }

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const List = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #9b9faa;
  padding-top: 0;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

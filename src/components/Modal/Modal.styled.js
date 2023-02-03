import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const OverlayWin = styled.div`
  background: rgba(33, 33, 33, 0.12);
  z-index: 1200;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
`;

export const ModWin = styled.div`
  position: absolute;
  width: 100%;
  height: 574px;
  background: #ffffff;
  box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 767px) {
    top: 120px;
    height: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 672px;
  }
`;

export const ModCon = styled.div`
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
`;

export const TopEdge = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 24px;
`;

export const BtnClose = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Title = styled.h2`
  width: 280px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.4;
  color: #212121;
  margin: 0 auto;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 450px;
    font-size: 26px;
    text-align: center;
  }
`;

export const SumKcal = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.04em;
  color: #264061;
  margin-bottom: 32px;
`;

export const ListTitle = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: #212121;
  border-top: 1px solid #e0e0e0;
  padding-top: 12px;
  width: 280px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 330px;
  }
`;

export const NumList = styled.ol`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 2;
  letter-spacing: 0.04em;
  color: #9b9faa;
  width: 375px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 410px;
  }
`;

export const RegisterLink = styled(Link)`
  width: 210px;
  height: 43px;
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  padding: 13px 24px;
  text-align: center;
  letter-spacing: 0.04em;
  margin-left: auto;
  margin-right: auto;
  display: block;
  color: #ffffff;
  text-decoration: none;
`;

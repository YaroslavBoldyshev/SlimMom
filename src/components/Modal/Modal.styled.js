import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const OverlayWin = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(33, 33, 33, 0.12);
  z-index: 1200;
`;

export const ModWin = styled.div`
  position: absolute;
  min-width: 672px;
  min-height: 574px;
  max-width: 672px;
  max-height: 574px;
  /* left: 304px;
  top: 138px; */
  background: #ffffff;
  box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);
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
`;

export const Title = styled.h2`
  width: 450px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 1.4;
  text-align: center;
  color: #212121;

  margin: 0 auto;
  margin-bottom: 20px;
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
  width: 330px;
  margin-left: auto;
  margin-right: auto;
`;

export const NumList = styled.ol`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: #9b9faa;
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

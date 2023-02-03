import styled from '@emotion/styled';

export const LayoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 0px 20px;
  border-bottom: 2px solid rgba(224, 224, 224, 1);

  @media screen and (min-width: 1280px) {
    position: fixed;
    border-bottom: none;
    align-items: flex-end;
    justify-content: flex-start;
    background-color: transparent;
    height: 170px;
    width: 100%;
  }
`;

export const ChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 92.3vh; */

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const OutletContainer = styled.div`
  padding: 80px 20px 60px 20px;

  background-color: #fff;
  @media screen and (min-width: 768px) {
    padding: 100px 20px 40px 20px;
  }
  @media screen and (min-width: 1280px) {
    padding: 293px 0px 0px 20px;
    height: 100vh;
    width: 60%;
    background-color: transparent;
  }
`;

export const RSBContainer = styled.div`
  -moz-transition: all 300ms;
  -webkit-transition: all 300ms;
  transition: all 300ms;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    width: 40%;
  }
`;

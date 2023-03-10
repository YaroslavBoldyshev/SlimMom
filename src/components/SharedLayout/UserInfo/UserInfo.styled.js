import styled from '@emotion/styled';

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 80px;
  right: 0px;
  z-index: 32;
  width: 100%;
  height: 40px;
  padding: 2px 20px;
  background-color: #eff1f3;
  @media screen and (min-width: 768px) {
    position: relative;
    background-color: transparent;
    top: auto;
  }
  @media screen and (min-width: 1280px) {
    padding: 0px 20px;
    display: flex;
    align-items: center;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const GoBackContainer = styled.div``;

export const UserName = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  padding-bottom: 8px;
  color: #212121;
  @media screen and (min-width: 1280px) {
    height: 100%;
    padding: 15px 0px 0px 0px;
  }
`;

export const UserLogOut = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #9b9faa;
  border: none;
  background-color: transparent;
  padding: 10px 0px 8px 10px;
  margin-left: 10px;
  cursor: pointer;
  border-left: 2px solid #e0e0e0;
  @media screen and (min-width: 1280px) {
    padding: 6px 0px 0px 10px;
    height: 100%;
  }
`;

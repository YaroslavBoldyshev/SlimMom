import styled from '@emotion/styled';

export const MenuContainer = styled.div`
  position: absolute;
  top: 80px;
  right: 0%;
  z-index: 33;
  width: 100%;
  background: #264061;
  margin-left: -22px;
  padding-top: 60px;
  padding-right: 4px;
  padding-left: 4px;
  padding-bottom: 356px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  padding-bottom: 752px;
  @media (min-width: 426px) and (max-width: 1023px) {
    padding-top: 100px;
    margin-left: -35px;
    padding-bottom: 752px;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const MenuLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #9b9faa;
  cursor: pointer;
  transition: color 300ms ease-in;
  &.active {
    color: rgba(255, 255, 255, 1);
  }
  :hover,
  :focus {
    color: rgba(252, 132, 45, 1);
  }
`;

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
  }
`;

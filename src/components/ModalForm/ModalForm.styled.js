import styled from '@emotion/styled';

export const ModalFormContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  z-index: 31;
  margin-top: 120px;
  padding-top: 50px;
`;

export const ProductInput = styled.input`
  width: 240px;
  font: inherit;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  color: #9b9faa;

  margin-bottom: 32px;
`;

export const WeightInput = styled.input`
  width: 240px;
  font: inherit;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  color: #9b9faa;

  margin-bottom: 60px;
`;

export const ModalBtn = styled.button`
  border: none;
  width: 176px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-color: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
`;

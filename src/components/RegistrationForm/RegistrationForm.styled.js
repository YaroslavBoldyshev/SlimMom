import styled from '@emotion/styled';

export const RegisterForm = styled.form`
  width: 400px;
`;

export const Title = styled.h4`
  margin-top: 0;
  margin-bottom: 55px;
  color: #fc842d;
  text-transform: uppercase;
`;

export const Label = styled.label`
  display: flex;
  margin-bottom: 40px;
  flex-direction: column;
  color: #9b9faa;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
`;

export const LabelPass = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  color: #9b9faa;
  letter-spacing: 0.04em;
  margin-bottom: 60px;
`;

export const Input = styled.input`
  width: 240px;
  border: none;
  font-size: 16px;
  border-bottom: 1px solid #e0e0e0;
  outline: none;
`;

export const RegButton = styled.button`
  color: white;
  width: 182px;
  padding: 13px 15px;
  font-size: 14px;
  font-weight: 700;
  border: 2px solid #fc842d;
  border-radius: 30px;
  background-color: #fc842d;
  margin-right: 32px;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

export const LogButton = styled.button`
  width: 182px;
  padding: 13px 15px;
  font-size: 14px;
  font-weight: 700;
  color: #fc842d;
  cursor: pointer;
  letter-spacing: 0.04em;
  background-color: white;
  border-radius: 30px;
  border: 2px solid #fc842d;
`;

export const ButtonsWrapper = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    margin-left: 30px;
  }
`;

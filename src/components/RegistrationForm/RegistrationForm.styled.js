import styled from 'styled-components';

export const RegisterForm = styled.form`
  width: 400px;
`;

export const Title = styled.h4`
  margin-bottom: 55px;
  color: #fc842d;
  text-transform: uppercase;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #9b9faa;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.04em;
`;

export const LabelPass = styled.label`
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
  background-color: #fc842d;
  margin-right: 32px;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
`;

export const LogButton = styled.button`
  width: 182px;
  padding: 13px 15px;
  font-size: 14px;
  font-weight: 700;
  color: #fc842d;
  letter-spacing: 0.04em;
  background-color: white;
  border-radius: 30px;
  border: 2px solid #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
`;

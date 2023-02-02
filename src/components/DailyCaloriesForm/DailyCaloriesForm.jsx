import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { unnamed, named } from 'redux/dailyRate/dailyRate-operations';
import { getDailyRate } from 'redux/dailyRate/dailyRate-selectors';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { selectUserId } from 'redux/user/user-selectors';

export const DailyCaloriesForm = () => {
  const summary = useSelector(getDailyRate);
  console.log(summary);
  const [isModalShown, setIsModalShown] = useState(false);
  const [form, setForm] = useState({
    height: '',
    age: '',
    weight: '',
    desiredWeight: '',
    bloodType: '',
  });
  // ===============
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userId = useSelector(selectUserId);

  const dispatch = useDispatch();
  const onChange = e => {
    const { value, name } = e.target;

    setForm(state => ({
      ...state,
      [name]: value,
    }));
  };

  const onSubmit = e => {
    e.preventDefault();

    const formData = {
      weight: form.weight,
      height: form.height,
      age: form.age,
      desiredWeight: form.desiredWeight,
      bloodType: form.bloodType,
    };

    if (isLoggedIn) {
      console.log(userId);
      console.log(formData);

      dispatch(named({ userId, formData }));
    } else {
      dispatch(unnamed(formData));
      setIsModalShown(prevState => !prevState);
      setForm({
        height: '',
        weight: '',
        age: '',
        desiredWeight: '',
        bloodType: '',
      });

      e.currentTarget.reset();
    }
  };

  return (
    <div>
      <Title>Calculate your daily calorie intake right now</Title>
      <form onSubmit={onSubmit}>
        <Form>
          <WrapperInputLeft>
            <InputContainer>
              <label htmlFor="">Height *</label>
              <input
                type="number"
                name="height"
                value={form.height}
                onChange={onChange}
                required
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="">Age *</label>
              <input
                type="number"
                name="age"
                value={form.age}
                onChange={onChange}
                required
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="">Current weight *</label>
              <input
                type="number"
                name="weight"
                value={form.weight}
                onChange={onChange}
                required
              />
            </InputContainer>
          </WrapperInputLeft>
          <WrapperInputRight>
            <InputContainer>
              <label htmlFor="">Desired weight *</label>
              <input
                type="number"
                name="desiredWeight"
                value={form.desiredWeight}
                onChange={onChange}
                required
              />
            </InputContainer>
            <BloodTypeInput>
              <label htmlFor="">Blood type *</label>
              <input type="text" disabled />
            </BloodTypeInput>
            <RadioButtonWrapper>
              <RadioButtonDiv>
                <input
                  type="radio"
                  value="1"
                  id="1"
                  name="bloodType"
                  onChange={onChange}
                  required
                />
                <label htmlFor="">1</label>

                <span></span>
              </RadioButtonDiv>
              <RadioButtonDiv>
                <input
                  type="radio"
                  id="2"
                  value="2"
                  name="bloodType"
                  onChange={onChange}
                  required
                />
                <label htmlFor="2">2</label>
              </RadioButtonDiv>
              <RadioButtonDiv>
                <input
                  type="radio"
                  value="3"
                  name="bloodType"
                  onChange={onChange}
                  required
                />
                <label htmlFor="">3</label>
              </RadioButtonDiv>
              <RadioButtonDiv>
                <input
                  type="radio"
                  value="4"
                  name="bloodType"
                  onChange={onChange}
                  required
                />
                <label htmlFor=""> 4</label>
              </RadioButtonDiv>
            </RadioButtonWrapper>
          </WrapperInputRight>
        </Form>
        <WrapperButton>
          <Button type="submit">Start losing weight</Button>
        </WrapperButton>
      </form>

      {isModalShown && <Modal sum={summary} onClose={setIsModalShown} />}
    </div>
  );
};

const Title = styled.h1`
  display: flex;
  width: 280px;
  color: #212121;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  margin-bottom: 34px;
  margin-top: 32px;

  @media (min-width: 768px) {
    width: 504px;
    font-weight: 700;
    font-size: 34px;
    line-height: 140%;
    margin-bottom: 68px;
    margin-top: 95px;
  }

  @media (min-width: 1280px) {
    margin-top: 144px;
  }
`;

const Form = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  row-gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
    column-gap: 40px;
  }
`;

const RadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  column-gap: 24px;
  width: 240px;
  margin-bottom: 40px;
  margin-top: 8px;
`;

const RadioButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 8px;
  padding: 0;
  width: 40px;

  label {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: #9b9faa;
    margin-right: -28px;
  }
  input {
    position: absolute;
    opacity: 0;
  }

  label::before {
    content: '';
    display: flex;
    justify-content: center;
    border: 1px solid #e0e0e0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
  }

  input {
    display: flex;
    justify-content: center;
    cursor: pointer;
    width: 40px;
    opacity: 0;
    position: absolute;
  }
  input:checked {
    & + label::before {
      display: flex;
      justify-content: center;
      content: '⬤';
      align-items: center;
    }
    & + label {
      color: #fc842d;
      display: flex;
      justify-content: center;
    }
  }
`;

const InputContainer = styled.div`
  label {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: #9b9faa;
  }

  input {
    border: none;
    border-bottom: 1px solid #e0e0e0;
    width: 240px;
    outline: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: #454647;
    background-color: #fff;
  }
`;

const BloodTypeInput = styled.div`
  label {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: #9b9faa;
  }

  input {
    @media (max-width: 768px) {
      display: none;
    }

    @media (min-width: 768px) {
      border: none;
      border-bottom: 1px solid #e0e0e0;
      width: 240px;
      height: 12px;
      outline: none;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.04em;
      color: #454647;
      background-color: #ffffff;
    }
  }
  margin-top: 35px;
`;

const Button = styled.button`
  width: 210px;
  height: 43px;
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;
  color: #ffffff;
`;
const WrapperInputLeft = styled.div`
  padding: 0;
  width: 240px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
`;

const WrapperInputRight = styled.div`
  padding: 0;
  width: 240px;
`;

const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

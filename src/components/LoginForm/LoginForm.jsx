import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';
// import Container from 'components/Container/Container';
import {
  Input,
  Label,
  LabelPass,
  LogButton,
  RegButton,
  LogForm,
  Title,
  ButtonsWrapper,
  Img,
  Image,
} from './LoginForm.styled';
import img from '../../images/homeBgTablet.jpg';
import image from '../../images/homeBgDesktop.jpg';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'password':
        return setPassword(value);
      case 'email':
        return setEmail(value);
      default:
        return;
    }
  };

  const authOperations = { logIn };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = { email: email.toLowerCase(), password };
    dispatch(authOperations.logIn(formData));

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <LogForm onSubmit={handleSubmit}>
        <Title>Log In</Title>
        <Label>
          Email*
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </Label>
        <LabelPass>
          Password*
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </LabelPass>
        <ButtonsWrapper>
          <LogButton type="submit">Log In</LogButton>
          <RegButton to="/register">Register</RegButton>
        </ButtonsWrapper>
      </LogForm>
      <Img src={img} />
      <Image src={image} />
    </>
  );
};

export default LoginForm;

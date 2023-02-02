import Loader from 'components/Loader/Loader';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { isLoaded } from 'redux/auth/auth-selectors';
import { register, logIn } from '../../redux/auth/auth-operations';
import {
  ButtonsWrapper,
  Input,
  Label,
  LabelPass,
  LogButton,
  RegButton,
  RegisterForm,
  Title,
} from './RegistrationForm.styled';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoading = useSelector(isLoaded);
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'username':
        return setUsername(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const authOperations = { register, logIn };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = { username, email: email.toLowerCase(), password };
    dispatch(authOperations.register(formData))
      .then(() => {
        dispatch(logIn({ email: email.toLowerCase(), password }));
      })
      .catch(error => error(error.message));

    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      {isLoading ? <Loader /> : null}
      <RegisterForm onSubmit={handleSubmit}>
        <Title>Register</Title>
        <Label>
          Name*
          <Input
            type="text"
            name="username"
            onChange={handleChange}
            value={username}
          />
        </Label>
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
          <RegButton type="submit">Register</RegButton>
          <NavLink to="/login">
            <LogButton type="button">Log In</LogButton>
          </NavLink>
        </ButtonsWrapper>
      </RegisterForm>
    </>
  );
};

export default RegistrationForm;

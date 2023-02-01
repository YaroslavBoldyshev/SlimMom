import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  register,
  logIn,
  logOut,
  refresh,
} from '../../redux/auth/auth-operations';
import {
  Input,
  Label,
  LabelPass,
  LogButton,
  RegButton,
  LogForm,
  Title,
} from './LoginForm.styled';

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

  const authOperations = { register, logIn, logOut, refresh };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = { email: email.toLowerCase(), password };
    dispatch(authOperations.register(formData))
      .then(() => {
        dispatch(logIn({ email: email.toLowerCase(), password }));
      })
      .catch(error => error(error.message));

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
        <LogButton type="submit">Log In</LogButton>
        <RegButton type="button">Register</RegButton>
      </LogForm>
    </>
  );
};

export default LoginForm;

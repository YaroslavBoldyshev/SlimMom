import css from './LoginForm.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  console.log(email);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  
  return (
    <section>
      <form className={css.loginForm} onSubmit={handleSubmit}>
        <h4 className={css.title}>Log In</h4>
        <label className={css.logEmail} >
          Email*
          <input type="email" onChange={handleChange} value={email} name="email"/>
        </label>
        <label className={css.logPassword} >
          Password*
          <input type="password" onChange={handleChange} value={password} name="password"/>
        </label>
        <button type="submit" className={css.logButton}>
          Log In
        </button>
        <button type="button" className={css.regButton}>
          Register
        </button>
      </form>
    </section>
  );
};

export default LoginForm;

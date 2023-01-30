import css from './RegistrationForm.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  
  return (
    <section>
      <form className={css.loginForm} onSubmit={handleSubmit}>
        <h4 className={css.title}>Register</h4>
        <label className={css.regName}>
          Name*
          <input type="text" onChange={handleChange} value={name} name="name"/>
        </label>
        <label className={css.regEmail}>
          Email*
          <input type="text" onChange={handleChange} value={email} name="email"/>
        </label>
        <label className={css.regPassword}>
          Password*
          <input type="text" onChange={handleChange} value={password} name="password"/>
        </label>
        <button type="submit" className={css.regButton}>
          Register
        </button>
        <button type="button">Log In</button>
      </form>
    </section>
  );
};

export default RegistrationForm;

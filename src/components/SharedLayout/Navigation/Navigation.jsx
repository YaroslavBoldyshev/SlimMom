import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <NavLink to="/">Home(Logo) </NavLink>
      <NavLink to="/login">Login </NavLink>
      <NavLink to="/register">Registration </NavLink>
      <NavLink to="/diary">Diary(Private) </NavLink>
      <NavLink to="/calculator">Calculator(Private) </NavLink>
    </>
  );
};

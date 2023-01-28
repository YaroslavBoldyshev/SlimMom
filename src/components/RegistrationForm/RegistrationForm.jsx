import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  return (
    <section>
      <form className={css.loginForm}>
        <h4 className={css.title}>Register</h4>
        <label className={css.regName}>
          Name*
          <input type="text" />
        </label>
        <label className={css.regEmail}>
          Email*
          <input type="text" />
        </label>
        <label className={css.regPassword}>
          Password*
          <input type="text" />
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

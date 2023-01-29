import css from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <section>
      <form className={css.loginForm}>
        <h4 className={css.title}>Log In</h4>
        <label className={css.logEmail}>
          Email*
          <input type="text" />
        </label>
        <label className={css.logPassword}>
          Password*
          <input type="text" />
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

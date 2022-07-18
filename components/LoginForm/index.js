import styles from "./LoginForm.module.scss";

const LoginForm = ({
  email,
  error,
  password,
  setEmail,
  setPassword,
  onSubmit
}) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div>
          <h2>Login</h2>
        </div>
      </div>
      <div>
        <form onSubmit={onSubmit} className={styles.wrapper__form}>
          <form>
            <label htmlFor="loginEmail" sm={4}>
              Email:
            </label>
            <div sm={8}>
              <input
                type="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                name="email"
                id="loginEmail"
              />
            </div>
          </form>
          <form>
            <label htmlFor="loginPassword" sm={4}>
              Password:
            </label>
            <div sm={8}>
              <input
                type="password"
                name="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                id="loginPassword"
              />
            </div>
          </form>
          <button type="submit">Login</button>
        </form>
        {error
          ? <div className={styles.wrapper__error}>
              <b>ERROR:</b> {error}
            </div>
          : null}
      </div>
    </div>
  );
};

export default LoginForm;

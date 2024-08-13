import { Link, useLocation } from "react-router-dom";
import styles from "./AuthPage.module.css";

function AuthPage(props) {
  const location = useLocation();

  function handleAuthButton() {
    switch (location.pathname) {
      case "/signin":
        return (
          <div className={styles.link}>
            <p className={styles.text}>Ещё не зарегистрированы?</p>
            <Link to="/signup" className={styles.button}>
              Зарегистрироваться
            </Link>
          </div>
        );

      case "/signup":
        return (
          <div className={styles.link}>
            <p className={styles.text}>Уже зарегистрированы?</p>
            <Link to="/signin" className={styles.button}>
              Войти
            </Link>
          </div>
        );

      default:
        return "";
    }
  }

  return (
    <section className={styles.auth}>
      <h3 className={styles.title}>{props.title}</h3>

      <form
        className={styles.form}
        name=""
        //onSubmit={}
      >
        {props.children}
        <div className={styles.submit}>
          <span className={styles.error}></span>
          <button className={styles.button} type="submit">
            {props.submitText}
          </button>
        </div>
      </form>
      {handleAuthButton()}
    </section>
  );
}

export default AuthPage;

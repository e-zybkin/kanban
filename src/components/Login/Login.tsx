import AuthPage from "../AuthPage/AuthPage";
import { useLocation } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  const location = useLocation();
  /*пригодится, когда нужно будет сбрасывать введённые
  пользователем данные при переходе на другие страницы*/

  return (
    <main>
      <AuthPage title="Рады снова вас видеть!" name="login" submitText="Войти">
        <div>
          <label className={styles.label}>
            <p className={styles.caption}>Email</p>
            <input
              required
              minLength={2}
              maxLength={40}
              type="email"
              id="mail-input"
              className={styles.input}
              name="mail"
            />
            <span className={styles.error}></span>
          </label>

          <label className={styles.label}>
            <p className={styles.caption}>Пароль</p>
            <input
              required
              minLength={2}
              maxLength={40}
              type="password"
              id="password-input"
              className={styles.input}
              name="password"
            />
            <span className={styles.error}></span>
          </label>
        </div>
      </AuthPage>
    </main>
  );
}

export default Login;

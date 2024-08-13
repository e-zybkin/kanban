import AuthPage from "../AuthPage/AuthPage";
import styles from "./Register.module.css";

function Register() {
  return (
    <main>
      <AuthPage
        title="Приветствуем нового пользователя!"
        name="register"
        submitText="Зарегистрироваться"
      >
        <div>
          <label className={styles.label}>
            <p className={styles.caption}>Имя</p>
            <input
              required
              minLength={2}
              maxLength={20}
              type="text"
              id="name-input"
              pattern="[a-zA-Zа-яА-Я\s\-]+"
              className={styles.input}
              name="name"
            />
            <span className={styles.error}></span>
          </label>

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

export default Register;

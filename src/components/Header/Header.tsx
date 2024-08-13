import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const location = useLocation();

  function handleHeaderLink() {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <div className={styles.box}>
              <h1 className={`${styles.logo} ${styles.content_main}`}>
                KANBAN BOARD
              </h1>
              <button
                className={`${styles.logout} ${styles["scale-button"]}`}
                type="button"
              ></button>
            </div>
            <p className={`${styles.text} ${styles.content_main}`}>
              Добрый день, Евгений!
            </p>
          </>
        );

      case "/board":
        return (
          <>
            <div className={styles.box}>
              <h1 className={`${styles.logo} ${styles.content_other}`}>
                DESIGN WEEKLY
              </h1>
              <button
                className={`${styles.logout} ${styles["scale-button"]}`}
                type="button"
              ></button>
            </div>
            <p className={`${styles.text} ${styles.content_other}`}>
              A board to keep track of design progress.
            </p>
          </>
        );

      default:
        return "";
    }
  }

  return (
    <>
      <header className={styles.header}>{handleHeaderLink()}</header>
    </>
  );
}

export default Header;

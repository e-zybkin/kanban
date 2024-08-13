import { Link } from "react-router-dom";
import styles from "./BoardCard.module.css";

function BoardCard(props) {
  const func = (event) => {
    event.preventDefault();
    console.log(1);
  };

  return (
    <>
      <Link to="/board" className={styles.link}>
        <article className={`${styles.card} shadow-button`}>
          <h3 className={styles.name}>{props.name}</h3>
          <button
            className={`${styles.button} ${styles.button_type_edit} scale-button`}
            type="button"
            onClick={func}
          ></button>
          <button
            className={`${styles.button} ${styles.button_type_del} scale-button`}
            type="button"
            onClick={func}
          ></button>
        </article>
      </Link>
    </>
  );
}

export default BoardCard;

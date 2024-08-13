import BoardCard from "../BoardCard/BoardCard";
import tests from "../../testData";
import styles from "./AllUserBoards.module.css";

function AllUserBoards() {
  return (
    <>
      <div className={styles.boards}>
        <h2 className={styles.title}>Ваши доски:</h2>
        <div className={styles.box}>
          {tests.map((item, i) => (
            <BoardCard key={i} name={item.name} />
          ))}
        </div>
        <button type="button" className={`${styles.button} shadow-buttons`}>
          Создать
        </button>
      </div>
    </>
  );
}

export default AllUserBoards;

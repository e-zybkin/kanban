import Header from "../Header/Header";
import AllUserBoards from "../AllUserBoards/AllUserBoards";
import styles from "./Main.module.css";

function Main() {
  return (
    <>
      <Header />
      <main>
        <AllUserBoards />
      </main>
    </>
  );
}

export default Main;

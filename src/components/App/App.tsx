import Main from "../Main/Main";
import Board from "../Board/Board";
import Login from "../Login/Login";
import Register from "../Register/Register";
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import styles from "./App.module.css";
import "../../index.css";

function App() {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/board" element={<Board />} />

          <Route path="/signin" element={<Login />} />

          <Route path="/signup" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

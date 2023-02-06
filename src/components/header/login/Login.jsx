import styles from "./login.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import DropdownMenuUser from "../user/DropdownMenuUser";

function Login() {
  const { userState } = useContext(AppContext);
  return (
    <div className={styles.login_wrapper}>
      <BsFillPersonFill className={styles.login_icon} />
      <div>
        {userState.isAuth ? (
          <DropdownMenuUser title={localStorage.getItem("name")} />
        ) : (
          <Link to="/login">Sign in</Link>
        )}
      </div>
    </div>
  );
}

export default Login;

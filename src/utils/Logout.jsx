import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function Logout({ children, f = (f) => f }) {
  const { dispatchUser } = useContext(AppContext);
  const clickHandler = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("email");
    localStorage.removeItem("isActivated");
    localStorage.removeItem("name");
    localStorage.removeItem("surname");
    localStorage.removeItem("id");
    localStorage.removeItem("adress");
    localStorage.removeItem("phone");
    dispatchUser({ type: "SIGN_OUT_USER" });
    f();
  };
  return <div onClick={clickHandler}>{children}</div>;
}

export default Logout;

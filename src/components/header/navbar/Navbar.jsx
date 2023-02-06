import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { RiPhoneFill } from "react-icons/ri";
import Logo from "../logo/Logo";
import NavList from "../nav/navList/NavList";
import Cart from "../cart/Cart";
import Login from "../login/Login";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.top_bar}>
        <div className={styles.phone_wrapper}>
          <div className={styles.phone_link_wrapper}>
            <RiPhoneFill />
            <a className={styles.phone_link} href="tel:+380671234567">
              +38(067)-123-45-67
            </a>
          </div>
          <div className={styles.phone_link_wrapper}>
            <RiPhoneFill />
            <a className={styles.phone_link} href="tel:+380631234567">
              +38(063)-123-45-67
            </a>
          </div>
        </div>
        <div className={styles.lang_wrapper}>
          {" "}
          <Login />
        </div>
      </div>
      <div className={styles.main_bar}>
        <Link to="/">
          <Logo className={styles.logo} />
        </Link>
        <NavList />
        <Cart />
      </div>
    </div>
  );
}

export default Navbar;

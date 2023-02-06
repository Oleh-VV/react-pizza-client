import { Link } from "react-router-dom";
import styles from "./nav.module.css";
//import { RiMenuFill } from "react-icons/ri";
import DropdownMenu from "../dropdownMenu/DropdownMenu";

function NavList() {
  return (
    <div className={styles.nav_wrapper}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_list_item}>
          <div className={styles.nav_list_link}>
            <DropdownMenu />
          </div>
        </li>
        <li className={styles.nav_list_item}>
          <Link className={styles.nav_list_link} to="/about">
            About Us
          </Link>
        </li>
        <li className={styles.nav_list_item}>
          <Link className={styles.nav_list_link} to="/contacts">
            Contacts
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavList;

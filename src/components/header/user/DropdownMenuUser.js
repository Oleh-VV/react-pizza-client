import styles from "./dropdownMenuUser.module.css";
import { Link } from "react-router-dom";
import Logout from "../../../utils/Logout";
import React, { useState, useEffect, useRef } from "react";

function DropdownMenuUser({ title }) {
  const [open, setOpen] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const dropDown = () => {
    setOpen(!open);
  };
  return (
    <div className={styles.menu_container} ref={menuRef}>
      <div className={styles.menu_trigger} onClick={dropDown}>
        {title}
      </div>
      <div
        className={`${styles.dropdown_menu} ${
          open ? styles.active : styles.inactive
        }`}
      >
        <ul>
          <li className={styles.dropdownItem} onClick={dropDown}>
            <Link className={styles.dropdownLink} to="/accaunt">
              Accaunt
            </Link>
          </li>
          <li className={styles.dropdownItem}>
            <div className={styles.dropdownLink}>
              <Logout f={dropDown}>Logout</Logout>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropdownMenuUser;

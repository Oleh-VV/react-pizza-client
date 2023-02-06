import styles from "./dropdownMenu.module.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

function DropdownMenu() {
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
        Menu
      </div>
      <div
        className={`${styles.dropdown_menu} ${
          open ? styles.active : styles.inactive
        }`}
      >
        <ul>
          <DropdownItem text={"Pizza"} onClick={dropDown} />
          <DropdownItem text={"Salads"} onClick={dropDown} />
          <DropdownItem text={"Vegan"} onClick={dropDown} />
          <DropdownItem text={"Drinks"} onClick={dropDown} />
          <DropdownItem text={"Desserts"} onClick={dropDown} />
        </ul>
      </div>
    </div>
  );
}

function DropdownItem({ text, onClick }) {
  return (
    <li className={styles.dropdownItem} onClick={onClick}>
      <Link
        className={styles.dropdownLink}
        to={`/category/${text[0].toLowerCase() + text.slice(1)}`}
      >
        {text}
      </Link>
    </li>
  );
}

export default DropdownMenu;

import styles from "./dropdownNavSmall.module.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import DropdownMenuSmall from "./DropdownMenuSmall";

function DropdownNavSmall() {
  const [openNav, setOpenNav] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (openNav && !menuRef.current.contains(e.target)) {
        setOpenNav(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const dropDownNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <div className={styles.nav_container} ref={menuRef}>
      <AiOutlineMenu className={styles.nav_icon} onClick={dropDownNav} />
      <div
        className={`${styles.dropdown_nav} ${
          openNav ? styles.active : styles.inactive
        }`}
      >
        <ul>
          <li className={styles.dropdownNavItem_menu}>
            <DropdownMenuSmall onClickNav={dropDownNav} />
          </li>
          <DropdownItem text={"About Us"} onClick={dropDownNav} to="/about" />
          <DropdownItem
            text={"Contacts"}
            onClick={dropDownNav}
            to="/contacts"
          />
        </ul>
      </div>
    </div>
  );
}

function DropdownItem({ text, onClick, to }) {
  return (
    <li className={styles.dropdownNavItem} onClick={onClick}>
      <Link className={styles.dropdownNavLink} to={to}>
        {text}
      </Link>
    </li>
  );
}

export default DropdownNavSmall;

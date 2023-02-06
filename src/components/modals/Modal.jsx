import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./modal.module.css";
import Logo from "../header/logo/Logo";

function Modal({ text, isOpen, setIsOpen }) {
  const navigate = useNavigate();
  return (
    <div
      className={`${styles.modal_container} ${
        isOpen ? styles.active : styles.inactive
      }`}
    >
      <div className={styles.modal_wrapper}>
        <p className={styles.modal_text}>{text}</p>{" "}
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.btn_wrapper}>
          <button
            type="button"
            className={styles.btn}
            onClick={() => {
              setIsOpen(false);
              navigate("/");
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

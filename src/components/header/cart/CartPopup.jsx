import { Link } from "react-router-dom";
import { useRef, useEffect, useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import styles from "./cart.module.css";
import CartItem from "./CartItem";

function CartPopup({ isOpen, openHandler }) {
  const { cartState } = useContext(AppContext);
  let cartRef = useRef();
  useEffect(() => {
    let closeHandler = (e) => {
      if (!cartRef.current.contains(e.target)) {
        openHandler(false);
      }
    };
    document.addEventListener("mousedown", closeHandler);
    return () => {
      document.removeEventListener("mousedown", closeHandler);
    };
  });

  return (
    <div
      className={`${styles.cart_popup_wrapper} ${
        isOpen ? styles.active : styles.inactive
      }`}
      ref={cartRef}
    >
      <div className={styles.items_wrapper}>
        {cartState.cart.map((item) => {
          if (item.amount !== 0) {
            return (
              <CartItem key={item.id} item={item} openHandler={openHandler} />
            );
          } else return null;
        })}
      </div>
      <div className={styles.btn_wrapper}>
        <Link to="/order">
          <button
            type="button"
            className={styles.btn}
            onClick={() => openHandler(false)}
          >
            Order
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CartPopup;

import { useState, useEffect } from "react";
import { BsCart3 } from "react-icons/bs";
import styles from "./cart.module.css";
import CartPopup from "./CartPopup";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";

function Cart() {
  const { cartState } = useContext(AppContext);
  useEffect(() => {
    if (cartState.cartAmount === 0) setIsOpen(false);
  }, [cartState.cartAmount]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.cart_icon_wrapper}>
      <BsCart3
        className={styles.cart_icon}
        onClick={() => {
          if (cartState.cartAmount !== 0) setIsOpen(!isOpen);
        }}
      />
      {cartState.cartAmount !== 0 && (
        <div
          className={styles.cart_items_amount}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span>{cartState.cartAmount}</span>
        </div>
      )}
      {cartState.cartAmount !== 0 && (
        <CartPopup isOpen={isOpen} openHandler={setIsOpen} />
      )}
    </div>
  );
}

export default Cart;

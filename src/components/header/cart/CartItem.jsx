import { HiPlus, HiMinus } from "react-icons/hi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import styles from "./cart.module.css";

function CartItem({ item, openHandler }) {
  const { cartState, dispatchCart } = useContext(AppContext);
  const incrementCartItem = (id) => {
    dispatchCart({ type: "INCREMENT_CART_ITEM", payload: id });
    dispatchCart({ type: "CALC_CART_ITEMS" });
  };
  const decrementCartItem = (id) => {
    dispatchCart({ type: "DECREMENT_CART_ITEM", payload: id });
    dispatchCart({ type: "CALC_CART_ITEMS" });
  };
  const removeCartItem = (id) => {
    dispatchCart({ type: "REMOVE_CART_ITEM", payload: id });
    dispatchCart({ type: "CALC_CART_ITEMS" });
    if (cartState.cartAmount === 0) openHandler(false);
  };
  return (
    <>
      <div className={styles.cart_item_wrapper}>
        <div className={styles.cart_item_name}>{item.productName}</div>
        <div className={styles.cart_item_controllers}>
          <div className={styles.cart_amountBtns_wrapper}>
            <HiMinus
              className={styles.cartBtn_icon}
              onClick={() => decrementCartItem(item.id)}
            />
            <span className={styles.cart_item_amount}>{item.amount}</span>
            <HiPlus
              className={styles.cartBtn_icon}
              onClick={() => incrementCartItem(item.id)}
            />
          </div>
          <div className={styles.cart_price_wrapper}>
            <span>{item.amount * item.price} </span>
            <span>UAH</span>
          </div>
          <RiDeleteBin2Line
            className={styles.cartBtn_icon}
            onClick={() => removeCartItem(item.id)}
          />
        </div>
      </div>{" "}
      <hr />
    </>
  );
}

export default CartItem;

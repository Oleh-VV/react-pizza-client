import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import no_photo from "../../assets/no_photo.png";
import styles from "./orderItem.module.css";

function OrderItem({ dispatchCart, item }) {
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
  };
  return (
    <div className={styles.item_wrapper}>
      <div className={styles.item_image_wrapper}>
        <img
          src={
            item.image
              ? `${process.env.REACT_APP_API_URL}uploads/${item.image}`
              : no_photo
          }
          alt={item.productName}
        />
      </div>
      <div className={styles.item_name}>{item.productName}</div>
      <div className={styles.amountBtns_wrapper}>
        <FiMinusCircle
          className={styles.orderBtn_icon}
          onClick={() => decrementCartItem(item.id)}
        />
        <span className={styles.item_amount}>{item.amount}</span>
        <FiPlusCircle
          className={styles.orderBtn_icon}
          onClick={() => incrementCartItem(item.id)}
        />
      </div>
      <div className={styles.price_wrapper}>
        <span>{item.amount * item.price} UAH</span>
      </div>
      <IoMdCloseCircleOutline
        className={styles.orderBtnDlete_icon}
        onClick={() => removeCartItem(item.id)}
      />
    </div>
  );
}

export default OrderItem;

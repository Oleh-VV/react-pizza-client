import styles from "./toCartBtn.module.css";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";

function ToCartBtn({ product }) {
  const { dispatchCart } = useContext(AppContext);

  return (
    <div className={styles.btn_wrapper}>
      <button
        className={styles.btn}
        onClick={() => {
          dispatchCart({ type: "ADD_CART_ITEM", payload: product });
          dispatchCart({ type: "CALC_CART_ITEMS" });
        }}
      >
        ADD TO CART
      </button>{" "}
    </div>
  );
}

export default ToCartBtn;

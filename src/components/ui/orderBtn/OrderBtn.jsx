import { RiAddCircleLine } from "react-icons/ri";
import styles from "./orderBtn.module.css";
function OrderBtn() {
  return (
    <div className={styles.btn_wrapper}>
      <button className={styles.btn}>ORDER</button>
    </div>
  );
}

export default OrderBtn;

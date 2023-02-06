import { RiAddCircleLine } from "react-icons/ri";
import styles from "./additionBtn.module.css";
function AdditionBtn() {
  return (
    <div className={styles.btn_wrapper}>
      <button className={styles.btn}>
        <RiAddCircleLine className={styles.btn_icon} />
      </button>
      <span className={styles.addition}>Choose an addition</span>
    </div>
  );
}

export default AdditionBtn;

import styles from "./logo.module.css";
import { GiFullPizza } from "react-icons/gi";

function Logo() {
  return (
    <div className={styles.logo_wrapper}>
      <GiFullPizza className={styles.pizzaIcon} />
      <div className={styles.pizzaLetters}>Pizzza</div>
    </div>
  );
}

export default Logo;

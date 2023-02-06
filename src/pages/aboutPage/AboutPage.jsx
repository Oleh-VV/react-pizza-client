import { Link } from "react-router-dom";
import styles from "./aboutPage.module.css";
import About1 from "../../assets/about1.jpg";
import About2 from "../../assets/about2.jpg";
import About3 from "../../assets/about3.jpg";
import Logo from "../../components/header/logo/Logo";

function AboutPage() {
  return (
    <>
      <div className={styles.navigator}>
        <Link className={styles.link}>Home</Link>
        <span className={styles.link_devision}>/</span>
        <Link className={styles.link_active}>About</Link>
      </div>
      <div className={styles.container}>
        <h1>About Pizzza</h1>
        <div className={styles.logo_wrapper}>
          <Logo className={styles.logo} />
        </div>
        <p>
          We are glad to announce that Pizzza has received the Ukrainian
          People's Award and won in the nomination "Pizzeria 2023"! Also in
          2023, we confirmed the title of the best enterprise in the country and
          were once again awarded the "Quality Star!" For us it is a great joy
          and at the same time a responsibility. These awards motivate you to
          work even better and strive for new achievements! Friends, thank you
          for your support in voting. Stay with Pizzza!
        </p>
        <p>
          We cook pizza like real Italians! From now on, Pizzza has the
          opportunity to order Children's Master Class at: 1. str. Slobidska, 79
        </p>
        <p>
          Minimum number of participants: 6 people. Find out all the details by
          phone.
        </p>
        <h3>Stay with Pizzza!</h3>
        <div className={styles.image_wrapper}>
          <img src={About1} alt="about us page foto" />
        </div>
        <div className={styles.image_wrapper}>
          <img src={About2} alt="about us page foto" />
        </div>
        <div className={styles.image_wrapper}>
          <img src={About3} alt="about us page foto" />
        </div>{" "}
      </div>
    </>
  );
}

export default AboutPage;

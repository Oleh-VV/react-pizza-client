import styles from "./footer.module.css";
import { RiPhoneFill, RiMailLine } from "react-icons/ri";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_contacts}>
        <div>
          <RiPhoneFill className={styles.contact_icon} />
          <a href="tel:+380671234567">+38067-123-45-67</a>
        </div>
        <div>
          <RiMailLine className={styles.contact_icon} />
          <a href="mailto:wellson@ukr.net">well_son@ukr.net</a>
        </div>
      </div>
      <div className={styles.footer_icons_wrapper}>
        <a href="#">
          <BsFacebook className={styles.footer_icon} />
        </a>
        <a href="#">
          <BsInstagram className={styles.footer_icon} />
        </a>
        <a href="#">
          <BsTwitter className={styles.footer_icon} />
        </a>
      </div>
      <div className={styles.footer_rights}>
        <p>Powered by</p>
        <a href="#">
          <span>VOV</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

import { Link } from "react-router-dom";
import Map from "../../components/map/Map";
import styles from "./contactsPage.module.css";

function ContactsPage() {
  return (
    <>
      <div className={styles.navigator}>
        <Link className={styles.link}>Home</Link>
        <span className={styles.link_devision}>/</span>
        <Link className={styles.link_active}>Contacts</Link>
      </div>
      <div className={styles.container}>
        <div className={styles.map}>
          <Map />
        </div>
        <div>
          <h2>Our Contacts</h2>
          <div className={styles.contacts_wrapper}>
            <h3>Our phone numbers</h3>
            <div className={styles.phone_link_wrapper}>
              <a className={styles.phone_link} href="tel:+380671234567">
                +38(067)-123-45-67
              </a>
            </div>
            <div className={styles.phone_link_wrapper}>
              <a className={styles.phone_link} href="tel:+380671234567">
                +38(068)-123-45-67
              </a>
            </div>
            <div className={styles.phone_link_wrapper}>
              <a className={styles.phone_link} href="tel:+380671234567">
                +38(069)-123-45-67
              </a>
            </div>
            <div className={styles.phone_link_wrapper}>
              <a className={styles.phone_link} href="tel:+380631234567">
                +38(063)-123-45-67
              </a>
            </div>
          </div>
          <div className={styles.contacts_wrapper}>
            <h3>Our emails</h3>
            <div>
              <a href="mailto:wellson@ukr.net">first@ukr.net</a>
            </div>
            <div>
              <a href="mailto:wellson@ukr.net">second@ukr.net</a>
            </div>
            <div>
              <a href="mailto:wellson@ukr.net">third@ukr.net</a>
            </div>
          </div>
          <div className={styles.contacts_wrapper}>
            <h3>Our adress</h3>
            <p> Ukraine, Kyiv, Dobrova srt, 123</p>
            <p> Ukraine, Harkiv, Academy srt, 523</p>
            <p> Ukraine, Odesa, Bulvar srt, 13</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactsPage;

import styles from "./notFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={styles.not_found_container}>
      <h1 className={styles.not_found}>Not Found Such Page!</h1>
    </div>
  );
}

export default NotFoundPage;

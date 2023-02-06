import { Link } from "react-router-dom";
import styles from "./productCategory.module.css";

function ProductCategory({ img_URL, alt_info, title }) {
  return (
    <div className={styles.category_wrapper}>
      <div className={styles.category_title}>
        <p>{title}</p>
      </div>
      <Link to={`/category/${title[0].toLowerCase() + title.slice(1)}`}>
        <img src={img_URL} alt={alt_info} className={styles.category_img} />
      </Link>
    </div>
  );
}

export default ProductCategory;

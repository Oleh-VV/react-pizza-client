import { Link } from "react-router-dom";
import styles from "./product.module.css";
import no_photo from "../../assets/no_photo.png";
import ToCartBtn from "../ui/toCartBtn/ToCartBtn";

function Product({ product }) {
  return (
    <div
      className={
        product.image ? styles.product_wrapper : styles.product_wrapper_no_photo
      }
    >
      <Link to={`/product/${product._id}`}>
        <div className={styles.product_title}>
          <p>{product.productName}</p>
        </div>
      </Link>
      <Link to={`/product/${product._id}`}>
        <img
          src={
            product.image
              ? `${process.env.REACT_APP_API_URL}uploads/${product.image}`
              : no_photo
          }
          alt={product.productName}
          className={styles.product_img}
        />
      </Link>
      <div className={styles.product_consist}>
        {product.consist && (
          <Link to={`/product/${product._id}`}>
            <p>{product.consist}</p>
          </Link>
        )}
        <div className={styles.tocart_btn_wrapper}>
          <ToCartBtn product={product} />
        </div>
      </div>
    </div>
  );
}

export default Product;
